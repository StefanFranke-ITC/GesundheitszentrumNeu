<template>
  <div>
    <v-tabs
        v-model="tab"
        align-tabs="center"
        class="mt-3 text-white"
        color="black"
        style="height: 100%"
    >
      <v-tab :value="0" style="color: blue">Löschen</v-tab>
    </v-tabs>

    <v-window v-model="tab">

      <v-window-item value="0">
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

    async deleteMethod(kontaktaufnahme) {
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