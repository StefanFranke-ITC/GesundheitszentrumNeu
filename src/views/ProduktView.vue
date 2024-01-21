
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
          <h1>Meine Empfehlungen</h1>
        </v-col>
      </v-row>
      <v-row style="width: 100%;" class="mx-0 mt-n6">
        <v-col v-for="preis in preisArray" :key="preis.id">
          <v-card
              :loading="loading"
              class="mx-auto my-12 "
              style="background-color: rgba(255,255,255,0.45); backdrop-filter: blur(4px);box-shadow: 1px 1px 5px black "
              width="340"
              height="500"
          >
            <template>
              <v-progress-linear
                  color="deep-purple"
                  height="10"
                  indeterminate
              ></v-progress-linear>
            </template>
            <v-img
                style="width: 340px; height: 340px"
                cover="true"
                :src="preis.bild"
            ></v-img>
            <v-card-title>{{preis.ueberschrift}}</v-card-title>
            <v-card-text>
              <div>
                {{preis.text}}
              </div>
            </v-card-text>
            <div class="py-2 px-4" style="background-color: rgba(0,130,194,0.57);width: 100%; height: 40px;position: absolute; bottom: 0px ">
              <div class="d-flex justify-lg-space-between">
                <h4>Zum Produkt</h4><Icon class="mt-n1" style="font-size: 35px" icon="eva:arrow-right-fill" />

              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import { Icon } from '@iconify/vue';
import HeaderComponent from "@/components/HeaderComponent.vue";

export default {
  data: () => ({
    loading: false,
    selection: 1,
    vorname:'',
    nachname:'',
    email:'',
    handynummer:'',
    preisArray:[
      {id:1, text:'sasadlaskdlajfa asjncas ceuunce scauen ckeenacwqbefasd asjbfkabfka',ueberschrift:'Hundeknochen',bild: require('/src/assets/knochen.jpg' ),link:'300 Euro'},
      {id:1, text:'sasadlaskdlajfa asjncas ceuunce scauen ckeenacwqbefasd asjbfkabfka',ueberschrift:'Hundeknochen',bild: require('/src/assets/knochen.jpg' ),link:'300 Euro'},
      {id:1, text:'sasadlaskdlajfa asjncas ceuunce scauen ckeenacwqbefasd asjbfkabfka',ueberschrift:'Hundeknochen',bild: require('/src/assets/knochen.jpg' ),link:'300 Euro'},
      {id:1, text:'sasadlaskdlajfa asjncas ceuunce scauen ckeenacwqbefasd asjbfkabfka',ueberschrift:'Hundeknochen',bild: require('/src/assets/knochen.jpg' ),link:'300 Euro'},
      {id:1, text:'sasadlaskdlajfa asjncas ceuunce scauen ckeenacwqbefasd asjbfkabfka',ueberschrift:'Hundeknochen',bild: require('/src/assets/knochen.jpg' ),link:'300 Euro'},

    ]

  }),

  methods: {
    reserve () {
      this.loading = true

      setTimeout(() => (this.loading = false), 2000)
    },
  },
  components:{
    HeaderComponent,Icon,
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