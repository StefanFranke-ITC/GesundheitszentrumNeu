<template>
  <v-row class="justify-center mx-0 mt-6 px-6 bg" style="width: 100%">
    <v-col class="pl-0 " cols="3">
      <div class="mb-n4 logo" style="cursor: pointer" @click="$router.push('/')"/>
    </v-col>
    <v-col class="d-flex align-center" cols="2">
      <h3 class="link text-white text-center" @click="$router.push('/impressum')">
        Chiropraktik
      </h3>
    </v-col>
    <v-col class="d-flex align-center" cols="2">
      <h3 class="link text-white text-center">
        Osteopathie
      </h3>
    </v-col>
    <v-col class="d-flex align-center" cols="2">
      <h3 class="link text-white text-center">
        Physiotherapie
      </h3>
    </v-col>
    <v-col class="d-flex align-center" cols="2">
      <h3 class="link text-white text-center">
        Ernährungsberatung
      </h3>
    </v-col>
  </v-row>
  <v-row class="justify-center mx-0 mt-n6 px-6" style="width: 100%">
    <v-col class="pl-0" cols="3">

    </v-col>
    <v-col class="d-flex align-center" cols="2">
      <h3 class="link text-white text-center" @click="$router.push('/Berichte')">
        Berichte
      </h3>
    </v-col>
    <v-col class="d-flex align-center" cols="2">
      <h3 class="link text-white text-center" @click="$router.push('/Produkt')">
        Produkte
      </h3>
    </v-col>
    <v-col class="d-flex align-center" cols="2">
      <h3 class="link text-white text-center" @click="$router.push('/Seminare')">
        Seminare
      </h3>
    </v-col>
    <v-col class="d-flex align-center" cols="2">
      <h3 class="link text-white text-center" @click="$router.push('/Preise')">
        Leistung & Preise

      </h3>
    </v-col>
  </v-row>
</template>


<script>

</script>


<style scoped>
.logo {
  background-image: url("../assets/logo.png");
  background-size: cover;
  width: 208px;
  height: 93px;
}

.link {
  cursor: pointer;
}

.link:hover {
  color: #0082c2 !important;
}

</style>