<template>
  <div class="background">
    <v-row class="bg ma-0 pb-7 pa-0" style="width: 100%">
      <v-col cols="8">
        <HeaderComponent></HeaderComponent>
      </v-col>
      <v-col class="py-0" cols="4">
        <div class="kolage"></div>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <div style="overflow: scroll; height: 100%;padding-bottom: 130px">
      <v-row class="justify-center ma-0" style="width: 100%">
        <v-col class="d-flex justify-center">
          <h1 class="line" style="color: #4b4a4a">Meine Empfehlungen</h1>
        </v-col>
      </v-row>
      <v-row class="mx-0 mt-n6" style="width: 100%;">
        <v-col v-for="preis in produkteArray" :key="preis.id">
          <v-card
              :loading="loading"
              class="mx-auto my-12 "
              height="500"
              style="background-color: rgba(255,255,255,0.45); backdrop-filter: blur(4px);box-shadow: 1px 1px 5px black "
              width="340"
          >
            <template>
              <v-progress-linear
                  color="deep-purple"
                  height="10"
                  indeterminate
              ></v-progress-linear>
            </template>
            <v-img
                :src="preis.bild"
                cover="true"
                style="width: 340px; height: 340px"
            ></v-img>
            <v-card-title>{{ preis.ueberschrift }}</v-card-title>
            <v-card-text>
              <div>
                {{ preis.text }}
              </div>
            </v-card-text>
            <div class="py-2 px-4"
                 style="background-color: rgba(0,130,194,0.71);width: 100%; height: 40px;position: absolute; bottom: 0px ">
              <a :href="preis.link" style="text-decoration: none" target="_blank">
                <div class="d-flex justify-lg-space-between">
                  <h4 class="text-white">Zum Produkt</h4>
                  <Icon class="mt-n1 text-white" icon="eva:arrow-right-fill" style="font-size: 35px"/>
                </div>
              </a>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import {Icon} from '@iconify/vue';
import HeaderComponent from "@/components/HeaderComponent.vue";
import {mapGetters} from "vuex";
import axios from "axios";

export default {
  data: () => ({
    loading: false,
    selection: 1,
    vorname: '',
    nachname: '',
    email: '',
    handynummer: '',

  }),

  methods: {
    reserve() {
      this.loading = true

      setTimeout(() => (this.loading = false), 2000)
    },
    async get() {
      const response = await axios.get('/produkt')

      const produkteArray = response.data;
      Object.freeze(produkteArray);

      this.$store.state.produkteArray = produkteArray;
      this.$store.state.produkteArray.forEach(item => {
        item.bild = `data:image/jpeg;base64,${item.bild}`;
      });
    }
  },
  mounted() {
    this.get()
  },
  computed: {
    ...mapGetters(['produkteArray'])
  },
  components: {
    HeaderComponent, Icon,
  }
}
</script>

<style scoped>

.background {
  position: fixed;
  background-image: url("../assets/paper.jpg");
  background-size: cover;
  height: 100vh;
  width: 100vw;
}
.bg{
  background-image: url("../assets/wiese.png");
  box-shadow: 0px 3px 5px black;
}
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap');
.line{
  font-family: "Dancing Script", cursive;
  margin-top: 30px;
}

</style>