<template>
  <div  v-if="!$store.state.mobile" class="background">
    <div style="background-color: rgba(0,0,0,0); height: 100%; width: 100%">
      <v-row class="ma-0 pa-0 pb-7 bg" style="width: 100%">
        <v-col cols="8">
          <HeaderComponent></HeaderComponent>
        </v-col>
        <v-col class="py-0" cols="4">
          <div class="collage"></div>
        </v-col>
      </v-row>
      <div style="overflow: scroll; height: 100%;padding-bottom: 200px">
        <v-row class="justify-center ma-0" style="width: 100%">
          <v-col class="d-flex justify-center">
            <h1 class="text-center line mt-3" style="text-shadow: 2px 2px 2px black; color: #ffffff"> Meine Videos </h1>
          </v-col>
        </v-row>
        <v-row class="justify-center mx-0 mt-6" style="width: 100%;">
          <v-col v-for="video in $store.state.videoArray" :key="video.id" class="d-flex justify-center" cols="4">
            <v-card
                class="ma-12"
                style="backdrop-filter: blur(4px); background-color: rgba(222,221,221,0.48); box-shadow: 2px 2px 5px black; height: auto; width: 390px">
              <v-card-title>{{ video.text }}</v-card-title>
              <div>
                <vue-plyr
                >
                  <div
                      :data-plyr-embed-id="video.url"
                      data-plyr-provider="youtube"
                  >
                  </div>
                </vue-plyr>
              </div>
            </v-card>

          </v-col>
        </v-row>
      </div>
    </div>

  </div>
  <HandyComponent></HandyComponent>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import {mapGetters} from "vuex";
import HandyComponent from "@/components/HandyComponent.vue";


export default {

  data: () => ({
    loading: false,
    selection: 1,
    vorname: '',
    nachname: '',
    email: '',
    handynummer: '',
  }),

  methods: {},
  computed: {
    ...mapGetters(['videoArray'])
  },
  mounted() {
    this.$store.state.tab = 9

  },
  components: {
    HandyComponent,
    HeaderComponent,

  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap');

.line {
  font-family: "Dancing Script", cursive;
  margin-top: 30px;
}

.background {
  position: fixed;
  background-image: url("../assets/black.webp");
  background-size: cover;
  height: 100vh;
  width: 100vw;
}


</style>