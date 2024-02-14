<template>
  <div>
    <v-tabs
        v-model="tab"
        align-tabs="center"
        class="mt-3 text-white"
        color="black"
        style="height: 100%"
    >
      <v-tab :value="0" style="color: blue">Erstellen</v-tab>
      <v-tab :value="1" style="color: blue">Löschen</v-tab>
    </v-tabs>

    <v-window v-model="tab">
      <v-window-item value="0">
        <v-container fluid>
          <v-row class="justify-center">
            <v-col>
              <v-card
                  class="mx-auto my-12 pa-5"
                  height="500"
                  style="background-color: rgba(255,255,255,0.75); overflow-y: scroll">
                <v-row class="justify-center mt-3">
                  <v-col class="mt-n4 d-flex justify-center" cols="8">
                    <v-text-field v-model="ueberschrift" label="Überschrift" variant="outlined"/>
                  </v-col>
                  <v-col class="mt-n4 d-flex justify-center" cols="4">
                    <v-text-field
                        v-model="preis"
                        label="Preis"
                        variant="outlined"
                        @input="updatePreis"
                    />
                  </v-col>
                  <v-col class="mt-n4 d-flex justify-center" cols="3">
                    <v-text-field v-model="vonDatum" label="Von" type="date" variant="outlined"/>
                  </v-col>
                  <v-col class="mt-n4 d-flex justify-center" cols="3">
                    <v-text-field v-model="bisDatum" label="Bis" type="date" variant="outlined"/>
                  </v-col>
                  <v-col class="mt-n4 d-flex justify-center" cols="3">
                    <v-text-field v-model="vonUhrzeit" label="Von" type="time" variant="outlined"/>
                  </v-col>
                  <v-col class="mt-n4 d-flex justify-center" cols="3">
                    <v-text-field v-model="bisUhrzeit" label="Bis" type="time" variant="outlined"/>
                  </v-col>
                  <v-col class="mt-n4 d-flex justify-center" cols="5">
                    <v-text-field v-model="straße" label="Straße & Hausnummer" variant="outlined"/>
                  </v-col>
                  <v-col class="mt-n4 d-flex justify-center" cols="5">
                    <v-text-field v-model="ort" label="Ort" variant="outlined"/>
                  </v-col>
                  <v-col class="mt-n4 d-flex justify-center" cols="2">
                    <v-text-field v-model="plz" label="PLZ" variant="outlined"/>
                  </v-col>
                  <v-col class="mt-n4 d-flex justify-center" cols="12">
                    <v-card variant="outlined" style=" width: 100%" >
                      <v-card-item>
                      <quill-editor style="width: 100%" v-model:content="text" :options="editorOptions"></quill-editor>
                      </v-card-item>
                    </v-card>
                  </v-col>
                  <v-col class=" d-flex justify-center" cols="5">
                    <v-btn @click="create">
                      speichern
                    </v-btn>
                  </v-col>
                  <v-col class=" d-flex justify-center" cols="5">
                    <v-btn>
                      leeren
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-window-item>

      <v-window-item value="1">
        <v-row class="justify-center mt-3" style="width: 100%">
          <v-col cols="10">
            <v-data-table-virtual :items="bereinigtesSeminarArray" fixed-header height="550"
                                  items-per-page="7">
              <template v-slot:item="{ item }">
                <tr>
                  <td>{{ item.id }}</td>
                  <td>{{ item.ueberschrift }}</td>
                  <td>{{ item.vonDatum }}</td>
                  <td>{{ item.bisDatum }}</td>
                  <td>{{ item.vonUhrzeit }}</td>
                  <td>{{ item.bisUhrzeit }}</td>
                  <td>{{ item.preis }}</td>
                  <td>{{ item.ort }}</td>
                  <td>{{ item.straße }}</td>
                  <td>{{ item.plz }}</td>
                  <td>
                    <Icon :icon="item.löschen" class="ml-3" color="red" style="font-size: 30px"
                          @click="deleteMethod(item)"/>
                  </td>
                </tr>
              </template>
            </v-data-table-virtual>
          </v-col>
        </v-row>
      </v-window-item>
    </v-window>


  </div>
</template>

<script>
import axios from "axios";

import {Icon} from "@iconify/vue/dist/iconify";
import {mapGetters} from "vuex";
import {QuillEditor} from "@vueup/vue-quill";
import {QuillDeltaToHtmlConverter} from "quill-delta-to-html";

export default {
  data() {
    return {
      tab: null,
      ueberschrift: '',
      vonDatum: '',
      bisDatum: '',
      vonUhrzeit: '',
      bisUhrzeit: '',
      text: '',
      preis: '',
      ort: '',
      straße: '',
      plz: '',
      editorOptions: {
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline'],
            [{ 'header': 1 }, { 'header': 2 }],
            [{ 'color': [] }, { 'background': [] }],
            ['clean']
          ]
        }
      }

    }
  },
  computed: {
    ...mapGetters(['seminarArray']),
    bereinigtesSeminarArray() {
      return this.$store.state.seminarArray.map(item => {
        const newObj = Object.assign({...item, löschen: 'fluent:delete-16-regular'}, item);
        delete newObj.text
        return newObj;
      });
    },
  },
  methods: {
    updatePreis() {
      this.preis = this.preis.replace(/€/g, '');
      if (!this.preis.endsWith('€')) {
        this.preis += '€';
      }
    },
    async create() {
      this. text = this.convertDeltaToHtml(this.text)
      try {
        await axios.post('/seminar', {
          ueberschrift: this.ueberschrift,
          vonDatum: this.vonDatum,
          bisDatum: this.bisDatum,
          vonUhrzeit: this.vonUhrzeit,
          bisUhrzeit: this.bisUhrzeit,
          text: this.text,
          preis: this.preis,
          ort: this.ort,
          straße: this.straße,
          plz: this.plz,
          email: this.email,
          telefonnummer: this.telefonnummer,
          name: this.name,
        }, {
          headers: {
            'Authorization': `Bearer${localStorage.getItem('token')}`
          }
        })

        await this.get()

        this.ueberschrift = null;
        this.vonDatum = null;
        this.bisDatum = null;
        this.vonUhrzeit = null;
        this.bisUhrzeit = null;
        this.text = null;
        this.preis = null;
        this.ort = null;
        this.straße = null;
        this.plz = null;
        this.email = null;
        this.telefonnummer = null;
        this.name = null;


      } catch (e) {
        alert("Bitte füllen Sie alle Felder aus.")
      }
      await this.get()
    },
    async deleteMethod(seminar) {
      try {
        await axios.delete('/seminar/' + seminar.id, {
          headers: {
            'Authorization': `Bearer${localStorage.getItem('token')}`
          }
        })
        await this.get()
      } catch (e) {
        alert("Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut. Falls das Problem weiterhin besteht, kontaktieren Sie Bitte den Administrator.")
      }

    },
    async get() {
      const response = await axios.get('/seminar')

      const seminarArray = response.data;
      Object.freeze(seminarArray);
      this.$store.state.seminarArray = seminarArray;
    },
   convertDeltaToHtml(delta) {
      const converter = new QuillDeltaToHtmlConverter(delta.ops);
      return converter.convert();
    },
  },
  components: {
    QuillEditor,
    Icon
  },
  mounted() {
    this.get()
  },
  created() {
  }
}
</script>

<style scoped>
.v-row {
  width: 100%;
  margin-left: 0px;
  margin-right: 0px;
}
</style>