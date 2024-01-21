<template>
  <div class="background">
    <div style="height: 100%; width: 100%; background-color: rgba(0,0,0,0.13)">
    <v-row  style="width: 100%" class="ma-0 pa-0">
      <v-col cols="8">
        <HeaderComponent></HeaderComponent>
        <v-row class="justify-center mx-0 mt-16 pt-10" style="width: 100%">
          <v-col cols="10">
            <h1 style="font-size: 45px" class="text-white">
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

                  <v-btn v-bind="props" style="background-color: #0082c2; color: #dedddd">
                    Termin Vereinbaren
                  </v-btn>
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
          </v-col>
        </v-row>

        <v-row style="width: 100%" class="justify-center mx-0 mt-10" >
        <v-col class="d-flex justify-center mx-4  " cols="10">
          <v-row style="width: 100%" class="info mt-16 mx-0">
            <v-col class="d-flex justify-center align-center" cols="4">
              <v-row class="d-flex justify-center">
                <div class="d-flex justify-center align-center" style="border: 1px solid rgba(255,255,255,0.57); position: absolute;height: 45px; width: 45px ;left: 15%; top:-20px; background-color: #0082c2; border-radius: 100%">
                  <Icon style="font-size: 38px" icon="solar:phone-broken" />
                </div>
                <v-col  class="d-flex justify-center" cols="12">
                <h2 style="color: #fdfcfc">
                  Ruf mich an
                 </h2>

                </v-col>
                <v-col class="d-flex justify-center"  cols="12">
                  <h3 style="color: #fdfcfc" class=" mt-n4">
                    017806915915
                  </h3>

                </v-col>
              </v-row>
            </v-col>
            <v-divider style="background-color: #fcf8f8; color: #fffdfd" vertical="true"></v-divider>

            <v-col class="d-flex justify-center align-center" cols="4">

              <v-row class="d-flex justify-center">
                <div class="d-flex justify-center align-center" style="border: 1px solid rgba(255,255,255,0.57); position: absolute;height: 45px; width: 45px ;left: 48%; top:-20px; background-color: #0082c2; border-radius: 100%">
                  <Icon style="font-size: 38px"  icon="ic:outline-mail" />
                </div>
                <v-col  class="d-flex justify-center" cols="12">
                  <h2 style="color: #fcf8f8">
                    Schreib mir eine Mail
                  </h2>

                </v-col>
                <v-col class="d-flex justify-center"  cols="12">
                  <h3 class="mt-n4" style="color: #fcfbfb">
                    andreabachem83@gmail.com
                  </h3>

                </v-col>
              </v-row>
            </v-col>
            <v-divider style="color: #faf7f7; background-color: #f8f8f8" vertical="true"></v-divider>

            <v-col class="d-flex justify-center align-center" cols="4">

              <v-row class="d-flex justify-center">
                <div class="d-flex justify-center align-center" style="border: 1px solid rgba(255,255,255,0.57); position: absolute;height: 45px; width: 45px ;left: 81%; top:-20px; background-color: #0082c2; border-radius: 100%">
                  <Icon style="font-size: 38px" icon="ic:outline-place"  />
                </div>
                <v-col  class="d-flex justify-center" cols="12">
                  <h2 style="color: #fafafa">
                    So findest du mich
                  </h2>

                </v-col>
                <v-col class="d-flex justify-center"  cols="12">
                  <h5 class="text-center mt-n4" style="color: #fcfafa">
                    Peter-May-straße 47  50374 Köttingen
                  </h5>

                </v-col>
              </v-row>
            </v-col>
          </v-row>

        </v-col>
      </v-row>

      </v-col>
      <v-col cols="4" class="py-0">
        <div class="kolage"></div>
      </v-col>
    </v-row>
    <div class="d-flex" style="position: absolute ; bottom: 10px">
      <p @click="$router.push('/impressum')" class="mx-2 text-white link">
        Impressum
      </p>
      <p class="text-white">
        |
      </p>
      <p @click="$router.push('/verwaltung')" class="mx-2 text-white link">
        Verwaltung
      </p>
      <p class="text-white">
        |
      </p>
      <p @click="$router.push('/datenschutz')" class="mx-2 text-white link">
        Datenschutz
      </p>
      <Icon @click="$router.push('/Video')" class="mx-3 mt-n4" style="cursor: pointer; font-size: 40px; color: red" icon="grommet-icons:youtube" />
      <Icon class="mx-3 mt-n4" style="cursor: pointer; font-size: 40px" icon="skill-icons:instagram" />
    </div>
    </div>
  </div>
</template>

<style scoped>
.background{
  background-image: url("../assets/black.jpg");
  background-size: cover;
  height: 100vh;
  width: 100vw;
}
.kolage{
  background-image: url("../assets/Kolage.png");
  background-size: cover;
  height: 100vh;
}

.info{
  background-color: rgba(0, 130, 194, 0.33);
  min-height: 120px;
  border-radius: 4px;
  backdrop-filter: blur(4px);
  border-left: rgba(255, 255, 255, 0.5) solid 1px;
  border-top: rgba(255, 255, 255, 0.5) solid 1px;

}
.kontaktformular{
  background-color: rgba(242, 243, 243, 0.82);
  backdrop-filter: blur(3px);
  border: solid 2px black ;
}

</style>

<script>
import { Icon } from '@iconify/vue';
import HeaderComponent from "@/components/HeaderComponent.vue";

export default{
  data(){
    return{
      vorname:'',
      nachname:'',
      email:'',
      handynummer:'',
      isHovered: false
    }
  },
  methods:{
    setHover(value) {
      this.isHovered = value;
    },
  },
  components:{
    Icon,HeaderComponent
  }
}
</script>