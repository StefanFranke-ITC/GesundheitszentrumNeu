<template>
  <div class="background">
    <v-row  style="width: 100%" class="ma-0 pa-0">
      <v-col cols="8">
        <v-row style="width: 100%" class="justify-center mx-0 mt-6 px-6">
          <v-col class="pl-0" cols="4">
            <div class="logo">

            </div>
          </v-col>
          <v-col class="d-flex align-center" cols="2">
            <h3 @click="$router.push('/impressum')" class="text-white text-center">
              text 1
            </h3>
          </v-col>
          <v-col class="d-flex align-center" cols="2">
            <h3 class="text-white text-center">
              text 2
            </h3>
          </v-col>
          <v-col class="d-flex align-center" cols="2">
            <h3 class="text-white text-center">
              text 3
            </h3>
          </v-col>
        </v-row>

        <v-row class="justify-center mx-0 mt-16 pt-10" style="width: 100%">
          <v-col cols="10">
            <h1 style="font-size: 45px" class="text-white">
              Chiropraktik und Osteopathie
            </h1>
          </v-col>
          <v-col cols="10">
            <h1 style="color: #0082c2">
              Leben ist Bewegung
            </h1>
          </v-col>
          <v-col cols="10">
            <h3 style="color: #dedddd">
              So lautet das Motto der Osteopathie. Wenn Hunde über die Wiesen toben und Pferde im Bewußtsein ihrer Kraft stolz paradieren, zeigt sich das immer wieder. Aber manchmal brauchen sie Unterstützung, um diese Bewegung zu erhalten oder sie wieder möglich werden zu lassen.            </h3>
          </v-col>
          <v-col cols="10">
            <v-btn class="mt-10"  style="color: white; background-color: #0082c2 ">Termin vereinbaren</v-btn>
          </v-col>
        </v-row>

        <v-row style="width: 100%" class="justify-center mx-0 " >
        <v-col class="d-flex justify-center mx-4  " cols="10">
          <v-row style="width: 100%" class="info mt-8 mx-0">
            <v-col class="d-flex justify-center align-center" cols="4">
              <v-row class="d-flex justify-center">
                <div class="d-flex justify-center align-center" style="border: 1px solid rgba(255,255,255,0.57); position: absolute;height: 45px; width: 45px ;left: 15%; top:-20px; background-color: #0082c2; border-radius: 100%">
                  <Icon style="font-size: 38px" icon="solar:phone-broken" />
                </div>
                <v-col  class="d-flex justify-center" cols="12">
                  <h2 style="color: #bebdbd">
                  Ruf mich an
                 </h2>

                </v-col>
                <v-col class="d-flex justify-center"  cols="12">
                  <h3 style="color: #bebdbd" class=" mt-n4">
                    017806915915
                  </h3>

                </v-col>
              </v-row>
            </v-col>
            <v-divider style="background-color: #bebdbd; color: #bebdbd" vertical="true"></v-divider>

            <v-col class="d-flex justify-center align-center" cols="4">

              <v-row class="d-flex justify-center">
                <div class="d-flex justify-center align-center" style="border: 1px solid rgba(255,255,255,0.57); position: absolute;height: 45px; width: 45px ;left: 48%; top:-20px; background-color: #0082c2; border-radius: 100%">
                  <Icon style="font-size: 38px"  icon="ic:outline-mail" />
                </div>
                <v-col  class="d-flex justify-center" cols="12">
                  <h2 style="color: #bebdbd">
                    Schreib mir eine Mail
                  </h2>

                </v-col>
                <v-col class="d-flex justify-center"  cols="12">
                  <h3 class="mt-n4" style="color: #bebdbd">
                    andreabachem83@gmail.com
                  </h3>

                </v-col>
              </v-row>
            </v-col>
            <v-divider style="color: #bebdbd; background-color: #bebdbd" vertical="true"></v-divider>

            <v-col class="d-flex justify-center align-center" cols="4">

              <v-row class="d-flex justify-center">
                <div class="d-flex justify-center align-center" style="border: 1px solid rgba(255,255,255,0.57); position: absolute;height: 45px; width: 45px ;left: 81%; top:-20px; background-color: #0082c2; border-radius: 100%">
                  <Icon style="font-size: 38px" icon="ic:outline-place"  />
                </div>
                <v-col  class="d-flex justify-center" cols="12">
                  <h2 style="color: #bebdbd">
                    So findest du mich
                  </h2>

                </v-col>
                <v-col class="d-flex justify-center"  cols="12">
                  <h5 class="text-center mt-n4" style="color: #bebdbd">
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
.logo{
  background-image: url("../assets/logo.png");
  background-size: cover;
  width: 206px;
  height: 92px;
}
.info{
  background-color: rgba(0, 130, 194, 0.33);
  min-height: 120px;
  border-radius: 4px;
  backdrop-filter: blur(4px);
  border-left: rgba(255, 255, 255, 0.5) solid 1px;
  border-top: rgba(255, 255, 255, 0.5) solid 1px;

}
</style>

<script>
import { Icon } from '@iconify/vue';

export default{
  data(){
    return{

    }
  },
  components:{
    Icon
  }
}
</script>