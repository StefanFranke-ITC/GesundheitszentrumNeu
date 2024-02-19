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
                    <v-text-field v-model="name" label="Name" type="name" variant="outlined"/>
                  </v-col>
                  <v-col class="d-flex justify-center" cols="6">
                    <v-text-field v-model="vorname" label="Vorname" type="firstname" variant="outlined"/>
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
                    <v-text-field v-model="plz" label="PLZ" type="number" variant="outlined"/>
                  </v-col>
                  <v-col class="d-flex justify-center" cols="3">
                    <v-text-field v-model="text" label="Leistung" variant="outlined"/>
                  </v-col>
                  <v-col class="d-flex justify-center" cols="3">
                    <v-text-field v-model="preis" label="Preis" variant="outlined" @input="updatePreis"/>
                  </v-col>
                  <v-col class="d-flex justify-center" cols="3">
                    <v-text-field v-model="menge" label="Menge" type="number" variant="outlined"/>
                  </v-col>
                  <v-col class="d-flex justify-center" cols="3">
                    <v-text-field v-model="calculatedPreis" disabled="true" label="Gesamtpreis" type="number"
                                  variant="outlined"/>
                  </v-col>
                  <v-row>
                    <v-col class="mt-3 d-flex justify-center" cols="12">
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
                    :items="bereinigtestLeistungsArray"
                    fixed-header>
                  <template v-slot:item="{ item }">
                    <tr>
                      <td>{{ item.text }}</td>
                      <td>{{ item.menge }}</td>
                      <td>{{ calculateTotal(item.menge, item.preis) }}</td>
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
        <v-row class="justify-center mt-3" style="width: 100%;">
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
                  <td>{{ item.datum }}</td>
                  <td>{{ item.leistungen.length }}</td>
                  <td>
                    <Icon :icon="item.löschen" color="red" style="font-size: 30px" @click="deleteMethod(item)"/>
                  </td>
                  <td>
                    <Icon :icon="item.pdf" color="black" style="font-size: 30px" @click="generatePDF(item)"/>
                  </td>

                  <div class="pdf-content pa-8" style="display: none">
                    <div class="pa-8" id="pdf-content">
                      <v-row justify="start">
                        <v-col cols="10">
                          {{ item.vorname }} {{ item.name }} - {{ item.straße }} {{ item.hausnummer }}, {{ item.plz }}
                          {{ item.ort }}
                        </v-col>
                      </v-row>
                      <v-row class="mt-10">
                        <v-col cols="6">
                          <p class="mt-n7">Andrea Bachem</p> <br>
                          <p class="mt-n7"> Colonialstraße 18</p> <br>
                          <p class="mt-n7">50169 Kerpen</p> <br>
                          <p class="mt-n7">Tel.: 0178/6915915 </p> <br>
                          <p class="mt-n7">Steuernummer: 203/5008/2253 </p> <br>
                        </v-col>
                        <v-col class="d-flex justify-end" cols="6">
                          <p>
                            Rechnungsdatum: {{ item.datum }}
                          </p>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col>
                          <h1 style="color:#0082c2 ">Rechnung</h1>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col>
                          <p>Im Folgenden die erworbenen Leistungen, die ich in Rechnung stelle:</p>
                        </v-col>
                      </v-row>
                      <v-row class="mx-0" style="width: 100%; background-color: #0082c2">
                        <v-col cols="1">
                          <p style="color: #f2f2f2; margin-bottom: 6px">POS</p>
                        </v-col>
                        <v-col class="d-flex justify-start" cols="5">
                          <p style="color: #f2f2f2; margin-bottom: 6px">LEISTUNG</p>
                        </v-col>
                        <v-col class="d-flex justify-end" cols="2">
                          <p style="color: #f2f2f2; margin-bottom: 6px">MENGE</p>
                        </v-col>
                        <v-col class="d-flex justify-end" cols="2">
                          <p style="color: #f2f2f2; margin-bottom: 6px">EINZELPREIS</p>
                        </v-col>
                        <v-col class="d-flex justify-end" cols="2">
                          <p style="color: #f2f2f2; margin-bottom: 6px">GESAMTPREIS</p>
                        </v-col>

                      </v-row>

                      <v-row v-for="(x, index) in item.leistungen" :key="x" class="mx-0"
                             style="width: 100%; background-color: rgba(210,204,204,0.75)">
                        <v-col cols="1">
                          <p class="text-black" style="color: #f2f2f2; margin-bottom: 6px">
                            {{ index + 1 }}
                          </p>
                        </v-col>
                        <v-col class="d-flex justify-start" cols="5">
                          <p class="text-black" style="color: #f2f2f2; margin-bottom: 6px">
                            {{ x.text }}
                          </p>
                        </v-col>
                        <v-col class="d-flex justify-end" cols="2">
                          <p class="text-black" style="color: #f2f2f2; margin-bottom: 6px">
                            {{ x.menge }}

                          </p>
                        </v-col>
                        <v-col class="d-flex justify-end" cols="2">
                          <p class="text-black" style="color: #f2f2f2; margin-bottom: 6px">
                            {{ x.preis }}

                          </p>
                        </v-col>
                        <v-col class="d-flex justify-end" cols="2">
                          <p class="text-black" style="color: #f2f2f2; margin-bottom: 6px">
                            {{ calculateTotal(x.menge, x.preis) }} €
                          </p>
                        </v-col>
                      </v-row>
                      <!--                      <v-row class="mx-0" style="width: 100%; background-color: rgba(210,204,204,0.75)">
                                              <v-col cols="1">
                                                <p style="color: #f2f2f2; margin-bottom: 6px">
                                                  &lt;!&ndash;todoo&ndash;&gt;1
                                                </p>
                                              </v-col>
                                              <v-col class="d-flex justify-start" cols="5">
                                                <p style="color: #f2f2f2; margin-bottom: 6px">
                                                  &lt;!&ndash;todoo&ndash;&gt;2

                                                </p>
                                              </v-col>
                                              <v-col class="d-flex justify-end" cols="2">
                                                <p style="color: #f2f2f2; margin-bottom: 6px">
                                                  &lt;!&ndash;todoo&ndash;&gt;3

                                                </p>
                                              </v-col>
                                              <v-col class="d-flex justify-end" cols="2">
                                                <p style="color: #f2f2f2; margin-bottom: 6px">
                                                  &lt;!&ndash;todoo&ndash;&gt;4

                                                </p>
                                              </v-col>
                                              <v-col class="d-flex justify-end" cols="2">
                                                <p style="color: #f2f2f2; margin-bottom: 6px">
                                                  &lt;!&ndash;todoo&ndash;&gt;5

                                                </p>
                                              </v-col>
                                            </v-row>
                                            <v-row class="mx-0" style="width: 100%; background-color: rgba(210,204,204,0.75)">
                                              <v-col cols="1">
                                                <p style="color: #f2f2f2; margin-bottom: 6px">
                                                  &lt;!&ndash;todoo&ndash;&gt;1
                                                </p>
                                              </v-col>
                                              <v-col class="d-flex justify-start" cols="5">
                                                <p style="color: #f2f2f2; margin-bottom: 6px">
                                                  &lt;!&ndash;todoo&ndash;&gt;2

                                                </p>
                                              </v-col>
                                              <v-col class="d-flex justify-end" cols="2">
                                                <p style="color: #f2f2f2; margin-bottom: 6px">
                                                  &lt;!&ndash;todoo&ndash;&gt;3

                                                </p>
                                              </v-col>
                                              <v-col class="d-flex justify-end" cols="2">
                                                <p style="color: #f2f2f2; margin-bottom: 6px">
                                                  &lt;!&ndash;todoo&ndash;&gt;4

                                                </p>
                                              </v-col>
                                              <v-col class="d-flex justify-end" cols="2">
                                                <p style="color: #f2f2f2; margin-bottom: 6px">
                                                  &lt;!&ndash;todoo&ndash;&gt;5

                                                </p>
                                              </v-col>
                                            </v-row>
                                            <v-row class="mx-0" style="width: 100%; background-color: rgba(210,204,204,0.75)">
                                              <v-col cols="1">
                                                <p style="color: #f2f2f2; margin-bottom: 6px">
                                                  &lt;!&ndash;todoo&ndash;&gt;1
                                                </p>
                                              </v-col>
                                              <v-col class="d-flex justify-start" cols="5">
                                                <p style="color: #f2f2f2; margin-bottom: 6px">
                                                  &lt;!&ndash;todoo&ndash;&gt;2

                                                </p>
                                              </v-col>
                                              <v-col class="d-flex justify-end" cols="2">
                                                <p style="color: #f2f2f2; margin-bottom: 6px">
                                                  &lt;!&ndash;todoo&ndash;&gt;3

                                                </p>
                                              </v-col>
                                              <v-col class="d-flex justify-end" cols="2">
                                                <p style="color: #f2f2f2; margin-bottom: 6px">
                                                  &lt;!&ndash;todoo&ndash;&gt;4

                                                </p>
                                              </v-col>
                                              <v-col class="d-flex justify-end" cols="2">
                                                <p style="color: #f2f2f2; margin-bottom: 6px">
                                                  &lt;!&ndash;todoo&ndash;&gt;5

                                                </p>
                                              </v-col>
                                            </v-row>
                                            <v-row class="mx-0" style="width: 100%; background-color: rgba(210,204,204,0.75)">
                                              <v-col cols="1">
                                                <p style="color: #f2f2f2; margin-bottom: 6px">
                                                  &lt;!&ndash;todoo&ndash;&gt;1
                                                </p>
                                              </v-col>
                                              <v-col class="d-flex justify-start" cols="5">
                                                <p style="color: #f2f2f2; margin-bottom: 6px">
                                                  &lt;!&ndash;todoo&ndash;&gt;2

                                                </p>
                                              </v-col>
                                              <v-col class="d-flex justify-end" cols="2">
                                                <p style="color: #f2f2f2; margin-bottom: 6px">
                                                  &lt;!&ndash;todoo&ndash;&gt;3

                                                </p>
                                              </v-col>
                                              <v-col class="d-flex justify-end" cols="2">
                                                <p style="color: #f2f2f2; margin-bottom: 6px">
                                                  &lt;!&ndash;todoo&ndash;&gt;4

                                                </p>
                                              </v-col>
                                              <v-col class="d-flex justify-end" cols="2">
                                                <p style="color: #f2f2f2; margin-bottom: 6px">
                                                  &lt;!&ndash;todoo&ndash;&gt;5

                                                </p>
                                              </v-col>
                                            </v-row>
                                            <v-row class="mx-0" style="width: 100%; background-color: rgba(210,204,204,0.75)">
                                              <v-col cols="1">
                                                <p style="color: #f2f2f2; margin-bottom: 6px">
                                                  &lt;!&ndash;todoo&ndash;&gt;1
                                                </p>
                                              </v-col>
                                              <v-col class="d-flex justify-start" cols="5">
                                                <p style="color: #f2f2f2; margin-bottom: 6px">
                                                  &lt;!&ndash;todoo&ndash;&gt;2

                                                </p>
                                              </v-col>
                                              <v-col class="d-flex justify-end" cols="2">
                                                <p style="color: #f2f2f2; margin-bottom: 6px">
                                                  &lt;!&ndash;todoo&ndash;&gt;3

                                                </p>
                                              </v-col>
                                              <v-col class="d-flex justify-end" cols="2">
                                                <p style="color: #f2f2f2; margin-bottom: 6px">
                                                  &lt;!&ndash;todoo&ndash;&gt;4

                                                </p>
                                              </v-col>
                                              <v-col class="d-flex justify-end" cols="2">
                                                <p style="color: #f2f2f2; margin-bottom: 6px">
                                                  &lt;!&ndash;todoo&ndash;&gt;5

                                                </p>
                                              </v-col>
                                            </v-row>
                                            <v-row class="mx-0" style="width: 100%; background-color: rgba(210,204,204,0.75)">
                                              <v-col cols="1">
                                                <p style="color: #f2f2f2; margin-bottom: 6px">
                                                  &lt;!&ndash;todoo&ndash;&gt;1
                                                </p>
                                              </v-col>
                                              <v-col class="d-flex justify-start" cols="5">
                                                <p style="color: #f2f2f2; margin-bottom: 6px">
                                                  &lt;!&ndash;todoo&ndash;&gt;2

                                                </p>
                                              </v-col>
                                              <v-col class="d-flex justify-end" cols="2">
                                                <p style="color: #f2f2f2; margin-bottom: 6px">
                                                  &lt;!&ndash;todoo&ndash;&gt;3

                                                </p>
                                              </v-col>
                                              <v-col class="d-flex justify-end" cols="2">
                                                <p style="color: #f2f2f2; margin-bottom: 6px">
                                                  &lt;!&ndash;todoo&ndash;&gt;4

                                                </p>
                                              </v-col>
                                              <v-col class="d-flex justify-end" cols="2">
                                                <p style="color: #f2f2f2; margin-bottom: 6px">
                                                  &lt;!&ndash;todoo&ndash;&gt;5

                                                </p>
                                              </v-col>
                                            </v-row>
                                            <v-row class="mx-0" style="width: 100%; background-color: rgba(210,204,204,0.75)">
                                              <v-col cols="1">
                                                <p style="color: #f2f2f2; margin-bottom: 6px">
                                                  &lt;!&ndash;todoo&ndash;&gt;1
                                                </p>
                                              </v-col>
                                              <v-col class="d-flex justify-start" cols="5">
                                                <p style="color: #f2f2f2; margin-bottom: 6px">
                                                  &lt;!&ndash;todoo&ndash;&gt;2

                                                </p>
                                              </v-col>
                                              <v-col class="d-flex justify-end" cols="2">
                                                <p style="color: #f2f2f2; margin-bottom: 6px">
                                                  &lt;!&ndash;todoo&ndash;&gt;3

                                                </p>
                                              </v-col>
                                              <v-col class="d-flex justify-end" cols="2">
                                                <p style="color: #f2f2f2; margin-bottom: 6px">
                                                  &lt;!&ndash;todoo&ndash;&gt;4

                                                </p>
                                              </v-col>
                                              <v-col class="d-flex justify-end" cols="2">
                                                <p style="color: #f2f2f2; margin-bottom: 6px">
                                                  &lt;!&ndash;todoo&ndash;&gt;5

                                                </p>
                                              </v-col>
                                            </v-row>-->

                      <v-row>
                        <v-col cols="6">
                        </v-col>
                        <v-col cols="6">
                          <v-row class="justify-lg-space-between">
                            <v-col cols="8">
                              <p>
                                <b>Summe Positionen</b>
                              </p>
                            </v-col>

                            <v-col cols="4">
                              <p style="font-size: 20px">
                                {{ item.preis }}
                              </p>
                            </v-col>
                            <v-col class="mt-2" cols="12">
                              <v-divider></v-divider>
                            </v-col>
                          </v-row>
                        </v-col>
                      </v-row>

                      <v-row class="mt-12 align-content-end">
                        <p class="ml-5">
                          Gemäß §19 UStG wird keine Umsatzsteuer berechnet. <br>
                          Bitte überweisen Sie den Rechnungsbetrag auf das untenstehende Konto.
                        </p>
                      </v-row>
                      <v-divider class="ma-5 "></v-divider>
                      <v-row class="ml-2">
                        <v-col cols="6" style="color: #0082c2">
                          <p>Andrea Bachem</p>
                          <p>Reifeisenbank Frechen-Hürth EG</p> <br>
                          <p class="mt-n7"> IBAN: DE98 3706 2365 2806 5420 19</p> <br>
                          <p class="mt-n7"> BIC: GENODED1FHH</p> <br>
                        </v-col>
                        <v-col class="d-flex justify-end" cols="6">
                          <img alt="Bildbeschreibung"
                               src="data:image/png;base64,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"
                               style="height: 100px; width: 200px">
                        </v-col>
                      </v-row>

                    </div>
                  </div>

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
import html2pdf from 'html2pdf.js';
import {Icon} from "@iconify/vue/dist/iconify";
import {mapGetters} from "vuex";

export default {
  data() {
    return {
      currentDate: null,
      tab: null,
      name: '',
      vorname: '',
      straße: '',
      hausnummer: '',
      plz: '',
      ort: '',
      text: '',
      preis: '',
      leistungen: [],
      menge: '',
      rules: [v => v.length <= 132 || 'Maximale Zeichenanzahl 133 erreicht'],
    }
  },
  computed: {
    formattedDate() {
      if (!this.currentDate) return '';

      const date = new Date(this.currentDate);
      const day = date.getDate();
      const month = date.getMonth() + 1; // Monate sind 0-basiert, daher +1
      const year = date.getFullYear();

      return `${day < 10 ? '0' + day : day}.${month < 10 ? '0' + month : month}.${year}`;
    },
    calculatedPreis() {
      const gesamtPreis = this.leistungen.reduce((accumulator, current) => {
        const preis = parseFloat(current.preis.replace('€', '').replace(',', '.'));
        const menge = current.menge || 1; // Standardmenge ist 1, falls keine Menge angegeben ist
        return accumulator + (preis * menge);
      }, 0);
      return gesamtPreis.toFixed(2);
    },
    ...mapGetters(['rechnungArray']),
    bereinigtesRechnungsArray() {
      return this.$store.state.rechnungArray.map(item => {
        const newObj = Object.assign({
          ...item,
          löschen: 'fluent:delete-16-regular',
          pdf: 'fluent:document-pdf-32-filled'
        }, item);
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
    generatePDF(item) {
      let element = document.getElementById('pdf-content');
      html2pdf(element, {
        margin: 0,
        filename: item.name + '_' + item.datum + '_Rechnung.pdf',
        image: {type: 'png', quality: 2},
        html2canvas: {scale: 3},
        jsPDF: {unit: 'in', format: 'letter', orientation: 'portrait'}
      });
    },
    calculateTotal(quantity, priceWithEuro) {
      const price = parseFloat(priceWithEuro.replace(',', '.').replace('€', '').trim());
      const total = quantity * price;
      return total.toFixed(2);
    },
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
        text: this.text,
        menge: this.menge,
        preis: this.preis,
      })

      this.preis = ''
      this.text = ''
      this.menge = ''
    },
    async create() {
      try {
        await axios.post('/rechnung', {
          rechnung: {
            name: this.name,
            vorname: this.vorname,
            straße: this.straße,
            hausnummer: this.hausnummer,
            plz: this.plz,
            ort: this.ort,
            preis: this.calculatedPreis + '€',
            datum: this.formattedDate
          },
          leistungen: this.leistungen
        }, {
          headers: {
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
        await axios.delete('/rechnung/' + produkt.id, {
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
    this.currentDate = Date.now();
    this.get()
  },
  created() {
  }
}
</script>

<style scoped>
.pdf-content {
  border: #2c2a2a 1px solid;
  width: 1240px;
  height: 1754px;
  margin: 20px 20px 20px 20px
}

.v-row {
  width: 100%;
  margin-left: 0px;
  margin-right: 0px;
}
</style>