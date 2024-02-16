<template>
  <div class="background">
    <v-row class="ma-0 mb-7 bg pb-7 pa-0" style="width: 100%">
      <v-col cols="8">
        <HeaderComponent></HeaderComponent>
      </v-col>
    </v-row>

    <v-row style="width: 100%;" class="d-flex justify-center" >
      <v-col cols="8">
        <v-card  class="buchBG pa-7" style="overflow: scroll; height: 60vh; width: 90%">
          <h1 class="line">Physiotherapie</h1>
          <br>
          <p>
            Physiotherapie beim Tier ist eine wichtige Therapiemethode, die darauf abzielt, die Funktion und Beweglichkeit des Tieres wiederherzustellen, zu verbessern oder zu erhalten. Als ausgebildeter und geprüfter Physiotherapeut für Tiere erfasse ich die individuellen Bedürfnisse jedes Tieres, um ein maßgeschneidertes Behandlungsprogramm zu erstellen.
            Die Hauptaufgabe der Physiotherapie ist es, die körperliche Rehabilitation und die Schmerzlinderung zu fördern. Durch verschiedene Behandlungstechniken wie Massage, manuelle Therapie, passive Bewegung, Dehnung und Übungen werden Schmerzen reduziert, Muskelverspannungen gelöst und die Gelenkfunktion verbessert.
            Die Physiotherapie kann bei verschiedenen Problemen eingesetzt werden, z.B. nach Verletzungen, Operationen oder bei chronischen Erkrankungen. Sie hilft auch, altersbedingte Probleme wie Arthritis oder Wirbelsäulenprobleme zu bewältigen. Das Ziel ist es, die Mobilität zu verbessern, die Muskelfunktion zu stärken und die Lebensqualität des Tieres zu steigern.
            Ein weiterer Schwerpunkt der Physiotherapie liegt auf der Prävention von Verletzungen und Erkrankungen. Durch gezieltes Training, Aufbau von Muskelkraft und Verbesserung der Balance wird die Belastbarkeit des Tieres erhöht, bevor es zu Problemen kommt.
            Die Physiotherapie beim Tier kann als eigenständige Therapieform oder in Kombination mit anderen Behandlungsmethoden wie Osteopathie oder Akupunktur eingesetzt werden. Wichtig ist eine ganzheitliche Betrachtung des Tieres und eine enge Zusammenarbeit mit dem Tierbesitzer und anderen Fachleuten, um die bestmögliche Betreuung zu gewährleisten.
            Meine Qualifikation als ausgebildeter und geprüfter Physiotherapeut für Tiere stellt sicher, dass Ihr Tier die bestmögliche Versorgung erhält. Ich stehe Ihnen gerne zur Verfügung, um gemeinsam das Behandlungsprogramm zu entwickeln, das den individuellen Bedürfnissen Ihres Tieres am besten entspricht.
          </p>

          <v-row style="width: 90%;" class="justify-end ma-0 ">
            <v-col cols="2" class="mr-10 mt-10" >
              <div class="chirosiegel"></div>

            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>

</template>


<script setup>

import HeaderComponent from "@/components/HeaderComponent.vue";
</script>


<style scoped>

.background {
  background-image: url("../assets/Lola.jpg");
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
.line{
  font-family: "Dancing Script", cursive;
  color: rgba(44, 42, 42, 0.86);
}
.chirosiegel{
  background-image: url("../assets/physioSiegel.png");
  background-size: cover;
  height: 50px;
  width: 300px;
  margin-right: 120px;
}
</style>