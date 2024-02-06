<template>
  <v-row justify="center">
    <v-dialog
        v-model="dialog"
        width="800"
    >
      <template v-slot:activator="{ props }">
        <Icon :class="$store.state.mobile? 'logoscale':''" class="bubble " v-bind="props" icon="f7:chat-bubble-text" />
      </template>
      <div  class="container">
        <div :class="$store.state.mobile? 'item-mobile':'item'">
          <v-card style="overflow: scroll" :class="$store.state.mobile? 'card-mobile':'card'" >
            <div v-if="seite === 1">
              <v-card-title>
                <h2 :style="$store.state.mobile? 'font-size: 18px; margin-top: -17px; ':''" class="line" >Über mich und meine Qualifikationen</h2>
              </v-card-title>
              <v-card-text :style="$store.state.mobile? 'font-size: 13px; line-height: 1.3; ':''" class="mt-2">
                Ich bin Andrea Bachem, staatlich geprüfte Tierarzthelferin mit einer Leidenschaft für Tiere, die seit meiner Kindheit besteht. Durch meine Liebe zu diesen wunderbaren Geschöpfen habe ich eine Reihe von Qualifikationen erworben, um ihre Gesundheit und ihr Wohlbefinden zu unterstützen.
                Meine umfangreiche Ausbildung und Weiterbildung umfassen folgende Bereiche:
                <ul class="mt-3">
                  <li class="ml-8 mt-1">Tierphysiotherapie(FAT)Ich habe eine Ausbildung zur Tierphysiotherapeutin absolviert, um Tieren, insbesondere Hunden und Pferden,  sowie Katzen durch gezielte Bewegungstherapien und Rehabilitation zu helfen.</li>
                  <li class="ml-8 mt-1">Tierosteopathie: (Welter Böhler und Betina Oberstassen) Durch meine Ausbildung in Tierosteopathie kann ich ganzheitliche Behandlungsansätze anbieten, um die Balance im Körper der Tiere wiederherzustellen und Blockaden zu lösen.</li>
                  <li class="ml-8 mt-1">Manual-Therapie und Neurodynamik: (Sabine Harrer )Mit meiner Qualifikation in Manual-Therapie und Neurodynamik kann ich gezielte manuelle Techniken anwenden, um Schmerzen zu lindern und die Funktion des Bewegungsapparates zu verbessern.</li>
                  <li class="ml-8 mt-1">Akupunktur im Bewegungsapparat: Ich habe mich auf die Akupunktur im Bereich des Bewegungsapparates spezialisiert, um Schmerzen zu reduzieren, die Durchblutung zu verbessern und die Funktionen des Körpers zu fördern.</li>
                  <li class="ml-8 mt-1">Dorntherapie (Susanne Schmitt ) und Chiropraktik: (ATM) Als ausgebildete Dorntherapeutin für Hunde und Pferde habe ich fundiertes Wissen über die Ausrichtung der Wirbelsäule und die manuelle Therapie von Wirbelsäulenblockaden bei Tieren.</li>
                  <li class="ml-8 mt-1">Seminare und zusätzliche Qualifikationen: Ich habe an verschiedenen Seminaren teilgenommen, unter anderem zu Themen wie Röntgen, Faszienakupunktur, Stresspunkte und rassetypische Erkrankungen. Zusätzlich habe ich Fortbildungen in orthopädischem Untersuchungsgang, Sportphysiotherapie, Faszientherapie (Angelina spix)Dry Needling ((Dipo)und Ernährung bei Hunden und Pferden absolviert.</li>
                </ul>
              </v-card-text>
            </div>
            <div v-if="seite === 2">
              <v-card-title>
                <h2 class="line" >Schulung</h2>
              </v-card-title>
              <v-card-text class="mt-2">

                <p>
                  Als Dozentin biete ich auch Schulungen und Weiterbildungen in verschiedenen Bereichen an, darunter Dorntherapie am Pferd, Kinesiologie-Taping für Pferd und Hund sowie Biomechanik, Massage und Bewegungstherapie für Pferde, die es Tierbesitzern ermöglichen, das Wohlbefinden ihrer Tiere zu unterstützen.
                  Ich bin stets bestrebt, mein Wissen weiterzuentwickeln und auf dem neuesten Stand zu bleiben, um Tierbesitzern und ihren geliebten Gefährten die bestmögliche Betreuung zu bieten.
                  Mein Schwerpunkt ist die manuelle Therapie der Wirbelsäule und die Ernährungsberatung Ich behandle eure Tiere individuell und Schule euch im Thema Gesundheit eurer Vierbeiner
                </p>
                <br>

                <p>
                  Das Tier Wohl steht bei mir immer an erster Stelle  eure Andrea Bachem
                </p>
              </v-card-text>
            </div>
            <v-card-actions>
              <v-row style="width: 100%;" class="mx-2">
                <v-col cols="4">

                </v-col>
                <v-col class="d-flex justify-space-between" cols="4">
                  <Icon style="font-size: 40px" v-if="seite === 1" @click=" seite = 2"  icon="tabler:arrow-big-left" />
                  <Icon style="font-size: 40px" v-if="seite === 2" @click=" seite = 1" icon="tabler:arrow-big-left-filled" />
                  <v-spacer> </v-spacer>
                  <Icon style="font-size: 40px" v-if="seite === 2" @click=" seite = 1" icon="tabler:arrow-big-right" />
                  <Icon style="font-size: 40px" v-if="seite === 1" @click=" seite = 2" icon="tabler:arrow-big-right-filled" />
                </v-col>
                <v-col class="d-flex  justify-end" cols="4">
                  <v-btn

                      :class="$store.state.mobile? 'buttonscale':''"
                      class="d-flex justify-end  mb-5"
                      variant="text"
                      @click="dialog = false"
                  >
                    Schließen
                  </v-btn>
                </v-col>
              </v-row>

            </v-card-actions>
          </v-card>
        </div>
      </div>
    </v-dialog>
  </v-row>
</template>


<script >
import {Icon} from "@iconify/vue/dist/iconify";

export default {
  components:{
    Icon
  },
  data(){
    return{
      dialog: false,
      seite: 1
    }
  }
}
</script>


<style scoped>
.container{
  width: 500px;
}
.card{
  min-height: 700px;
  min-width: 700px;
  background-image: url("../assets/paper.jpg");
  border: 1px solid #f2f2f2;
  border-radius: 10px;
  padding: 20px;
  box-shadow:
      #00000012 0px 1px 2px,
      #00000012 0px 2px 4px,
      #00000012 0px 4px 8px,
      #00000012 0px 8px 16px,
      #00000012 0px 16px 32px,
      #00000012 0px 32px 64px;
  position: relative;
  left: 10px;
  transition: left 0.7s;
}
.item:hover:after{
  filter: drop-shadow(5px 0 4px #0000001a);
  transition: filter 0.5s ease;
}
.item:hover .card{
  left: 40px;
}
.bubble{
  position: absolute;
  right: 5%;
  top: 7%;
  font-size: 70px;
  cursor: pointer;
  color: white;
}
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap');
.line {
  font-family: "Dancing Script", cursive;
  margin-top: 10px;
  color: rgba(66, 65, 65, 0.82);
}
.item{
  --color: #0082c2;
  width: 700px;
  background-color: var(--color) ;
  padding: 10px 5px;
  box-shadow:
      #3c40434d 0px 1px 2px 0px,
      #3c404326 0px 1px 3px 1px;
  position: relative;
  cursor: pointer;
  border-radius: 7px;
  transition: box-shadow 0.5s ease;
}

.item:after{
  content: "";
  position: absolute;
  top: 8px;
  left: 0px;
  height: 80%;
  box-sizing: border-box;
  border-style: solid;
  border-color: transparent transparent transparent var(--color);
  border-width: 40px 40px 40px 40px;
  filter: drop-shadow(5px 0 4px #00000094);
}
.item-mobile:after{
  content: "";
  position: absolute;
  top: 8px;
  left: 0px;
  height: 80%;
  box-sizing: border-box;
  border-style: solid;
  border-color: transparent transparent transparent var(--color);
  border-width: 40px 40px 40px 40px;
  filter: drop-shadow(5px 0 4px #00000094);
}
.logoscale{
  transform: scale(0.5);
  transform-origin: top left;
}
.buttonscale{
  transform: scale(0.7);
  transform-origin: right;
}
.logoscale p {
  font-size: 100px; /* Hier wird die Schriftgröße festgelegt */
}
.item-mobile{
  --color: #0082c2;
  width: 350px;
  background-color: var(--color) ;
  padding: 10px 5px;
  box-shadow:
      #3c40434d 0px 1px 2px 0px,
      #3c404326 0px 1px 3px 1px;
  position: relative;
  cursor: pointer;
  border-radius: 7px;
  transition: box-shadow 0.5s ease;
}
.card-mobile{
  height: 500px;
  width: 330px;
  background-image: url("../assets/paper.jpg");
  border: 1px solid #f2f2f2;
  border-radius: 10px;
  padding: 20px;
  box-shadow:
      #00000012 0px 1px 2px,
      #00000012 0px 2px 4px,
      #00000012 0px 4px 8px,
      #00000012 0px 8px 16px,
      #00000012 0px 16px 32px,
      #00000012 0px 32px 64px;
  position: relative;
  left: 10px;
  transition: left 0.7s;

}
</style>

