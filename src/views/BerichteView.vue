
<template>
  <div class="background">
    <v-row  style="width: 100%" class="ma-0 pa-0">
      <v-col cols="8">
        <HeaderComponent></HeaderComponent>
      </v-col>
    </v-row>
    <v-divider ></v-divider>

    <div style="overflow: scroll;  height: 100%; padding-bottom: 300px">
              <h1 class="text-center mt-3"> Meine Berichte </h1>
      <v-row  style=" width: 100%;" class="justify-center mt-n4 mx-0">
        <v-col v-for="bericht in berichteArray" :key="bericht.id" cols="10">

            <div class="container">
              <div class="image">
                <v-img cover="true" :src="bericht.bild" alt="Beschreibung des Bildes " width="300px" height="300px"></v-img>
              </div>
              <h1 class=""> {{ bericht.ueberschrift }}</h1>
              <br>
              <h3 style="color: grey">
                Autor: {{ bericht.autor }}
              </h3>
              <h3 style="color: grey">
                Erschienen am: {{bericht.datum     }}
              </h3>
              <br>
              <br>

              <p class="text">
                {{bericht.text}}
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

export default {
  data: () => ({

  }),
  computed:{
    ...mapGetters(['berichteArray'])

  },
  methods: {

  },
  components:{
    HeaderComponent,
  }
}
</script>

<style scoped>
.container {
  box-shadow: 2px 2px 6px black;
  background-color: rgba(255, 255, 255, 0.74);
  border: 2px solid black;
  padding: 20px;
  width: 80%;
  margin: 50px auto;
  overflow: hidden; /* Bietet Platz für float-Elemente */
  border-radius: 5px;
}

/* Das Bild oben links */
.image {
  float: left; /* Float links für das Bild */
  margin-right: 20px; /* Abstand zum Text rechts vom Bild */
}
.background{
  background-image: url("../assets/bg4.jpg");
  background-size: cover;
  position: fixed;
  height: 100vh;
  width: 100vw;
}
.text{
  text-align: justify;
}

</style>