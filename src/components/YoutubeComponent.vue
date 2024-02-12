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
                  class="ma-12"
                  style="backdrop-filter: blur(4px); background-color: rgba(222,221,221,0.48); box-shadow: 2px 2px 5px black; height: 340px; width: 390px">
                <v-card-title>{{ text }}</v-card-title>
                <div>
                  <vue-plyr v-if="url !== ''"
                  >
                    <div
                        :data-plyr-embed-id="url"
                        data-plyr-provider="youtube"
                    >
                    </div>
                  </vue-plyr>
                </div>
              </v-card>
            </v-col>

            <v-col cols="8">
              <v-card
                  class="mx-auto my-12 pa-5"
                  height="500"
                  style="background-color: rgba(255,255,255,0.75)">
                <v-row class="justify-center mt-3">
                  <v-col class="d-flex justify-center" cols="5">
                    <v-text-field v-model="text" label="Überschrift" variant="outlined"/>
                  </v-col>
                  <v-col class="d-flex justify-center" cols="10">
                    <v-text-field v-model="url" :rules="rules" label="Video-URL"
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
            <v-data-table-virtual :items="bereinigtesVideoArray" fixed-header height="550" items-per-page="7">
              <template v-slot:item="{ item }">
                <tr>
                  <td>{{ item.id }}</td>
                  <td>{{ item.text }}</td>
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
      url: '',
      text: '',
      rules: [v => v.length <= 214 || 'Maximale Zeichenanzahl 215 erreicht'],
    }
  },
  computed: {
    ...mapGetters(['videoArray']),
    bereinigtesVideoArray() {
      return this.$store.state.videoArray.map(item => {
        const newObj = Object.assign({...item, icon: 'fluent:delete-16-regular'}, item);
        delete newObj.url;
        return newObj;
      });
    }
  },
  methods: {
    async create() {
      try {
        await axios.post('/video', {
          url: this.url,
          text: this.text
        }, {
          headers: {
            'Authorization': `Bearer${localStorage.getItem('token')}`
          }
        })

        await this.get()
        this.text = ''
        this.url = ''

      } catch (e) {
        alert("Bitte füllen Sie alle Felder aus.")
      }
      await this.get()
    },
    async deleteMethod(video) {
      try {
        await axios.delete('/video/' + video.id, {
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
      const response = await axios.get('/video')

      const videoArray = response.data;
      Object.freeze(videoArray);
      this.$store.state.videoArray = videoArray;
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