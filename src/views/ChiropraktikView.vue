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
          <h1 class="line">Chiropraktik</h1>
         <br>
         <p>
           Die Chiropraktik beim Tier ist eine effektive und ganzheitliche Therapiemode, die darauf abzielt, die Gesundheit und das Wohlbefinden des Tieres durch die Korrektur von Wirbelsäulen- und Gelenkproblemen zu verbessern. Durch sanfte, präzise chiropraktische Justierungen werden Blockaden und Fehlstellungen im Körper des Tieres gelöst, wodurch die natürliche Balance und Funktion wiederhergestellt werden.
           Die Wirkung der Chiropraktik beruht auf der Tatsache, dass das Nervensystem eine zentrale Rolle bei der Steuerung aller Körperfunktionen spielt. Durch Wirbelsäulen- und Gelenkfehlstellungen können Nervenimpulse blockiert oder gestört werden, was zu Schmerzen, Bewegungseinschränkungen und verschiedenen gesundheitlichen Problemen führen kann. Durch chiropraktische Justierungen werden diese Blockaden entfernt, wodurch die Kommunikation zwischen Gehirn, Nerven und Organen verbessert wird.
           Die Chiropraktik beim Tier kann bei einer Vielzahl von Beschwerden wie Rückenschmerzen, Gelenkproblemen, Muskelschwäche, Verdauungsstörungen und sogar Verhaltensproblemen wirksam sein. Sie eignet sich sowohl zur Schmerzlinderung als auch zur Verbesserung der Beweglichkeit und Koordination. Chiropraktische Behandlungen sind in der Regel schmerzfrei und können bei Tieren aller Altersgruppen und Rassen angewendet werden.
           Die Wirksamkeit der Chiropraktik beruht auf ihrer ganzheitlichen Herangehensweise, bei der nicht nur die Symptome behandelt werden, sondern auch die zugrunde liegenden Ursachen. Indem Ungleichgewichte im Körper korrigiert werden, wird die Selbstheilungskraft des Tieres stimuliert und dessen Gesundheit und Wohlbefinden auf natürliche Art und Weise gefördert. Es ist jedoch wichtig, einen zertifizierten und erfahrenen Tierchiropraktiker zu konsultieren, um die beste Betreuung für Ihr Tier zu gewährleisten.
         </p>
         <br>
         <p>           Ich bin ausgebildet und geprüfte Chiropraktikerin bei der ATM
         </p>
         <v-row style="width: 100%;" class="justify-end ma-0 ">
           <v-col cols="2" >
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
  background-image: url("../assets/bg_black2_11zon.webp");
  background-size: cover;
  position: fixed;
  height: 100vh;
  width: 100vw;
}
.buchBG {
  background-image: url("../assets/blattBg.png");
  background-size: cover;
  box-shadow: 0px 0px 8px 3px rgba(0, 0, 0, 0.34);
}
.chirosiegel{
  background-image: url("../assets/chiroSiegel.webp");
  background-size: cover;
  height: 170px;
  width: 170px;
  margin-top: -50px;

}
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap');
.line{
  font-family: "Dancing Script", cursive;
  color: rgba(44, 42, 42, 0.86);
}
</style>
