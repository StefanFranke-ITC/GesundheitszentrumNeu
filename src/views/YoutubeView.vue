
<template>
  <div class="background">
    <v-row  style="width: 100%" class="ma-0 pa-0">
      <v-col cols="8">
        <HeaderComponent></HeaderComponent>
      </v-col>
      <v-col cols="4" class="py-0">
        <div class="kolage"></div>
      </v-col>
    </v-row>
    <v-divider ></v-divider>
    <div style="overflow: scroll; height: 100%;padding-bottom: 130px">
      <v-row style="width: 100%" class="justify-center ma-0">
        <v-col class="d-flex justify-center">
          <h1>Meine Preise und Dienstleistungen</h1>
        </v-col>
      </v-row>
      <v-row style="width: 100%;" class="mx-0 mt-n6">
        <v-col v-for="video in videoArray" :key="video.id">
          <v-card light class=" mt-5" min-width="280" max-width="280" min-height="300">
          </v-card>

        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script >
import HeaderComponent from "@/components/HeaderComponent.vue";


export default {

  data: () => ({
    loading: false,
    selection: 1,
    vorname:'',
    nachname:'',
    email:'',
    handynummer:'',
    videoArray:[
      {id:1, url:'https://www.youtube.com/watch?v=iaJRCt-8fKQ',text:''},
    ]

  }),

  methods: {
    reserve () {
      this.loading = true

      setTimeout(() => (this.loading = false), 2000)
    },
  },
  components:{
    HeaderComponent,

  }
}
</script>

<style scoped>

.background{
  background-image: url("../assets/bg4.jpg");
  background-size: cover;
  height: 100vh;
  width: 100vw;
}

</style>