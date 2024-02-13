<template>
  <div class="background">
    <v-row class="ma-0 mb-7 bg pb-7 pa-0" style="width: 100%">
      <v-col cols="8">
        <HeaderComponent></HeaderComponent>
      </v-col>
    </v-row>

    <div style="overflow: scroll;  height: 100%; padding-bottom: 300px">
      <h1 class="text-center line mt-3" style="  color: #4b4a4a"> Meine Berichte </h1>
      <v-row class="justify-center mt-n4 mx-0" style=" width: 100%;">
        <v-col v-for="bericht in reverseBerichte" :key="bericht.id" cols="10">

          <div class="container">
            <div class="image">
              <v-img :src="bericht.bild" alt="Beschreibung des Bildes " cover height="300px" width="300px"></v-img>
            </div>
            <h1 class=""> {{ bericht.ueberschrift }}</h1>
            <br>
            <h3 style="color: grey">
              Autor: {{ bericht.autor }}
            </h3>
            <h3 style="color: grey">
              Erschienen am: {{ bericht.datum }}
            </h3>
            <br>
            <br>

            <p class="text">
              {{ bericht.text }}
            </p>

          </div>


        </v-col>

      </v-row>
    </div>

  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import {mapGetters} from "vuex";
import axios from "axios";

export default {
  data: () => ({}),
  computed: {
    reverseBerichte: function () {
      return this.berichteArray.slice().reverse()
    },
    ...mapGetters(['berichteArray'])

  },
  methods: {
    async get() {
      const response = await axios.get('/bericht')

      const berichteArray = response.data;
      Object.freeze(berichteArray);

      this.$store.state.berichteArray = berichteArray;
      this.$store.state.berichteArray.forEach(item => {
        item.bild = `data:image/jpeg;base64,${item.bild}`;
      });
    }
  },
  mounted() {
    this.get()
  },
  components: {
    HeaderComponent,
  }
}
</script>

<style scoped>
.container {
  box-shadow: 2px 2px 6px black;
  background-color: rgba(255, 255, 255, 0.90);
  border: 2px solid black;
  padding: 20px;
  width: 80%;
  margin: 50px auto;
  overflow: hidden;
  border-radius: 5px;
}

.image {
  float: left;
  margin-right: 20px;
}

.background {
  background-image: url("../assets/bgChiro1.png");
  background-size: cover;
  position: fixed;
  height: 100vh;
  width: 100vw;
}

.text {
  text-align: justify;

}

.bg{
  background-image: url("../assets/wiese_11zon.jpg");
  box-shadow: 0px 3px 5px black;
}
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap');
.line{
  font-family: "Dancing Script", cursive;
  margin-top: 30px;
}
</style>