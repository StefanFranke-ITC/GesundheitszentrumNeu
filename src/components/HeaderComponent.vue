<template>
  <v-row class="justify-center mx-0 mt-6 px-6 bg" style="width: 100%">
    <v-col class="pl-0" cols="12" lg="3" md="3" sm="12">
      <div v-if="!$store.state.tabletHorizontal" :class="$store.state.mobile? 'logoscale':'' "
           class="mb-n4 logo" style="cursor: pointer" @click="$router.push('/')"/>
      <div v-if=" $store.state.tabletHorizontal " :class="$store.state.mobile? 'logoscale':'' "
           class="mb-n4 logo-tablet" style="cursor: pointer" @click="$router.push('/')"/>
    </v-col>

    <v-col v-if="!$store.state.mobile" class="d-flex align-center" cols="2">
      <h5 v-if="$store.state.tabletHorizontal" :class="{ 'active': isPhysioRoute }" class="link text-white text-center"
          @click="$router.push('/Chiropraktik')">
        Chiropraktik
      </h5>
      <h3 v-if="!$store.state.tabletHorizontal" :class="{ 'active': isPhysioRoute }" class="link text-white text-center"
          @click="$router.push('/Chiropraktik')">
        Chiropraktik
      </h3>
    </v-col>
    <v-col v-if="!$store.state.mobile" class="d-flex align-center" cols="2">
      <h5 v-if="$store.state.tabletHorizontal" :class="{ 'active': isPhysioRoute }"
          class="link text-white text-center" @click="$router.push('/Osteopathie')">
        Osteopathie
      </h5>
      <h3 v-if="!$store.state.tabletHorizontal" :class="{ 'active': isPhysioRoute }"
          class="link text-white text-center" @click="$router.push('/Osteopathie')">
        Osteopathie
      </h3>

    </v-col>
    <v-col v-if="!$store.state.mobile" class="d-flex align-center" cols="2">
      <h5 v-if="$store.state.tabletHorizontal" :class="{ 'active': isPhysioRoute }"
          class="link text-white text-center" @click="$router.push('/Physiotherapie')">
        Physiotherapie
      </h5>
      <h3 v-if="!$store.state.tabletHorizontal" :class="{ 'active': isPhysioRoute }"
          class="link text-white text-center" @click="$router.push('/Physiotherapie')">
        Physiotherapie
      </h3>
    </v-col>
    <v-col v-if="!$store.state.mobile" class="d-flex align-center" cols="2">
      <h5 v-if="$store.state.tabletHorizontal" :class="{ 'active': isPhysioRoute }" class="link text-white text-center"
          @click="$router.push('/Ernährung')">
        Ernährungsberatung
      </h5>
      <h3 v-if="!$store.state.tabletHorizontal" :class="{ 'active': isPhysioRoute }" class="link text-white text-center"
          @click="$router.push('/Ernährung')">
        Ernährungsberatung
      </h3>
    </v-col>
  </v-row>
  <v-row v-if="!$store.state.mobile" class="justify-center mx-0 mt-n6 px-6" style="width: 100%">
    <v-col class="pl-0" cols="3">

    </v-col>
    <v-col class="d-flex align-center" cols="2">
      <h5 v-if="$store.state.tabletHorizontal" :class="{ 'active': isPhysioRoute }" class="link text-white text-center"
          @click="$router.push('/berichte')">
        Berichte
      </h5>
      <h3 v-if="!$store.state.tabletHorizontal" :class="{ 'active': isPhysioRoute }" class="link text-white text-center"
          @click="$router.push('/berichte')">
        Berichte
      </h3>
    </v-col>
    <v-col class="d-flex align-center" cols="2">
      <h5 v-if="$store.state.tabletHorizontal" :class="{ 'active': isPhysioRoute }" class="link text-white text-center"
          @click="$router.push('/Produkt')">
        Produkte
      </h5>
      <h3 v-if="!$store.state.tabletHorizontal" :class="{ 'active': isPhysioRoute }" class="link text-white text-center"
          @click="$router.push('/Produkt')">
        Produkte
      </h3>
    </v-col>
    <v-col class="d-flex align-center" cols="2">
      <h5 v-if="$store.state.tabletHorizontal" :class="{ 'active': isPhysioRoute }" class="link text-white text-center"
          @click="$router.push('/Seminare')">
        Seminare
      </h5>
      <h3 v-if="!$store.state.tabletHorizontal" :class="{ 'active': isPhysioRoute }" class="link text-white text-center"
          @click="$router.push('/Seminare')">
        Seminare
      </h3>
    </v-col>
    <v-col class="d-flex align-center" cols="2">
      <h5 v-if="$store.state.tabletHorizontal" :class="{ 'active': isPhysioRoute }" class="link text-white text-center"
          @click="$router.push('/Preise')">
        Leistung und Preise
      </h5>
      <h3 v-if="!$store.state.tabletHorizontal" :class="{ 'active': isPhysioRoute }" class="link text-white text-center"
          @click="$router.push('/Preise')">
        Leistung und Preise
      </h3>
    </v-col>
  </v-row>
</template>


<script>
export default {
  computed: {
    isPhysioRoute() {
      return this.$route.path === '/Physiotherapie' || this.$route.path === '/Osteopathie' || this.$route.path === '/Chiropraktik' || this.$route.path === '/Ernährung' || this.$route.path === '/berichte' || this.$route.path === '/Preise' || this.$route.path === '/Video' || this.$route.path === '/Produkt' || this.$route.path === '/Seminare';
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

.logo-tablet {
  background-image: url("../assets/logo-weiß.png");
  background-size: cover;
  margin-left: -70px;
  width: 248px;
  height: 93px;
}

.logo1 {
  background-image: url("../assets/Logo2.png");
  background-size: cover;
  width: 210px;
  height: 93px;
}

.logo1-tablet {
  background-image: url("../assets/Logo2.png");
  background-size: cover;
  margin-left: -50px;
  width: 210px;
  height: 93px;
}

.link {
  cursor: pointer;
}

.active {
  color: #0082c2 !important;
  text-shadow: 1px 1px 1px black;
}

.link:hover {
  color: white !important;
}

.logoscale {
  transform: scale(0.8);
  transform-origin: top left;
  margin-top: -10px;
}
</style>