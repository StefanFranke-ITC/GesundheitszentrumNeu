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
    <div style="overflow: scroll; height: 100%;padding-bottom: 130px">
      <v-row class="justify-center ma-0" style="width: 100%">
        <v-col class="d-flex justify-center">
          <h1 class="text-center line mt-3" style="text-shadow: 2px 2px 2px black; color: #ffffff"> Meine Preise und Dienstleistungen </h1>
        </v-col>
      </v-row>
      <v-row class="mx-0 mt-n6" style="width: 100%;">
        <v-col v-for="preis in preiseArray" :key="preis.id">
          <v-card
              :loading="loading"
              class="mx-auto my-12 "
              height="540"
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
                {{ preis.preis }}
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
              <v-dialog scrim="black" width="1200">
                <template v-slot:activator="{ props }">
                  <div class="d-flex justify-center" style="width: 100%">
                    <v-btn style="background-color: #0082c2; color: #dedddd" v-bind="props">
                      Termin Vereinbaren
                    </v-btn>
                  </div>
                </template>
                <template v-slot:default="{ isActive }">
                  <v-card
                      class="mx-auto my-12 pa-5 dialogBackground"
                      style="background-color: rgb(205,205,205); box-shadow: 0 4px 8px 0 rgb(0,0,0), 0 6px 20px 0 rgb(0,0,0)"
                      width="1200">
                    <v-row>
                      <v-col>
                        <v-row class="justify-center">
                          <v-col class="d-flex justify-center" cols="10">
                            <h1 class="line"> Termin Vereinbaren</h1>
                          </v-col>
                          <v-col class="d-flex justify-center mt-n3" cols="10">
                            <v-text-field v-model="name" label="Name" variant="outlined"/>
                          </v-col>
                          <v-col class="d-flex justify-center mt-n3" cols="10">
                            <v-text-field v-model="email" label="Email" variant="outlined"/>
                          </v-col>
                          <v-col class="d-flex justify-center mt-n3" cols="10">
                            <v-text-field v-model="telefonnummer" label="Telefonnummer" variant="outlined"/>
                          </v-col>
                          <v-col class="d-flex justify-center mt-n3" cols="10">
                            <v-textarea v-model="text" clearable
                                        counter label="Nachricht" no-resize variant="outlined"/>
                          </v-col>
                        </v-row>
                      </v-col>
                      <v-col class="align-center d-flex">
                        <v-row class="mt-10 justify-center">
                          <v-col class="justify-center d-flex" cols="10">
                            <div class="logo"/>
                          </v-col>
                          <v-col class="pa-10 pt-15" cols="12">
                            <h3 class="pt-10">Ihre Anliegen sind uns wichtig!</h3>
                            <br>
                            <p>Zögern Sie nicht, unser
                              Kontaktformular
                              zu
                              nutzen,
                              um
                              mit
                              unserem Tiergesundheitszentrum in Verbindung zu treten und die bestmögliche Betreuung für
                              Ihr Haustier zu erhalten.
                            </p>
                          </v-col>
                        </v-row>
                      </v-col>
                      <v-col cols="12">
                        <v-row class="mt-10">
                          <v-col class="d-flex justify-center" cols="6">
                            <v-btn variant="text" @click="create">
                              Senden
                            </v-btn>
                          </v-col>
                          <v-col class="d-flex justify-center" cols="6">
                            <v-btn variant="text" @click="isActive.value = false">
                              Abbrechen
                            </v-btn>
                          </v-col>
                        </v-row>
                      </v-col>
                    </v-row>
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
    name: '',
    email: '',
    telefonnummer: '',
    text: '',

  }),
  computed: {
    ...mapGetters(['preiseArray'])
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

        this.email = null
        this.telefonnummer = null
        this.name = null
        this.text = null

      } catch (e) {
        alert("Bitte füllen Sie alle Felder aus.")
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
  background-image: url("../assets/bg_Seminare.jpeg");
  background-size: cover;
  height: 100vh;
  width: 100vw;
  position: fixed;
  padding-bottom: 150px;
}

.dialogBackground {
  background-image: url("../assets/bg_black2_11zon.webp");
  background-size: cover;
}

@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap');
.line {
  font-family: "Dancing Script", cursive;
  margin-top: 30px;
}
</style>