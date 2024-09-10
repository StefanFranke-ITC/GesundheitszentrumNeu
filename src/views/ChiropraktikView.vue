<template>
  <div v-if="!$store.state.mobile" class="background">
    <v-row class="ma-0 mb-7 bg pb-7 pa-0" style="width: 100%">
      <v-col cols="8">
        <HeaderComponent></HeaderComponent>
      </v-col>
    </v-row>

    <v-row class="d-flex justify-center" style="width: 100%;">
      <v-col cols="8">
        <v-card class="buchBG pa-7" style="overflow: scroll; height: 60vh; width: 90%">
          <h1 class="line">Chiropraktik</h1>
          <br>
          <p>
            Die Chiropraktik beim Tier ist eine effektive und ganzheitliche Therapiemode, die darauf abzielt,
            die Gesundheit und das Wohlbefinden des Tieres durch die Korrektur von Wirbelsäulen- und Gelenkproblemen zu
            verbessern. <br>
            Durch sanfte, präzise chiropraktische Justierungen werden Blockaden und Fehlstellungen im Körper des Tieres
            gelöst, wodurch die
            natürliche Balance und Funktion wiederhergestellt werden. <br>
            Die Wirkung der Chiropraktik beruht auf der Tatsache, dass das Nervensystem eine zentrale Rolle
            bei der Steuerung aller Körperfunktionen spielt. <br> Durch Wirbelsäulen- und Gelenkfehlstellungen können
            Nervenimpulse blockiert oder
            gestört werden, was zu Schmerzen, Bewegungseinschränkungen und verschiedenen gesundheitlichen Problemen
            führen kann. <br>
            Durch chiropraktische Justierungen werden diese Blockaden entfernt, wodurch die Kommunikation zwischen
            Gehirn, Nerven und Organen verbessert wird. <br>
            Die Chiropraktik beim Tier kann bei einer Vielzahl von Beschwerden wie Rückenschmerzen, Gelenkproblemen,
            Muskelschwäche,
            Verdauungsstörungen und sogar Verhaltensproblemen wirksam sein. <br> Sie eignet sich sowohl zur
            Schmerzlinderung
            als auch zur Verbesserung der Beweglichkeit und Koordination. <br>
            Chiropraktische Behandlungen sind in der Regel
            schmerzfrei und können bei Tieren aller Altersgruppen und Rassen angewendet werden. <br>
            Die Wirksamkeit der Chiropraktik beruht auf ihrer ganzheitlichen Herangehensweise, bei der nicht nur die
            Symptome behandelt werden,
            sondern auch die zugrunde liegenden Ursachen. <br>
            Indem Ungleichgewichte im Körper korrigiert werden, wird die
            Selbstheilungskraft des
            Tieres stimuliert und dessen Gesundheit und Wohlbefinden auf natürliche Art und Weise gefördert. <br>
            Es ist
            jedoch wichtig, einen zertifizierten
            und erfahrenen Tierchiropraktiker zu konsultieren, um die beste Betreuung für Ihr Tier zu gewährleisten.
          </p>
          <br>
          <p> Ich bin ausgebildet und geprüfte Chiropraktikerin bei der ATM
          </p>
          <v-row class="justify-end ma-0 " style="width: 100%;">
            <v-col cols="2">
              <div class="chirosiegel"></div>

            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
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
    this.$store.state.tab = 5

  },
  components: {
    HandyComponent,
    HeaderComponent
  }
}
</script>


<style scoped>

.background {
  background-image: url("../assets/black.webp");
  background-size: cover;
  position: fixed;
  height: 100vh;
  width: 100vw;
}

.buchBG {
  background-color: rgba(201, 198, 198, 0.71);
  background-size: cover;
  backdrop-filter: blur(5px);
  box-shadow: 0px 0px 8px 3px rgba(0, 0, 0, 0.34);
}

.chirosiegel {
  background-image: url("../assets/chiroSiegel.webp");
  background-size: cover;
  height: 170px;
  width: 170px;
  margin-top: -50px;

}

@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap');
.line {
  font-family: "Dancing Script", cursive;
  color: rgba(44, 42, 42, 0.86);
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
