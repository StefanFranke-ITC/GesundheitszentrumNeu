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
          <v-row>

            <v-col>
              <v-card
                  class="mx-auto my-12 pa-5"
                  height="500"
                  style="overflow-y: scroll;background-color: rgba(255,255,255,0.75)">
                <v-row class="justify-center mt-3">
                  <v-col class="d-flex justify-center" cols="5">
                    <v-text-field v-model="ueberschrift" label="Überschrift" variant="outlined"/>
                  </v-col>
                  <v-col class="d-flex justify-center" cols="5">
                    <v-file-input
                        v-model="bild"
                        accept="image/*"
                        label="Wählen Sie ein Bild aus"
                        prepend-icon="mdi-camera"
                        variant="outlined"
                        @change="handleFileChange"
                    ></v-file-input>
                  </v-col>
                  <v-col class="d-flex justify-center" cols="5">
                    <v-text-field v-model="datum" label="Datum" type="date" variant="outlined"/>
                  </v-col>
                  <v-col class="d-flex justify-center" cols="5">
                    <v-text-field v-model="autor" label="Autor" variant="outlined"/>
                  </v-col>
                  <v-col class="mt-n4 d-flex justify-center" cols="10">
                    <v-card style="width: 100%" variant="outlined">
                      <v-card-item>
                        <quill-editor v-model:content="text" :options="editorOptions"
                                      style="width: 100%"></quill-editor>
                      </v-card-item>
                    </v-card>
                  </v-col>
                  <v-col class="d-flex justify-center" cols="5">
                    <v-btn @click="create">
                      speichern
                    </v-btn>
                  </v-col>
                  <v-col class="d-flex justify-center" cols="5">
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
            <v-data-table-virtual :items="bereinigtesBerichteArray" fixed-header
                                  height="550" items-per-page="7">
              <template v-slot:item="{ item }">
                <tr>
                  <td>{{ item.id }}</td>
                  <td>{{ item.datum }}</td>
                  <td>{{ item.autor }}</td>
                  <td>{{ item.ueberschrift }}</td>
                  <td>
                    <Icon :icon="item.icon" color="red" style="font-size: 30px" @click="deleteMethod(item)"/>
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

import {Icon} from "@iconify/vue/dist/iconify";
import {mapGetters} from "vuex";
import {QuillEditor} from "@vueup/vue-quill";
import {QuillDeltaToHtmlConverter} from "quill-delta-to-html";
import axios from "axios";

export default {
  data() {
    return {
      tab: null,
      bild: '',
      datum: '',
      autor: '',
      ueberschrift: '',
      text: '',
      imageURL: '',
      editorOptions: {
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline'],
            [{'header': 2}],
            [{'color': []}, {'background': []}],
            ['clean']
          ]
        }
      }
    }
  },
  computed: {
    ...mapGetters(['berichteArray']),
    bereinigtesBerichteArray() {
      return this.$store.state.berichteArray.map(item => {
        const newObj = Object.assign({...item, icon: 'fluent:delete-16-regular'}, item);
        delete newObj.bild;
        delete newObj.text;
        return newObj;
      });
    }
  },
  methods: {
    handleFileChange() {
      if (this.bild && this.bild.length > 0) {
        const file = this.bild[0];
        this.imageURL = URL.createObjectURL(file);
      }
    },
    async create() {
      this.text = this.convertDeltaToHtml(this.text)
      try {
        let formData = new FormData();
        formData.append('files', this.bild[0]);
        formData.append('text', this.text);
        formData.append('ueberschrift', this.ueberschrift);
        formData.append('datum', this.datum);
        formData.append('autor', this.autor);

        await axios.post('https://tier-gesundheitszentrum.com:8080/auth/bericht', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer${localStorage.getItem('token')}`
          }
        })

        await this.get()

        this.bild = null;
        this.imageURL = ''
        this.text = ''
        this.autor = ''
        this.datum = ''
        this.ueberschrift = ''

      } catch (e) {
        alert("Bitte füllen Sie alle Felder aus.")
      }
      await this.get()
    },
    async deleteMethod(bericht) {
      try {
        await axios.delete('https://tier-gesundheitszentrum.com:8080/auth/bericht/' + bericht.id, {
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
      const response = await axios.get('https://tier-gesundheitszentrum.com:8080/auth/bericht', {
        headers: {
          'Authorization': `Bearer${localStorage.getItem('token')}`
        }
      })

      const berichteArray = response.data;
      Object.freeze(berichteArray);

      this.$store.state.berichteArray = berichteArray;
      this.$store.state.berichteArray.forEach(item => {
        item.bild = `data:image/jpeg;base64,${item.bild}`;
      });
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
  beforeCreate() {

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

.container {
  background-color: rgba(255, 255, 255, 0.74);
  transform: scale(0.4);
  border: 2px solid black;
  padding: 20px;
  width: 70%;
  margin: 50px auto;
  position: absolute;
  top: 0px;
  overflow: hidden;
  border-radius: 5px;
  transform-origin: 25px 25px;
}

.image {
  float: left; /* Float links für das Bild */
  margin-right: 20px; /* Abstand zum Text rechts vom Bild */
}

.text {
  text-align: justify;
}
</style>