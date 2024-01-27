<template>
  <div class="background">
    <v-row class="ma-0 pa-0" style="width: 100%">
      <v-col cols="8">
        <HeaderComponent></HeaderComponent>
      </v-col>
      <v-col class="py-0" cols="4">
        <div class="kolage"></div>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <div style="overflow: scroll; height: 100%;padding-bottom: 130px">
      <v-row class="justify-center ma-0" style="width: 100%">
        <v-col class="d-flex justify-center">
          <h1>Meine Preise und Dienstleistungen</h1>
        </v-col>
      </v-row>
      <v-row class="mx-0 mt-n6" style="width: 100%;">
        <v-col v-for="preis in preiseArray" :key="preis.id">
          <v-card
              :loading="loading"
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
                :src="preis.bild"
                cover="true"
                style="width: 100%; max-height: 180px"
            ></v-img>

            <v-card-title>{{ preis.ueberschrift }}</v-card-title>

            <v-card-text>
              <div class="my-2 text-subtitle-1">
                {{ preis.preis }} €
              </div>

              <div>
                {{ preis.text }}

              </div>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>
            <v-row class="ma-0" style="width: 100%">
              <v-card-title>Dauer:</v-card-title>

              <v-card-text>
                <v-chip-group
                    v-model="selection"
                    active-class="deep-purple accent-4 white--text"

                >
                  <v-chip>{{ preis.dauer }}</v-chip>

                </v-chip-group>
              </v-card-text>

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
      </v-row>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import {mapGetters} from "vuex";
import axios from "axios";

export default {
  data: () => ({
    loading: false,
    selection: 1,
    vorname: '',
    nachname: '',
    email: '',
    handynummer: '',

  }),
  computed: {
    ...mapGetters(['preiseArray'])
  },
  methods: {
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
  mounted() {
    this.get()
  },
  components: {
    HeaderComponent
  }
}
</script>

<style scoped>

.background {
  background-image: url("../assets/bg4.jpg");
  background-size: cover;
  height: 100vh;
  width: 100vw;
}

</style>