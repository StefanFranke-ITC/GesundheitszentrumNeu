<template>
  <v-row   style="width: 100%" class="justify-center mx-0 mt-6 px-6">
    <v-col class="pl-0 "   cols="3">
      <div @click="$router.push('/')" class="mb-n4 logo">
      </div>
    </v-col>
    <v-col class="d-flex align-center" cols="2">
      <h4 @click="$router.push('/impressum')" class="link text-white text-center">
        Chiropraktik
      </h4>
    </v-col>
    <v-col class="d-flex align-center" cols="2">
      <h4 class="link text-white text-center">
        Osteopathie
      </h4>
    </v-col>
    <v-col class="d-flex align-center" cols="2">
      <h4 class="link text-white text-center">
        Physiotherapie
      </h4>
    </v-col>
    <v-col class="d-flex align-center" cols="2">
      <h4 class="link text-white text-center">
        Ernährungsberatung
      </h4>
    </v-col>
  </v-row>
  <v-row  style="width: 100%" class="justify-center mx-0 mt-n6 px-6">
    <v-col class="pl-0" cols="3">

    </v-col>
    <v-col class="d-flex align-center" cols="2">
      <h4 @click="$router.push('/impressum')" class="link text-white text-center">
        Berichte
      </h4>
    </v-col>
    <v-col class="d-flex align-center" cols="2">
      <h4 class="link text-white text-center">
        Produkte
      </h4>
    </v-col>
    <v-col class="d-flex align-center" cols="2">
      <h4 @click="$router.push('/Seminare')" class="link text-white text-center">
        Seminare
      </h4>
    </v-col>
    <v-col class="d-flex align-center" cols="2">
      <h4 @click="$router.push('/Preise')" class="link text-white text-center">
        Leistung & Preise

      </h4>
    </v-col>
  </v-row>
</template>


<script >

</script>


<style scoped>
.logo{
  background-image: url("../assets/logo.png");
  background-size: cover;
  width: 206px;
  height: 92px;
}
.link{
  cursor: pointer;
}
.link:hover{
  color: #0082c2 !important;
}
</style>