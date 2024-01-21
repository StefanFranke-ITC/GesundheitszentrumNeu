
<template>
  <div class="background">
    <div style="background-color: rgba(0,0,0,0); height: 100%; width: 100%">
      <v-row  style="width: 100%" class="ma-0 pa-0">
        <v-col cols="8">
          <HeaderComponent></HeaderComponent>
        </v-col>
        <v-col cols="4" class="py-0">
          <div class="kolage"></div>
        </v-col>
      </v-row>
      <v-divider ></v-divider>
      <div style="overflow: scroll; height: 100%;padding-bottom: 200px">
        <v-row style="width: 100%" class="justify-center ma-0">
          <v-col class="d-flex justify-center">
            <h1>Willkommen auf meinem Youtubekanal</h1>
          </v-col>
        </v-row>
        <v-row style="width: 100%;" class="justify-center mx-0 mt-6">
          <v-col class="d-flex justify-center"  cols="4" v-for="video in videoArray" :key="video.id">
            <v-card style="backdrop-filter: blur(4px); background-color: rgba(222,221,221,0.48); box-shadow: 2px 2px 5px black; height: 290px; width: 350px" class="pb-12">
              <v-card-title>{{video.text}}</v-card-title>
              <vue-plyr >

                <div
                    data-plyr-provider="youtube"
                    :data-plyr-embed-id="video.url">
                </div>

              </vue-plyr>
            </v-card>

          </v-col>
        </v-row>
      </div>
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
      {id:1, url:'mNI-7r1OX3E',text:'Überschrift'},
      {id:1, url:'mNI-7r1OX3E',text:'Überschrift'},
      {id:1, url:'mNI-7r1OX3E',text:'Überschrift'},
      {id:1, url:'mNI-7r1OX3E',text:'Überschrift'},
      {id:1, url:'mNI-7r1OX3E',text:'Überschrift'},
      {id:1, url:'mNI-7r1OX3E',text:'Überschrift'},
      {id:1, url:'mNI-7r1OX3E',text:'Überschrift'},
      {id:1, url:'mNI-7r1OX3E',text:'Überschrift'},
      {id:1, url:'mNI-7r1OX3E',text:'Überschrift'},
      {id:1, url:'mNI-7r1OX3E',text:'Überschrift'},
      {id:1, url:'mNI-7r1OX3E',text:'Überschrift'},
      {id:1, url:'HXWY1AxBKcU',text:'Überschrift'},
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
  background-image: url("../assets/bgYT.jpg");
  background-size: cover;
  height: 100vh;
  width: 100vw;
}

</style>