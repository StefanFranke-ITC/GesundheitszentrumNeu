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
            <h3 class="text-white text-center">
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
</style>

<script setup>
</script>