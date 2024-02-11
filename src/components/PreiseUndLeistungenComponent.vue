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
            <v-col cols="4">
              <v-card
                  class="mx-auto my-12 "
                  height="500"
                  style="background-color: rgb(255,255,255); backdrop-filter: blur(4px);box-shadow: 1px 1px 5px black "
                  width="340"
              >
                <template>
                  <v-progress-linear
                      color="deep-purple"
                      height="10"
                      indeterminate
                  ></v-progress-linear>
                </template>

                <v-img
                    :src="imageURL"
                    cover="true"
                    style="width: 100%; max-height: 180px"
                ></v-img>
                <v-card-title>{{ ueberschrift }}</v-card-title>

                <v-card-text>
                  <div class="my-2 text-subtitle-1">
                    {{ preis }} €
                  </div>

                  <div>
                    {{ text }}

                  </div>
                </v-card-text>

                <v-divider class="mx-4"></v-divider>
                <v-row class="ma-0" style="width: 100%">
                  <v-card-title>Dauer:</v-card-title>

                  <v-card-text>
                    <v-chip-group
                        active-class="deep-purple accent-4 white--text">

                      <v-chip>{{ dauer }}</v-chip>

                    </v-chip-group>
                  </v-card-text>

                </v-row>

                <v-card-actions>
                  <div class="d-flex justify-center" style="width: 100%">
                    <v-btn style="background-color: #0082c2; color: #dedddd" v-bind="props">
                      Termin Vereinbaren
                    </v-btn>
                  </div>

                </v-card-actions>
              </v-card>
            </v-col>

            <v-col cols="8">
              <v-card
                  class="mx-auto my-12 pa-5"
                  height="500"
                  style="background-color: rgba(255,255,255,0.75)">
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
                    <v-text-field v-model="preis" label="Preis" variant="outlined"/>
                  </v-col>
                  <v-col class="d-flex justify-center" cols="5">
                    <v-text-field v-model="dauer" label="Dauer" variant="outlined"/>
                  </v-col>
                  <v-col class="d-flex justify-center" cols="10">
                    <v-textarea v-model="text" :maxlength="215" :rules="rules" clearable counter label="Beschreibung"
                                no-resize variant="outlined"/>
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
            <v-data-table-virtual :items="bereinigtesPreisArray" fixed-header="true" height="550" items-per-page="7">
              <template v-slot:item="{ item }">
                <tr>
                  <td>{{ item.id }}</td>
                  <td>{{ item.ueberschrift }}</td>
                  <td>{{ item.preis }}</td>
                  <td>{{ item.dauer }}</td>
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
import axios from "axios";

import {Icon} from "@iconify/vue/dist/iconify";
import {mapGetters} from "vuex";

export default {
  data() {
    return {
      tab: null,
      ueberschrift: '',
      preis: '',
      bild: '',
      imageURL: '',
      dauer: '',
      text: '',
      rules: [v => v.length <= 214 || 'Maximale Zeichenanzahl 215 erreicht'],
    }
  },
  computed: {
    ...mapGetters(['preiseArray']),
    bereinigtesPreisArray() {
      return this.$store.state.preiseArray.map(item => {
        const newObj = Object.assign({...item, icon: 'fluent:deleteMethod-16-regular'}, item);
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
      try {
        let formData = new FormData();
        formData.append('files', this.bild[0]);
        formData.append('text', this.text);
        formData.append('ueberschrift', this.ueberschrift);
        formData.append('preis', this.preis);
        formData.append('dauer', this.dauer);

        await axios.post('/preis', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })

        await this.get()

        this.bild = null;
        this.imageURL = ''
        this.text = ''
        this.preis = ''
        this.dauer = ''
        this.ueberschrift = ''

      } catch (e) {
        alert("Bitte füllen Sie alle Felder aus.")
      }
      await this.get()
    },
    async deleteMethod(preis) {
      try {
        await axios.delete('/preis/' + preis.id)
        await this.get()
      } catch (e) {
        alert("Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut. Falls das Problem weiterhin besteht, kontaktieren Sie Bitte den Administrator.")
      }

    },
    async get() {
      const response = await axios.get('/preis')

      const preiseArray = response.data;
      Object.freeze(preiseArray);

      this.$store.state.preiseArray = preiseArray;
      this.$store.state.preiseArray.forEach(item => {
        item.bild = `data:image/jpeg;base64,${item.bild}`;
      });
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