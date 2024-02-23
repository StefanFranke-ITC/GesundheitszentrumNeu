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
                <v-img
                    :src="imageURL"
                    cover="true"
                    style="width: 340px; height: 340px"
                ></v-img>
                <v-card-title>{{ ueberschrift }}</v-card-title>
                <v-card-text>
                  <div>
                    {{ text }}
                  </div>
                </v-card-text>
                <div class="py-2 px-4"
                     style="background-color: rgba(0,130,194,0.71);width: 100%; height: 40px;position: absolute; bottom: 0px ">
                  <div class="d-flex justify-lg-space-between">
                    <h4 class="text-white"><a :href="link" style="text-decoration: none" target="_blank">Zum Produkt</a>
                    </h4>
                    <Icon class="mt-n1 text-white" icon="eva:arrow-right-fill" style="font-size: 35px"/>
                  </div>
                </div>
              </v-card>
            </v-col>

            <v-col cols="8">
              <v-card
                  class="mx-auto my-12 pa-5"
                  height="500"
                  style="background-color: rgba(255,255,255,0.75)">
                <v-row class="justify-center mt-3">
                  <v-col class="d-flex justify-center" cols="10">
                    <v-text-field v-model="ueberschrift" label="Überschrift" variant="outlined"/>
                  </v-col>
                  <v-col class="d-flex justify-center" cols="5">
                    <v-text-field v-model="link" label="Link" variant="outlined"/>
                  </v-col>
                  <v-col class="d-flex justify-center" cols="5">
                    <v-file-input
                        v-model="bild"
                        :multiple="false"
                        accept="image/*"
                        label="Wählen Sie ein Bild aus"
                        prepend-icon="mdi-camera"
                        variant="outlined"
                        @change="handleFileChange"
                    ></v-file-input>

                  </v-col>
                  <v-col class="d-flex justify-center" cols="10">
                    <v-textarea v-model="text" :maxlength="133" :rules="rules" clearable counter label="Beschreibung"
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
            <v-data-table-virtual :items="bereinigtesProdukteArray" fixed-header="true" height="550" items-per-page="7">
              <template v-slot:item="{ item }">
                <tr>
                  <td>{{ item.id }}</td>
                  <td>{{ item.ueberschrift }}</td>
                  <td><a :href="item.link" target="_blank">{{ item.link }}</a></td>
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
      imageURL: '',
      bild: '',
      text: '',
      ueberschrift: '',
      link: '',
      rules: [v => v.length <= 132 || 'Maximale Zeichenanzahl 133 erreicht'],
    }
  },
  computed: {
    ...mapGetters(['produkteArray']),
    bereinigtesProdukteArray() {
      return this.$store.state.produkteArray.map(item => {
        const newObj = Object.assign({...item, löschen: 'fluent:delete-16-regular'}, item);
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


        if (file.type.startsWith("image/")) {
          this.imageURL = URL.createObjectURL(file);
        } else {
          this.bild = null
          alert("Bitte wählen Sie eine Bilddatei aus.");
          this.imageURL = '';
        }
      }
    },

    async create() {
      try {
        let formData = new FormData();
        formData.append('files', this.bild[0]);
        formData.append('text', this.text);
        formData.append('ueberschrift', this.ueberschrift);
        formData.append('link', this.link);

        await axios.post('/produkt', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer${localStorage.getItem('token')}`
          }
        })

        await this.get()

        this.bild = null;
        this.imageURL = ''
        this.text = ''
        this.link = ''
        this.ueberschrift = ''

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
      const response = await axios.get('/produkt')

      const produkteArray = response.data;
      Object.freeze(produkteArray);

      this.$store.state.produkteArray = produkteArray;
      this.$store.state.produkteArray.forEach(item => {
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