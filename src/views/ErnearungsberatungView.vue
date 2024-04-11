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
          <h1 class="line">Ernährung</h1>
          <br>
          <h2 class="line">

            Die Bedeutung der natürlichen Ernährung für Tiere
          </h2>

          <p class="mt-1">
            Gesundheit ist von entscheidender Bedeutung, aber sie beginnt nicht nur mit äußerlichen Faktoren. Auch bei
            Tieren ist eine gesunde Ernährung der Grundstein für ein vitales und glückliches Leben. Leider können
            Allergien, Gelenkserkrankungen und sogar Kotwasser bei Pferden durch eine falsche Ernährung verursacht
            werden. Daher ist es von großer Bedeutung, sich mit diesem Thema genauer auseinanderzusetzen und Lösungen zu
            finden.
          </p>
          <br>
          <h2 class="line">

            Allergien durch falsche Fütterung
          </h2>
          <p class="mt-1">
            Eine falsche Ernährung kann bei Tieren zu allergischen Reaktionen führen. Unausgewogene Nahrung, zu viele
            künstliche Zusatzstoffe oder bestimmte Inhaltsstoffe können zu Sensibilisierungen führen. Dies kann sich in
            Symptomen wie Juckreiz, Hautrötungen, Durchfall oder Erbrechen äußern. Um Allergien zu vermeiden, ist eine
            natürliche und ausgewogene Ernährung, die den individuellen Bedürfnissen des Tieres entspricht,
            unerlässlich.

          </p>
          <br>
          <h2 class="line">

            Gelenkserkrankungen und Wirbelblockaden durch Magen-Darm-Probleme

          </h2>
          <p class="mt-1">

            Eine unzureichende Ernährung kann auch zu wiederkehrenden Gelenkserkrankungen und Wirbelblockaden führen.
            Durch falsches Futter fehlen wichtige Nährstoffe, die für den Erhalt der Gelenkgesundheit und den
            reibungslosen Bewegungsablauf benötigt werden. Magen-Darm-Erkrankungen können zu Entzündungen führen, die
            wiederum die Gelenke und Wirbelsäule beeinflussen können. Durch gezielte Untersuchungen mit einem Labor
            können mögliche Zusammenhänge zwischen der Ernährung und solchen gesundheitlichen Problemen identifiziert
            werden.
          </p>
          <br>

          <h2 class="line">
            Kotwasser bei Pferden und mögliche ernährungsbedingte Ursachen

          </h2>
          <p class="mt-1">
            Kotwasser bei Pferden ist ein häufiges Problem, das oft mit der Ernährung in Verbindung gebracht wird. Ein
            Mangel an Ballaststoffen oder eine zu hohe Zufuhr von Stärke und Zucker kann die Darmflora negativ
            beeinflussen und zu Verdauungsstörungen führen. Eine angepasste Futterzusammensetzung, die auf den
            individuellen Bedarf des Pferdes abgestimmt ist, kann dazu beitragen, Kotwasser zu reduzieren und die
            Darmgesundheit zu verbessern.

          </p>
          <br>
          <h2 class="line">
            Fazit:

          </h2>
          <p class="mt-1">
            Eine artgerechte und ausgewogene Ernährung ist von großer Bedeutung, um Gesundheitsprobleme wie Allergien,
            Gelenkserkrankungen und Kotwasser bei Tieren zu vermeiden. Untersuchungen mit einem Labor können helfen,
            mögliche ernährungsbedingte Ursachen zu identifizieren. Sorgen wir mit einer bewussten und auf die
            individuellen Bedürfnisse abgestimmten Ernährung für das Wohlbefinden unserer tierischen Begleiter und geben
            ihnen die beste Chance auf ein gesundes und glückliches Leben.

          </p>

          <br>
          <v-row class="justify-end  " style="width: 100%;">
            <v-col class="mr-10" cols="2">
              <div class="chirosiegel "></div>

            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>

  <HandyComponent></HandyComponent>
</template>


<script setup>

import HeaderComponent from "@/components/HeaderComponent.vue";
import HandyComponent from "@/components/HandyComponent.vue";
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
  background-image: url("../assets/ernLogo.png");
  background-size: contain;
  height: 250px;
  width: 250px;
  margin-top: -30px;

}
</style>