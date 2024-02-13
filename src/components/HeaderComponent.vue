<template>
  <v-row  class="justify-center mx-0 mt-6 px-6 bg" style="width: 100%">
    <v-col class="pl-0" md="3" lg="3" sm="12"  cols="12">
      <div v-if="!isPhysioRoute && !$store.state.tabletHorizontal" :class="$store.state.mobile? 'logoscale':'' " class="mb-n4 logo" style="cursor: pointer" @click="$router.push('/')"/>
      <div v-if="isPhysioRoute && !$store.state.tabletHorizontal" :class="$store.state.mobile? 'logoscale':'' " class="mb-n4  logo1" style="cursor: pointer" @click="$router.push('/')"/>
      <div v-if="!isPhysioRoute && $store.state.tabletHorizontal " :class="$store.state.mobile? 'logoscale':'' " class="mb-n4 logo-tablet" style="cursor: pointer" @click="$router.push('/')"/>
      <div  v-if="isPhysioRoute && $store.state.tabletHorizontal " :class="$store.state.mobile? 'logoscale':'' " class="mb-n4 logo1-tablet" style="cursor: pointer" @click="$router.push('/')"/>
    </v-col>

    <v-col v-if="!$store.state.mobile" class="d-flex align-center" cols="2">
      <h5 v-if="$store.state.tabletHorizontal" :class="{ 'active': isPhysioRoute }" class="link text-white text-center" @click="$router.push('/Chiropraktik')">
        Chiropraktik
      </h5>
      <h3  v-if="!$store.state.tabletHorizontal" :class="{ 'active': isPhysioRoute }" class="link text-white text-center" @click="$router.push('/Chiropraktik')">
        Chiropraktik
      </h3>
    </v-col>
    <v-col v-if="!$store.state.mobile" class="d-flex align-center" cols="2">
      <h5 v-if="$store.state.tabletHorizontal" :class="{ 'active': isPhysioRoute }" @click="$router.push('/Osteopathie')" class="link text-white text-center">
        Osteopathie
      </h5>
      <h3 v-if="!$store.state.tabletHorizontal" :class="{ 'active': isPhysioRoute }" @click="$router.push('/Osteopathie')" class="link text-white text-center">
        Osteopathie
      </h3>

    </v-col>
    <v-col v-if="!$store.state.mobile" class="d-flex align-center" cols="2">
      <h5 v-if="$store.state.tabletHorizontal" :class="{ 'active': isPhysioRoute }" @click="$router.push('/Physiotherapie')" class="link text-white text-center">
        Physiotherapie
      </h5>
      <h3 v-if="!$store.state.tabletHorizontal" :class="{ 'active': isPhysioRoute }" @click="$router.push('/Physiotherapie')" class="link text-white text-center">
        Physiotherapie
      </h3>
    </v-col>
    <v-col v-if="!$store.state.mobile" class="d-flex align-center" cols="2">
      <h5 v-if="$store.state.tabletHorizontal" :class="{ 'active': isPhysioRoute }" @click="$router.push('/Ernährung')" class="link text-white text-center">
        Ernährungsberatung
      </h5>
      <h3 v-if="!$store.state.tabletHorizontal" :class="{ 'active': isPhysioRoute }" @click="$router.push('/Ernährung')" class="link text-white text-center">
        Ernährungsberatung
      </h3>
    </v-col>
  </v-row>
  <v-row v-if="!$store.state.mobile" class="justify-center mx-0 mt-n6 px-6" style="width: 100%">
    <v-col class="pl-0" cols="3">

    </v-col>
    <v-col   class="d-flex align-center" cols="2">
      <h5 v-if="$store.state.tabletHorizontal" :class="{ 'active': isPhysioRoute }" @click="$router.push('/berichte')" class="link text-white text-center">
        Berichte
      </h5>
      <h3 v-if="!$store.state.tabletHorizontal" :class="{ 'active': isPhysioRoute }" @click="$router.push('/berichte')" class="link text-white text-center">
        Berichte
      </h3>
    </v-col>
    <v-col class="d-flex align-center" cols="2">
      <h5 v-if="$store.state.tabletHorizontal" :class="{ 'active': isPhysioRoute }" @click="$router.push('/Produkt')" class="link text-white text-center">
        Produkte
      </h5>
      <h3 v-if="!$store.state.tabletHorizontal" :class="{ 'active': isPhysioRoute }" @click="$router.push('/Produkt')" class="link text-white text-center">
        Produkte
      </h3>
    </v-col>
    <v-col class="d-flex align-center" cols="2">
      <h5 v-if="$store.state.tabletHorizontal" :class="{ 'active': isPhysioRoute }" @click="$router.push('/Seminare')" class="link text-white text-center">
        Seminare
      </h5>
      <h3 v-if="!$store.state.tabletHorizontal" :class="{ 'active': isPhysioRoute }" @click="$router.push('/Seminare')" class="link text-white text-center">
        Seminare
      </h3>
    </v-col>
    <v-col class="d-flex align-center" cols="2">
      <h5 v-if="$store.state.tabletHorizontal" :class="{ 'active': isPhysioRoute }" @click="$router.push('/Preise')" class="link text-white text-center">
        Leistung und Preise
      </h5>
      <h3 v-if="!$store.state.tabletHorizontal" :class="{ 'active': isPhysioRoute }" @click="$router.push('/Preise')" class="link text-white text-center">
        Leistung und Preise
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
.active{
  color: #406da6 !important;
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