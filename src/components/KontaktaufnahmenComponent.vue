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
            <v-col cols="8">
              <v-card
                  class="mx-auto my-12 pa-5"
                  height="500"
                  style="background-color: rgba(255,255,255,0.75)">
                <v-row class="justify-center mt-3">
                  <v-col class="d-flex justify-center" cols="5">
                    <v-text-field v-model="name" label="Name" variant="outlined"/>
                  </v-col>
                  <v-col class="d-flex justify-center" cols="5">
                    <v-text-field v-model="email" label="Email" variant="outlined"/>
                  </v-col>
                  <v-col class="d-flex justify-center" cols="7">
                    <v-text-field v-model="telefonnummer" label="Telefonnummer" variant="outlined"/>
                  </v-col>
                  <v-col class="d-flex justify-center" cols="10">
                    <v-textarea v-model="text" label="Text"
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
            <v-data-table-virtual :items="bereinigtesKontaktaufnahmenArray" fixed-header height="550"
                                  items-per-page="7">
              <template v-slot:item="{ item }">
                <tr>
                  <td>{{ item.id }}</td>
                  <td>
                    <a :href="'mailto:' + item.email" target="_blank">
                      {{ item.email }}
                    </a>
                  </td>
                  <td>{{ item.telefonnummer }}</td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.text }}</td>
                  <td>
                    <Icon :icon="item.icon" color="red" style="font-size: 30px" @click="this.delete(item)"/>
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
      email: '',
      telefonnummer: '',
      name: '',
      text: '',
    }
  },
  computed: {
    ...mapGetters(['kontaktaufnahmenArray']),
    bereinigtesKontaktaufnahmenArray() {
      return this.$store.state.kontaktaufnahmenArray.map(item => {
        const newObj = Object.assign({...item, icon: 'fluent:delete-16-regular'}, item);
        return newObj;
      });
    }
  },
  methods: {
    async create() {
      try {
        await axios.post('/kontaktaufnahme', {
          email: this.email,
          telefonnummer: this.telefonnummer,
          name: this.name,
          text: this.text,
        })

        await this.get()

        this.email = null
        this.telefonnummer = null
        this.name = null
        this.text = null

      } catch (e) {
        alert("Bitte füllen Sie alle Felder aus.")
      }
      await this.get()
    },
    async delete(kontaktaufnahme) {
      try {
        await axios.delete('/kontaktaufnahme/' + kontaktaufnahme.id)
        await this.get()
      } catch (e) {
        alert("Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut. Falls das Problem weiterhin besteht, kontaktieren Sie Bitte den Administrator.")
      }

    },
    async get() {
      const response = await axios.get('/kontaktaufnahme')

      const kontaktaufnahmeArray = response.data;
      Object.freeze(kontaktaufnahmeArray);
      this.$store.state.kontaktaufnahmenArray = kontaktaufnahmeArray;
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