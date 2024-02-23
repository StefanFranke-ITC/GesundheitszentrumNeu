<template>
  <div class="background">
    <v-row class="ma-0 mb-7 bg pb-7 pa-0" style="width: 100%">
      <v-col cols="8">
        <HeaderComponent></HeaderComponent>
      </v-col>
    </v-row>

    <v-row class="d-flex justify-center" style="width: 100%;">
      <v-col cols="8">
        <v-card class="buchBG pa-7" style="overflow: scroll; height: 60vh; width: 90%">
          <h1 class="line">Osteopathie</h1>
          <br>
          <p>
            Osteopathie beim Tier ist eine sanfte und ganzheitliche Therapiemethode,
            die darauf abzielt, die körpereigene Selbstheilungskraft zu aktivieren. <br>
            Durch manuelle Techniken werden Blockaden, Verspannungen und Dysfunktionen
            im Bewegungsapparat des Tieres gelöst, wodurch Schmerzen gelindert und die Mobilität
            verbessert werden können. <br> Die Osteopathie betrachtet den Körper als Einheit aus Struktur,
            Funktion und Energie, und behandelt somit nicht nur Symptome, sondern auch die Ursache des Problems. <br>
            Sie kann bei verschiedenen Beschwerden wie muskulären Verspannungen, Gelenkproblemen, Verdauungsstörungen
            oder Verhaltensauffälligkeiten angewendet werden. <br> Die osteopathische Behandlung ist in der Regel
            schmerzfrei
            und für Tiere aller Altersgruppen geeignet. <br> Sie kann eine wertvolle Ergänzung zur Schulmedizin sein und
            dazu beitragen,
            die Gesundheit und das Wohlbefinden Ihres Tieres auf natürliche Weise zu fördern.
          </p>

          <v-row class="justify-end ma-0 " style="width: 90%;">
            <v-col cols="2">
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
  background-image: url("../assets/osteoSiegel.png");
  background-size: cover;
  height: 200px;
  width: 200px;
  margin-right: 60px;

}
</style>