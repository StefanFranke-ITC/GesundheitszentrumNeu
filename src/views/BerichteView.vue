<template>
  <div v-if="!$store.state.mobile" class="background">
    <v-row class="ma-0 mb-7 bg pb-7 pa-0" style="width: 100%">
      <v-col cols="8">
        <HeaderComponent></HeaderComponent>
      </v-col>
    </v-row>

    <div style="overflow: scroll;  height: 100%; padding-bottom: 300px">
      <h1 class="text-center line mt-3" style="text-shadow: 2px 2px 2px black; color: #ffffff"> Meine Berichte </h1>
      <v-row class="justify-center mt-n4 mx-0" style=" width: 100%;">
        <v-col v-for="bericht in reverseBerichte" :key="bericht.id" cols="10">

          <div class="container">
            <div class="image">
              <v-img :src="bericht.bild" alt="Beschreibung des Bildes " cover height="300px" width="300px"></v-img>
            </div>
            <h1> {{ bericht.ueberschrift }}</h1>
            <br>
            <h3 style="color: grey">
              Autor: {{ bericht.autor }}
            </h3>
            <h3 style="color: grey">
              Erschienen am: {{ bericht.datum }}
            </h3>
            <br>
            <br>

            <p class="text" v-html="bericht.text"/>

          </div>


        </v-col>

      </v-row>
    </div>

  </div>
  <HandyComponent></HandyComponent>

</template>

<script>

import HeaderComponent from "@/components/HeaderComponent.vue";
import {mapGetters} from "vuex";
import HandyComponent from "@/components/HandyComponent.vue";

export default {
  data: () => ({}),
  computed: {
    reverseBerichte: function () {
      return this.berichteArray.slice().reverse()
    },
    ...mapGetters(['berichteArray','preiseArray', 'produkteArray', 'seminarArray', 'berichteArray', 'videoArray'])

  },
  methods: {},
  mounted() {
  },
  components: {
    HandyComponent,
    HeaderComponent  }
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
  background-image: url("../assets/black.webp");
  background-size: cover;

  position: fixed;
  height: 100vh;
  width: 100vw;
}

.text {
  text-align: justify;

}


@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap');
.line {
  font-family: "Dancing Script", cursive;
  margin-top: 30px;
}
a {
  text-decoration: none;
  color: inherit
}

.tab-card {
  height: 85vh;

  background-color: transparent;

}

.text {
  text-align: justify;
  font-size: 15px;
}

.line {
  font-family: "Dancing Script", cursive;
  color: #2c2a2a;
}

.logo {
  background-image: url("../assets/Logo2.png");
  background-size: cover;
  width: 372px;
  height: 165px;
}

.dialogBackground {
  background-image: url("../assets/bg_black2_11zon.webp");
  background-size: cover;
}

.background-impressum {

  background-image: url("../assets/paper.webp");
  background-size: cover;

}

.background {
  background-image: url("../assets/black.webp");
  background-size: cover;
  height: 100vh;
  width: 100vw;
  position: fixed;
  padding-bottom: 150px;
}


a {
  text-decoration: none;
  cursor: pointer;
}

.container1 {
  background-color: rgb(238, 238, 238);

  border: 2px solid black;
  padding: 20px;

  overflow: hidden;
  border-radius: 5px;
  transform-origin: -0px 0px;
}

.image {
  float: left; /* Float links für das Bild */
  margin-right: 20px; /* Abstand zum Text rechts vom Bild */
}

.buchBG {
  background-image: url("../assets/blattBg.png");
  background-size: cover;
  box-shadow: 0px 0px 8px 3px rgba(0, 0, 0, 0.34);
}

p {
  font-size: 10px;
}

.chirosiegel {
  background-image: url("../assets/chiroSiegel.webp");
  background-size: cover;
  height: 70px;
  width: 70px;
}

.chirosiegel1 {
  background-image: url("../assets/osteoSiegel.png");
  background-size: cover;
  height: 150px;
  width: 150px;
  margin-right: 60px;

}

.chirosiegel2 {
  background-image: url("../assets/physioSiegel.png");
  background-size: cover;
  height: 30px;
  width: 170px;

}

a:focus {
  outline: 2px solid blue;
}
</style>