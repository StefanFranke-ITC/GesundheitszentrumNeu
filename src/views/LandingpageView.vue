<template>
  <div class="background">
    <div style="height: 100%; width: 100%; background-color: rgba(0,0,0,0.13)">
      <v-row class="ma-0 pa-0" style="width: 100%">
        <v-col cols="8">
          <HeaderComponent></HeaderComponent>
          <v-row class="justify-center mx-0 mt-16 pt-10" style="width: 100%">
            <v-col cols="10">
              <h1 class="text-white" style="font-size: 45px">
                Tier Gesundheitszentrum Andrea Bachem
              </h1>
            </v-col>
            <v-col cols="10">
              <h1 style="color: #0082c2">
                Ganzheitliche Therapie für die Gesundheit deines Tieres
              </h1>
            </v-col>
            <v-col cols="10">
              <h3 style="color: #dedddd">
                Bei uns steht die umfassende Gesundheit deines Tieres im Mittelpunkt.
                Wir bieten hochwertige Therapien, darunter Chiropraktik, Osteopathie,
                Physiotherapie und individuelle Ernährungsberatung. Vertraue uns, um das
                Wohlbefinden deines Lieblings zu fördern und ihm die beste Pflege zukommen zu lassen.
              </h3>
            </v-col>
            <v-col cols="10">
              <v-dialog width="350">
                <template v-slot:activator="{ props }">

                  <v-btn style="background-color: #0082c2; color: #dedddd" v-bind="props">
                    Termin Vereinbaren
                  </v-btn>
                </template>
                <template v-slot:default="{ isActive }">
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
                </template>
              </v-dialog>
            </v-col>
          </v-row>

          <v-row class="justify-center mx-0 mt-10" style="width: 100%">
            <v-col class="d-flex justify-center mx-4  " cols="10">
              <a href="tel:+4917806915915">
                <v-row class="info mt-16 mx-0" style="width: 100%">
                  <v-col class="d-flex justify-center align-center" cols="4">
                    <v-row class="d-flex justify-center">
                      <div class="d-flex justify-center align-center"
                           style="border: 1px solid rgba(255,255,255,0.57); position: absolute;height: 45px; width: 45px ;left: 15%; top:-20px; background-color: #0082c2; border-radius: 100%">
                        <Icon icon="solar:phone-broken" style="font-size: 38px"/>
                      </div>
                      <v-col class="d-flex justify-center" cols="12">
                        <h2 style="color: #fdfcfc">
                          Ruf mich an
                        </h2>

                      </v-col>
                      <v-col class="d-flex justify-center" cols="12">
                        <h3 class=" mt-n4" style="color: #fdfcfc">
                          017806915915
                        </h3>
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-divider style="background-color: #fcf8f8; color: #fffdfd" vertical="true"></v-divider>

                  <v-col class="d-flex justify-center align-center" cols="4">
                    <a href="mailto:andreabachem83@gmail.com"
                       target="_blank">
                      <v-row class="d-flex justify-center">
                        <div class="d-flex justify-center align-center"
                             style="border: 1px solid rgba(255,255,255,0.57); position: absolute;height: 45px; width: 45px ;left: 48%; top:-20px; background-color: #0082c2; border-radius: 100%">
                          <Icon icon="ic:outline-mail" style="font-size: 38px"/>
                        </div>
                        <v-col class="d-flex justify-center" cols="12">
                          <h2 style="color: #fcf8f8">
                            Schreib mir eine Mail
                          </h2>

                        </v-col>
                        <v-col class="d-flex justify-center" cols="12">
                          <h3 class="mt-n4" style="color: #fcfbfb">
                            andreabachem83@gmail.com
                          </h3>

                        </v-col>
                      </v-row>
                    </a>
                  </v-col>
                  <v-divider style="color: #faf7f7; background-color: #f8f8f8" vertical="true"></v-divider>

                  <v-col class="d-flex justify-center align-center" cols="4">
                    <a href="https://www.google.de/maps/dir//Coloniastr.+16,+50169+Kerpen/@51.3701189,7.4956669,14z/data=!4m2!4m1!3e0?entry=ttu"
                       target="_blank">

                      <v-row class="d-flex justify-center">
                        <div class="d-flex justify-center align-center"
                             style="border: 1px solid rgba(255,255,255,0.57); position: absolute;height: 45px; width: 45px ;left: 81%; top:-20px; background-color: #0082c2; border-radius: 100%">
                          <Icon icon="ic:outline-place" style="font-size: 38px"/>
                        </div>
                        <v-col class="d-flex justify-center" cols="12">
                          <h2 style="color: #fafafa">
                            So findest du mich
                          </h2>
                        </v-col>
                        <v-col class="d-flex justify-center" cols="12">
                          <h5 class="text-center mt-n4" style="color: #fcfafa">
                            Peter-May-straße 47 50374 Köttingen
                          </h5>
                        </v-col>
                      </v-row>
                    </a>
                  </v-col>
                </v-row>
              </a>
            </v-col>
          </v-row>

        </v-col>
        <v-col class="py-0" cols="4">
          <div class="kolage"></div>
        </v-col>
      </v-row>
      <div class="d-flex" style="position: absolute ; bottom: 10px">
        <p class="mx-2 text-white link" style="cursor:pointer;" @click="$router.push('/impressum')">
          Impressum
        </p>
        <p class="text-white">
          |
        </p>
        <p class="mx-2 text-white link" style="cursor:pointer;" @click="$router.push('/verwaltung')">
          Verwaltung
        </p>
        <p class="text-white">
          |
        </p>
        <p class="mx-2 text-white link" style="cursor:pointer;" @click="$router.push('/datenschutz')">
          Datenschutz
        </p>
        <Icon class="mx-3 mt-n4" icon="grommet-icons:youtube" style="cursor: pointer; font-size: 40px; color: red"
              @click="$router.push('/Video')"/>
        <Icon class="mx-3 mt-n4" icon="skill-icons:instagram" style="cursor: pointer; font-size: 40px"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.background {
  background-image: url("../assets/black.jpg");
  background-size: cover;
  height: 100vh;
  width: 100vw;
}

.kolage {
  background-image: url("../assets/Kolage.png");
  background-size: cover;
  height: 100vh;
}

.info {
  background-color: rgba(0, 130, 194, 0.33);
  min-height: 120px;
  border-radius: 4px;
  backdrop-filter: blur(4px);
  border-left: rgba(255, 255, 255, 0.5) solid 1px;
  border-top: rgba(255, 255, 255, 0.5) solid 1px;

}

.kontaktformular {
  background-color: rgba(242, 243, 243, 0.82);
  backdrop-filter: blur(3px);
  border: solid 2px black;
}

a {
  text-decoration: none;
  cursor: pointer;
}
</style>

<script>
import {Icon} from '@iconify/vue';
import HeaderComponent from "@/components/HeaderComponent.vue";
import axios from "axios";

export default {
  data() {
    return {
      name: '',
      email: '',
      telefonnummer: '',
      text: '',
      isHovered: false
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

        this.email = null
        this.telefonnummer = null
        this.name = null
        this.text = null

      } catch (e) {
        alert("Bitte füllen Sie alle Felder aus.")
      }
    },
  },
  components: {
    Icon, HeaderComponent
  }
}
</script>