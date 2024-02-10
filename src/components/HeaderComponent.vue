<template>
  <v-row  class="justify-center mx-0 mt-6 px-6 bg" style="width: 100%">
    <v-col class="pl-0 " md="3" lg="3" sm="12"  cols="12">
      <div v-if="!isPhysioRoute" :class="$store.state.mobile? 'logoscale':'' " class="mb-n4 logo" style="cursor: pointer" @click="$router.push('/')"/>
      <div v-if="isPhysioRoute" :class="$store.state.mobile? 'logoscale':'' " class="mb-n4 logo1" style="cursor: pointer" @click="$router.push('/')"/>
    </v-col>
    <v-col v-if="!$store.state.mobile" class="d-flex align-center" cols="2">
      <h3 :class="{ 'active': isPhysioRoute }" class="link text-white text-center" @click="$router.push('/Chiropraktik')">
        Chiropraktik
      </h3>
    </v-col>
    <v-col v-if="!$store.state.mobile" class="d-flex align-center" cols="2">
      <h3  :class="{ 'active': isPhysioRoute }" @click="$router.push('/Osteopathie')" class="link text-white text-center">
        Osteopathie
      </h3>
    </v-col>
    <v-col v-if="!$store.state.mobile" class="d-flex align-center" cols="2">
      <h3 :class="{ 'active': isPhysioRoute }"  @click="$router.push('/Physiotherapie')" class="link text-white text-center">
        Physiotherapie
      </h3>
    </v-col>
    <v-col v-if="!$store.state.mobile" class="d-flex align-center" cols="2">
      <h3 :class="{ 'active': isPhysioRoute }"  @click="$router.push('/Ernährung')" class="link text-white text-center">
        Ernährungsberatung
      </h3>
    </v-col>
  </v-row>
  <v-row v-if="!$store.state.mobile" class="justify-center mx-0 mt-n6 px-6" style="width: 100%">
    <v-col class="pl-0" cols="3">

    </v-col>
    <v-col   class="d-flex align-center" cols="2">
      <h3 :class="{ 'active': isPhysioRoute }" class="link text-white text-center" @click="$router.push('/Berichte')">
        Berichte
      </h3>
    </v-col>
    <v-col class="d-flex align-center" cols="2">
      <h3 :class="{ 'active': isPhysioRoute }" class="link text-white text-center" @click="$router.push('/Produkt')">
        Produkte
      </h3>
    </v-col>
    <v-col class="d-flex align-center" cols="2">
      <h3 :class="{ 'active': isPhysioRoute }" class="link text-white text-center" @click="$router.push('/Seminare')">
        Seminare
      </h3>
    </v-col>
    <v-col class="d-flex align-center" cols="2">
      <h3 :class="{ 'active': isPhysioRoute }" class="link text-white text-center" @click="$router.push('/Preise')">
        Leistung & Preise

      </h3>
    </v-col>
  </v-row>
</template>


<script>
export default {
  computed: {
    isPhysioRoute() {
      return this.$route.path === '/Physiotherapie' || this.$route.path === '/Osteopathie' || this.$route.path === '/Chiropraktik' || this.$route.path === '/Ernährung';
    }
  }
};</script>


<style scoped>
.logo {
  background-image: url("../assets/logo-weiß.png");
  background-size: cover;
  width: 248px;
  height: 93px;
}
.logo1 {
  background-image: url("../assets/Logo2.png");
  background-size: cover;
  width: 210px;
  height: 93px;
}

.link {
  cursor: pointer;
}
.active{
  color: #3d3d3d !important;
}
.link:hover {
  color: #0082c2 !important;
}
.logoscale{
  transform: scale(0.8);
  transform-origin: top left;
  margin-top: -10px;
}
</style>