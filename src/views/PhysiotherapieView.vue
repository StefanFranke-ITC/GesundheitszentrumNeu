<template>
  <div  v-if="!$store.state.mobile" class="background">
    <v-row class="ma-0 mb-7 bg pb-7 pa-0" style="width: 100%">
      <v-col cols="8">
        <HeaderComponent></HeaderComponent>
      </v-col>
    </v-row>

    <v-row class="d-flex justify-center" style="width: 100%;">
      <v-col cols="8">
        <v-card class="buchBG pa-7" style="overflow: scroll; height: 60vh; width: 90%">
          <h1 class="line">Physiotherapie</h1>
          <br>
          <p>
            Physiotherapie beim Tier ist eine wichtige Therapiemethode, die darauf abzielt, die Funktion und
            Beweglichkeit des Tieres wiederherzustellen, zu verbessern oder zu erhalten.
            <br> Als ausgebildeter und geprüfter Physiotherapeut für Tiere erfasse ich die individuellen Bedürfnisse
            jedes Tieres, um ein maßgeschneidertes Behandlungsprogramm zu erstellen. <br>
            Die Hauptaufgabe der Physiotherapie ist es, die körperliche Rehabilitation und die Schmerzlinderung zu
            fördern. <br> Durch verschiedene Behandlungstechniken wie Massage, manuelle Therapie, passive Bewegung,
            Dehnung
            und Übungen werden Schmerzen reduziert, Muskelverspannungen gelöst und die Gelenkfunktion verbessert. <br>
            Die Physiotherapie kann bei verschiedenen Problemen eingesetzt werden, z.B. nach Verletzungen, Operationen
            oder bei chronischen Erkrankungen. <br> Sie hilft auch, altersbedingte Probleme wie Arthritis oder
            Wirbelsäulenprobleme zu bewältigen. <br> Das Ziel ist es, die Mobilität zu verbessern, die Muskelfunktion zu
            stärken und die Lebensqualität des Tieres zu steigern. <br>
            Ein weiterer Schwerpunkt der Physiotherapie liegt auf der Prävention von Verletzungen und Erkrankungen. <br>
            Durch gezieltes Training, Aufbau von Muskelkraft und Verbesserung der Balance wird die Belastbarkeit des
            Tieres erhöht, bevor es zu Problemen kommt. <br>
            Die Physiotherapie beim Tier kann als eigenständige Therapieform oder in Kombination mit anderen
            Behandlungsmethoden wie Osteopathie oder Akupunktur eingesetzt werden. <br> Wichtig ist eine ganzheitliche
            Betrachtung des Tieres und eine enge Zusammenarbeit mit dem Tierbesitzer und anderen Fachleuten, um die
            bestmögliche Betreuung zu gewährleisten. <br>
            Meine Qualifikation als ausgebildeter und geprüfter Physiotherapeut für Tiere stellt sicher, dass Ihr Tier
            die bestmögliche Versorgung erhält. <br> Ich stehe Ihnen gerne zur Verfügung, um gemeinsam das
            Behandlungsprogramm zu entwickeln, das den individuellen Bedürfnissen Ihres Tieres am besten entspricht.
          </p>

          <v-row class="justify-end ma-0 " style="width: 90%;">
            <v-col class="mr-10 mt-10" cols="2">
              <div class="chirosiegel"></div>

            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
    <HandyComponent></HandyComponent>
</template>


<script >

import HeaderComponent from "@/components/HeaderComponent.vue";
import HandyComponent from "@/components/HandyComponent.vue";
export default {
  mounted() {
    this.$store.state.tab = 7

  },
  components:{
    HandyComponent,HeaderComponent
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

@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap');
.line {
  font-family: "Dancing Script", cursive;
  color: rgba(44, 42, 42, 0.86);
}

.chirosiegel {
  background-image: url("../assets/physioSiegel.png");
  background-size: cover;
  height: 50px;
  width: 300px;
  margin-right: 120px;
}
</style>