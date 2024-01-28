
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
        <v-col cols="10">



            <div class="container">
              <div class="image">
                <v-img cover="true" src="../assets/preisBild.png" alt="Beschreibung des Bildes " width="300px" height="300px"></v-img>
              </div>
              <h1 class=""> Rehe in der Wildnis</h1>
              <br>
              <h3 style="color: grey">
                Autor: Stefan Franke
              </h3>
              <h3 style="color: grey">
                Erschienen am: 22.10.1999
              </h3>
              <br>
              <br>

              <p class="text">
                Die majestätischen Rehe, eine charakteristische Tierart in vielen Wildnisgebieten, faszinieren mit ihrer Anmut und Eleganz. Ihr Lebensraum erstreckt sich über Wälder, Wiesen und Bergregionen, wo sie sich geschickt an unterschiedliche Umgebungen anpassen. Die Rehpopulation spielt eine bedeutende Rolle im Ökosystem und trägt zur Biodiversität bei.

                Rehe sind Pflanzenfresser und ernähren sich hauptsächlich von Gräsern, Blättern, Knospen und Rinde. Ihre Präsenz in der Wildnis beeinflusst direkt das Gleichgewicht der Pflanzengemeinschaften. Durch selektives Fressen helfen sie, das Überwuchern bestimmter Pflanzen zu kontrollieren und schaffen somit optimale Bedingungen für andere Arten.

                Die sozialen Strukturen innerhalb der Rehpopulation sind ebenso faszinierend. In der Regel leben Rehe in kleinen Gruppen, die aus einer Leitkuh und ihrem Nachwuchs bestehen. Die Gruppen bieten Schutz vor Raubtieren und erleichtern den Informationsaustausch über potenzielle Gefahren. Im Herbst findet die Paarungszeit statt, während der die majestätischen Balzrituale der Hirsche beeindrucken.

                Rehe haben erstaunliche Anpassungsfähigkeiten an ihre Umgebung. Ihre Tarnungsfähigkeiten sind bemerkenswert, was es ihnen ermöglicht, sich vor Raubtieren zu verbergen. Zusätzlich verlassen sich Rehe auf ihre schnellen Beine, um Gefahren zu entkommen.

                Leider sind Rehe auch verschiedenen Bedrohungen ausgesetzt, darunter Habitatverlust, Wilderei und Verkehrsunfälle. Der Schutz ihres Lebensraums und die Implementierung von Maßnahmen zur Reduzierung von Kollisionen mit Fahrzeugen sind entscheidend für den langfristigen Erhalt dieser faszinierenden Wildtiere.

                Insgesamt sind Rehe ein faszinierender Bestandteil der Wildnis, der nicht nur ästhetisch ansprechend ist, sondern auch eine wichtige Rolle im Ökosystem spielt. Der Schutz ihrer Lebensräume und die Förderung einer nachhaltigen Koexistenz sind von entscheidender Bedeutung, um sicherzustellen, dass zukünftige Generationen die Schönheit und den Wert dieser Wildtiere erleben können.
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

  methods: {
    ...mapGetters(['berichteArray'])
  },
  components:{
    HeaderComponent,
  }
}
</script>

<style scoped>
.container {
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