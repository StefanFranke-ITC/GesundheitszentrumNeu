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
import axios from "axios";

export default {

  name: 'App',
  components: {
    UeberUnsComponent, cookieAcceptDecline

  },
  created(){
    this.checkMobileView()
    this.resize()
  },
  mounted() {
      this.getPreise()
    this.getProdukte()
    this.getSeminare()
    this.getBerichte()
    this.getVideo()
  },
  methods:{
    async getSeminare() {
      const response = await axios.get('/seminar')

      const seminarArray = response.data;
      Object.freeze(seminarArray);
      this.$store.state.seminarArray = seminarArray;
    },
    async getProdukte() {
      const response = await axios.get('/produkt')

      const produkteArray = response.data;
      Object.freeze(produkteArray);

      this.$store.state.produkteArray = produkteArray;
      this.$store.state.produkteArray.forEach(item => {
        item.bild = `data:image/jpeg;base64,${item.bild}`;
      });
    },

    async getPreise() {
      const response = await axios.get('/preis')

      const preiseArray = response.data;
      Object.freeze(preiseArray);

      this.$store.state.preiseArray = preiseArray;
      this.$store.state.preiseArray.forEach(item => {
        item.bild = `data:image/jpeg;base64,${item.bild}`;
      });
    },
    async getBerichte() {
      const response = await axios.get('/bericht')

      const berichteArray = response.data;
      Object.freeze(berichteArray);

      this.$store.state.berichteArray = berichteArray;
      this.$store.state.berichteArray.forEach(item => {
        item.bild = `data:image/jpeg;base64,${item.bild}`;
      });
    },
    async getVideo() {
      const response = await axios.get('/video')
      const videoArray = response.data;
      Object.freeze(videoArray);
      this.$store.state.videoArray = videoArray;
    },
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
