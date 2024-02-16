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
      <v-tab :value="1" style="color: blue">Rechnungen/Löschen</v-tab>
    </v-tabs>

    <v-window v-model="tab">
      <v-window-item value="0">
        <v-container fluid>
          <v-row>
            <v-col cols="8">
              <v-card
                  class="mx-auto my-12 pa-5"
                  height="500"
                  style="background-color: rgba(255,255,255,0.75)">
                <v-row class="justify-center mt-3">
                  <v-col class="d-flex justify-center" cols="6">
                    <v-text-field type="name" v-model="name" label="Name" variant="outlined"/>
                  </v-col>
                  <v-col class="d-flex justify-center" cols="6">
                    <v-text-field type="firstname" v-model="vorname" label="Vorname" variant="outlined"/>
                  </v-col>
                  <v-col class="d-flex justify-center" cols="3">
                    <v-text-field v-model="straße" label="Straße" variant="outlined"/>
                  </v-col>
                  <v-col class="d-flex justify-center" cols="3">
                    <v-text-field v-model="hausnummer" label="Hausnummer" variant="outlined"/>
                  </v-col>
                  <v-col class="d-flex justify-center" cols="3">
                    <v-text-field v-model="ort" label="Ort" variant="outlined"/>
                  </v-col>
                  <v-col class="d-flex justify-center" cols="3">
                    <v-text-field type="number" v-model="plz" label="PLZ" variant="outlined"/>
                  </v-col>
                  <v-col class="d-flex justify-center" cols="3">
                    <v-text-field v-model="leistung" label="Leistung" variant="outlined"/>
                  </v-col>
                  <v-col class="d-flex justify-center" cols="3">
                    <v-text-field @input="updatePreis" v-model="preis" label="Preis" variant="outlined"/>
                  </v-col>
                  <v-col class="d-flex justify-center" cols="3">
                    <v-text-field type="number" v-model="menge" label="Menge" variant="outlined"/>
                  </v-col>
                  <v-row>
                  <v-col cols="12" class="mt-3 d-flex justify-center">
                    <v-btn @click="leistungSpeichern">
                      Leistung Speichern
                    </v-btn>
                  </v-col>
                  </v-row>
                  <v-col class="d-flex justify-center" cols="6">
                    <v-btn :disabled="leistungen.length === 0 ? true: false" @click="create">
                      Rechnung Speichern
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
            <v-col cols="4">
              <v-card class="mt-12">
                <v-data-table-virtual
                    fixed-header
                      :items="bereinigtestLeistungsArray">
                  <template v-slot:item="{ item }">
                    <tr>
                      <td>{{ item.leistung }}</td>
                      <td>{{ item.menge }}</td>
                      <td>{{ item.preis }}</td>
                      <td>
                        <Icon :icon="item.löschen" color="red" style="font-size: 30px" @click="deleteLeistung(item)"/>
                      </td>
                    </tr>
                  </template>
                </v-data-table-virtual>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-window-item>

      <v-window-item value="1">
        <v-row class="justify-center mt-3" style="width: 100%">
          <v-col cols="10">
            <v-data-table-virtual :items="bereinigtesRechnungsArray" fixed-header height="550" items-per-page="7">
              <template v-slot:item="{ item }">
                <tr>
                  <td>{{ item.id }}</td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.vorname }}</td>
                  <td>{{ item.straße }}</td>
                  <td>{{ item.hausnummer }}</td>
                  <td>{{ item.plz }}</td>
                  <td>{{ item.ort }}</td>
                  <td>{{ item.preis }}</td>
                  <td>{{ item.leistung.leistung }}</td>
                  <td>{{ item.leistung.preis }}</td>
                  <td>{{ item.leistung.menge }}</td>
                  <td>
                    <Icon :icon="item.löschen" color="red" style="font-size: 30px" @click="deleteMethod(item)"/>
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
      name: '',
      vorname: '',
      straße: '',
      hausnummer: '',
      plz: '',
      ort: '',
      leistung: '',
      preis: '',
      leistungen: [
              ],
      menge: '',
      rules: [v => v.length <= 132 || 'Maximale Zeichenanzahl 133 erreicht'],
    }
  },
  computed: {
    virtualBoats () {
      return [...Array(10000).keys()].map(i => {
        const boat = { ...this.boats[i % this.boats.length] }
        boat.name = `${boat.name} #${i}`
        return boat
      })
    },
    ...mapGetters(['rechnungArray']),
    bereinigtesRechnungsArray() {
      return this.$store.state.rechnungArray.map(item => {
        const newObj = Object.assign({...item, löschen: 'fluent:delete-16-regular'}, item);
        delete newObj.bild;
        delete newObj.text;
        return newObj;
      });
    },
    bereinigtestLeistungsArray() {
      return this.leistungen.map(item => {
        const newObj = Object.assign({...item, löschen: 'fluent:delete-16-regular'}, item);
        return newObj;
      });
    }
  },
  methods: {
    deleteLeistung(item) {
      for (let i = 0; i < this.leistungen.length; i++) {
        if (this.leistungen[i].leistung === item.leistung &&
            this.leistungen[i].preis === item.preis &&
            this.leistungen[i].menge === item.menge) {
          this.leistungen.splice(i, 1);
        }
      }
    },
    updatePreis() {
      this.preis = this.preis.replace(/€/g, '');
      if (!this.preis.endsWith('€')) {
        this.preis += '€';
      }
    },
    leistungSpeichern() {
      this.leistungen.push({
        leistung: this.leistung,
        menge: this.menge,
        preis: this.preis,
      })

      this.preis = ''
      this.leistung = ''
      this.menge = ''
    },
    async create() {
      try {
        await axios.post('/rechnung', {
          name: this.name,
          vorname: this.vorname,
          straße: this.straße,
          hausnummer: this.hausnummer,
          plz: this.plz,
          ort: this.ort,
          leistungen: this.leistungen
        }, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer${localStorage.getItem('token')}`
          }
        })

        await this.get()

        this.name = '';
        this.vorname = '';
        this.straße = '';
        this.hausnummer = '';
        this.plz = '';
        this.ort = '';
        this.leistungen = [];

      } catch (e) {
        alert("Bitte füllen Sie alle Felder aus.")
      }
      await this.get()
    },
    async deleteMethod(produkt) {
      try {
        await axios.delete('/produkt/' + produkt.id, {
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
      const response = await axios.get('/rechnung')

      const rechnungArray = response.data;
      Object.freeze(rechnungArray);
      this.$store.state.rechnungArray = rechnungArray;
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