<template>
  <v-app id="home">
    <v-main>
      <router-view/>
      <UeberUnsComponent v-if="$route.path !== '/verwaltung'"></UeberUnsComponent>
      <cookie-accept-decline></cookie-accept-decline>
    </v-main>
  </v-app>
</template>

<script>

import UeberUnsComponent from "@/components/UeberUnsComponent.vue";
import cookieAcceptDecline from "@/views/Cookie-accept-decline.vue";

export default {

  name: 'App',
  components: {
    UeberUnsComponent, cookieAcceptDecline

  },
  created(){
    this.checkMobileView()
    this.resize()
  },
  methods:{
    resize() {
      window.addEventListener('resize', this.checkMobileView);
    },

    checkMobileView() {
      if (window.innerWidth >= 1800) {
        this.$store.state.wide = true;
      } else {
        this.$store.state.wide = false;

      }
      if (window.innerWidth <= 1000) {
        this.$store.state.mobile = true;
      } else {
        this.$store.state.mobile = false;

      }
      if (window.innerWidth <= 1000 && window.innerWidth >= 750) {
        this.$store.state.tablet = true;
      } else {
        this.$store.state.tablet = false;

      }
      if (window.innerWidth <= 1350  && window.innerWidth >= 1000) {
        this.$store.state.tabletHorizontal = true
      } else {
        this.$store.state.tabletHorizontal = false
      }
    }
  },
  data: () => ({
    text: "hallo",
  }),
}
</script>
<style>
::-webkit-scrollbar {
  width: 0;
  background: transparent;
}

</style>
