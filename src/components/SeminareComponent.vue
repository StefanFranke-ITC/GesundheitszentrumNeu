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
                  height="500"
                  style="background-color: rgba(255,255,255,0.45); backdrop-filter: blur(4px);box-shadow: 1px 1px 5px black "
                  width="340"
              >
                <template>
                  <v-progress-linear
                      color="deep-purple"
                      height="10"
                      indeterminate
                  ></v-progress-linear>
                </template>

                <div style="background-color: rgba(0,130,194,0.74)">
                  <v-card-title class="text-white">{{ ueberschrift }}</v-card-title>

                </div>

                <v-card-text>
                  <div class="my-2 text-subtitle-1">
                    {{ preis }} €
                  </div>

                  <div>
                    {{ text }}

                  </div>
                </v-card-text>

                <v-divider class="mx-4"></v-divider>
                <v-row class="ma-0 px-2" style="width: 100%">
                  <h3 class="mt-6">Datum:</h3>

                  <v-card-text>
                    <v-chip-group
                        active-class="deep-purple accent-4 white--text"

                    >
                      <v-chip>{{ vonDatum }}</v-chip>
                      <h3 class="mt-2">-</h3> &nbsp;
                      <v-chip>{{ bisDatum }}</v-chip>

                    </v-chip-group>
                  </v-card-text>

                </v-row>
                <v-row class="ma-0 mt-n5 px-2" style="width: 100%">
                  <h3 class="mt-6">Uhrzeit:</h3>

                  <v-card-text>
                    <v-chip-group
                        active-class="deep-purple accent-4 white--text"

                    >
                      <v-chip>{{ vonUhrzeit }} Uhr</v-chip>
                      <h3 class="mt-2">-</h3> &nbsp;
                      <v-chip>{{ bisUhrzeit }} Uhr</v-chip>

                    </v-chip-group>
                  </v-card-text>

                </v-row>
                <v-row class="ma-0" style="width: 100%;">
                  <v-col class="mt-n4" cols="3">
                    <h4>Straße:</h4>
                  </v-col>
                  <v-col class="mt-n4" cols="7">
                    <p>{{ straße }}</p>
                  </v-col>
                  <v-col class="mt-n4" cols="3">
                    <h4>PLZ:</h4>
                  </v-col>
                  <v-col class="mt-n4" cols="7">
                    <p>{{ plz }}</p>
                  </v-col>
                  <v-col class="mt-n4" cols="3">
                    <h4>Ort:</h4>
                  </v-col>
                  <v-col class="mt-n4" cols="7">
                    <p>{{ ort }}</p>
                  </v-col>


                </v-row>

                <v-card-actions>
                  <v-dialog width="350">
                    <template v-slot:activator="{ props }">
                      <div class="d-flex justify-center" style="width: 100%">
                        <v-btn style="background-color: #0082c2; color: #dedddd" v-bind="props">
                          Termin Vereinbaren
                        </v-btn>
                      </div>

                    </template>
                    <template v-slot:default="{ isActive }">
                      <v-card class="pt-4 kontaktformular">
                        <v-row class="d-flex justify-center mx-0" style="width: 100%">
                          <v-col cols="10">
                            <h3>Bitte füllen Sie das Formular aus, und ich werde mich umgehend bei Ihnen melden.</h3>
                          </v-col>
                          <v-col cols="10">
                            <v-text-field v-model="vorname" label="Vorname" type="name" variant="outlined">

                            </v-text-field>
                          </v-col>
                          <v-col class="formularinhalte" cols="10">
                            <v-text-field v-model="nachname" label="Nachname" type="name" variant="outlined">

                            </v-text-field>
                          </v-col>
                          <v-col class="formularinhalte" cols="10">
                            <v-text-field v-model="email" label="Email" type="email" variant="outlined">

                            </v-text-field>
                          </v-col>
                          <v-col class="formularinhalte" cols="10">
                            <v-text-field v-model="handynummer" label="Handynummer" type="tel" variant="outlined">

                            </v-text-field>
                          </v-col>
                        </v-row>
                        <v-card-actions class="px-14 mb-6 d-flex justify-space-between">
                          <v-btn
                              text="Senden"
                              @click="sendAppointmentEmail"
                          ></v-btn>
                          <v-btn
                              text="Abbrechen "
                              @click="isActive.value = false"
                          ></v-btn>

                        </v-card-actions>
                      </v-card>
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
                    <v-textarea v-model="text" :maxlength="186" :rules="rules" clearable counter label="Text"
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
      rules: [v => v.length <= 185 || 'Maximale Zeichenanzahl 186 erreicht'],
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
    async delete(seminar) {
      try {
        await axios.delete('/seminar/' + seminar.id)
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