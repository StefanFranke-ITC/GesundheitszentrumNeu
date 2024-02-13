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
            <v-col cols="4">
              <v-card
                  class="mx-auto my-12 "

                  style="transform: scale(0.5);   transform-origin: 25px 25px; width: 180%; background-color: rgba(255,255,255,0.45); backdrop-filter: blur(4px);box-shadow: 1px 1px 5px black "

              >
                <template>
                  <v-progress-linear
                      color="deep-purple"
                      height="10"
                  ></v-progress-linear>
                </template>

                <div style="background-color: rgba(0,130,194,0.74)">
                  <v-card-title class="text-white">{{ ueberschrift }}</v-card-title>

                </div>

                <v-card-text>


                  <div>
                    {{ text }}

                  </div>
                </v-card-text>

                <v-divider class="mx-4"></v-divider>
                <v-row class="ma-0 px-2 justify-center" style="width: 100%">
                  <v-col cols="4" class="d-flex justify-center">
                    <h3 class="mt-3">Datum:</h3>
                    &nbsp;&nbsp;
                    <h3 class="text-center">
                      <v-chip-group
                          v-model="selection"
                          active-class="deep-purple accent-4 white--text"
                      >
                        <v-chip>{{ vonDatum }}</v-chip>
                        <h3 class="mt-1">-</h3> &nbsp;
                        <v-chip>{{ bisDatum }}</v-chip>
                      </v-chip-group>
                    </h3>

                  </v-col>
                  <div class="my-2 text-subtitle-1">

                  </div>
                  <v-col cols="4" class="d-flex justify-center">
                    <h3 class="mt-3">Preis:</h3>
                    &nbsp;&nbsp;
                    <h3 class="text-center">
                      <v-chip-group
                          v-model="selection"
                          active-class="deep-purple accent-4 white--text"

                      >
                        <v-chip>{{ preis }} €</v-chip>



                      </v-chip-group>
                    </h3>
                  </v-col>
                  <v-col cols="4" class="d-flex justify-center">
                    <h3 class="mt-3">Uhrzeit:</h3>
                    &nbsp;&nbsp;
                    <h3 class="text-center">
                      <v-chip-group
                          v-model="selection"
                          active-class="deep-purple accent-4 white--text"

                      >
                        <v-chip>{{ vonUhrzeit}} Uhr</v-chip>
                        <h3 class="mt-1">-</h3> &nbsp;
                        <v-chip>{{ bisUhrzeit }} Uhr</v-chip>

                      </v-chip-group>
                    </h3>
                  </v-col>
                </v-row>

                <v-row  class="ma-0 justify-center" style="width: 100%;">


                  <v-col class="d-flex justify-end mt-n4" cols="6">
                    <h4>Straße:</h4>
                  </v-col>
                  <v-col class="mt-n4" cols="6">
                    <p>{{ straße }}</p>
                  </v-col>
                  <v-col class="d-flex justify-end  mt-n4" cols="6">
                    <h4>PLZ:</h4>
                  </v-col>
                  <v-col class=" mt-n4" cols="6">
                    <p>{{ plz }}</p>
                  </v-col>
                  <v-col class="d-flex justify-end  mt-n4" cols="6">
                    <h4>Ort:</h4>
                  </v-col>
                  <v-col class="mt-n4" cols="6">
                    <p>{{ ort }}</p>
                  </v-col>
                </v-row>

                <v-card-actions>
                  <v-dialog scrim="black" width="1200">
                    <template v-slot:activator="{ props }">
                      <div class="d-flex justify-center" style="width: 100%">
                        <v-btn style="background-color: #0082c2; color: #dedddd" v-bind="props">
                          Termin Vereinbaren
                        </v-btn>
                      </div>
                    </template>

                  </v-dialog>
                </v-card-actions>
              </v-card>
            </v-col>
            <v-col cols="8">
              <v-card
                  class="mx-auto my-12 pa-5"
                  height="500"
                  style="background-color: rgba(255,255,255,0.75)">
                <v-row class="justify-center mt-3">
                  <v-col class="mt-n4 d-flex justify-center" cols="8">
                    <v-text-field v-model="ueberschrift" label="Überschrift" variant="outlined"/>
                  </v-col>
                  <v-col class="mt-n4 d-flex justify-center" cols="4">
                    <v-text-field v-model="preis" label="Preis" variant="outlined"/>
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
                    <v-textarea v-model="text"   clearable counter label="Text"
                                no-resize variant="outlined"/>
                  </v-col>
                  <v-col class=" mt-n8 d-flex justify-center" cols="5">
                    <v-btn @click="create">
                      speichern
                    </v-btn>
                  </v-col>
                  <v-col class="mt-n8 d-flex justify-center" cols="5">
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
    }
  },
  methods: {
    async create() {
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
          Headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
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
          Headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
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
    }
  },
  components: {
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