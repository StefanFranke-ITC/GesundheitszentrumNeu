<template>
  <div class="background">
    <v-row class="bg ma-0 pb-7 pa-0" style="width: 100%">
      <v-col cols="8">
        <HeaderComponent></HeaderComponent>
      </v-col>
      <v-col class="py-0" cols="4">
        <div class="collage"></div>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <div style="overflow: scroll; height: 100%;padding-bottom: 130px">
      <v-row class="justify-center ma-0" style="width: 100%">
        <v-col class="d-flex justify-center">
          <h1 class="line" style="color: #4b4a4a">Meine Seminarangebote</h1>
        </v-col>
      </v-row>
      <v-row class="mx-0 mt-n6" style="width: 100%;">
        <v-col v-for="seminar in seminarArray" :key="seminar.id">
          <v-card
              :loading="loading"
              class="mx-auto my-12 "
              height="520"
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
              <v-card-title class="text-white">{{ seminar.ueberschrift }}</v-card-title>

            </div>

            <v-card-text>
              <div class="my-2 text-subtitle-1">
                {{ seminar.preis }} €
              </div>

              <div>
                {{ seminar.text }}

              </div>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>
            <v-row class="ma-0 px-2" style="width: 100%">
              <h3 class="mt-6">Datum:</h3>

              <v-card-text>
                <v-chip-group
                    v-model="selection"
                    active-class="deep-purple accent-4 white--text"

                >
                  <v-chip>{{ seminar.vonDatum }}</v-chip>
                  <h3 class="mt-2">-</h3> &nbsp;
                  <v-chip>{{ seminar.bisDatum }}</v-chip>

                </v-chip-group>
              </v-card-text>

            </v-row>
            <v-row class="ma-0 mt-n5 px-2" style="width: 100%">
              <h3 class="mt-6">Uhrzeit:</h3>

              <v-card-text>
                <v-chip-group
                    v-model="selection"
                    active-class="deep-purple accent-4 white--text"

                >
                  <v-chip>{{ seminar.vonZeit }} Uhr</v-chip>
                  <h3 class="mt-2">-</h3> &nbsp;
                  <v-chip>{{ seminar.bisZeit }} Uhr</v-chip>

                </v-chip-group>
              </v-card-text>

            </v-row>
            <v-row class="ma-0" style="width: 100%;">
              <v-col class="mt-n4" cols="3">
                <h4>Straße:</h4>
              </v-col>
              <v-col class="mt-n4" cols="7">
                <p>{{ seminar.straße }}</p>
              </v-col>
              <v-col class="mt-n4" cols="3">
                <h4>PLZ:</h4>
              </v-col>
              <v-col class="mt-n4" cols="7">
                <p>{{ seminar.plz }}</p>
              </v-col>
              <v-col class="mt-n4" cols="3">
                <h4>Ort:</h4>
              </v-col>
              <v-col class="mt-n4" cols="7">
                <p>{{ seminar.ort }}</p>
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
      </v-row>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import axios from "axios";
import {mapGetters} from "vuex";

export default {
  data: () => ({
    loading: false,
    selection: 1,
    vorname: '',
    nachname: '',
    email: '',
    handynummer: '',
  }),
  components: {
    HeaderComponent
  },
  methods: {
    async get() {
      const response = await axios.get('/seminar')

      const seminarArray = response.data;
      Object.freeze(seminarArray);
      this.$store.state.seminarArray = seminarArray;
    }
  },
  computed: {
    ...mapGetters(['seminarArray'])
  },

  mounted() {
    this.get()
  },
}
</script>

<style scoped>

.background {
  background-image: url("../assets/paper.jpg");
  background-size: cover;
  height: 100vh;
  width: 100vw;
  position: fixed;
  padding-bottom: 150px;
}

.bg {
  background-image: url("../assets/wiese.png");
  box-shadow: 0px 3px 5px black;
}

@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap');
.line {
  font-family: "Dancing Script", cursive;
  margin-top: 30px;
}
</style>>