<template>
  <div class="pt-10 background">
    <v-row class="mx-0 justify-center" style="width: 100%">
      <v-col cols="4">
        <v-select v-model="einstellung"
                  :items="einstellungen"
                  label="Einstellungen" variant="solo"/>
      </v-col>
      <Icon class="mt-6" icon="ic:baseline-home" style="font-size: 30px" @click="$router.push('/')"/>
      <v-col cols="10">
        <v-card
            style="width: 100%; height: 70vh; background-color: rgba(255,255,255,0.21); backdrop-filter: blur(4px); box-shadow: 2px 2px 5px black; border-left: rgba(255,255,255,0.47) 2px solid; border-top: rgba(255,255,255,0.44) 2px solid">
          <PreiseUndLeistungenComponent v-if="einstellung === 'Preise und Leistungen'"/>
          <YoutubeComponent v-if="einstellung === 'Videos'"/>
          <BerichteComponent v-if="einstellung === 'Berichte'"/>
          <KontaktaufnahmenComponent v-if="einstellung === 'Kontaktaufnahmen'"/>
          <SeminareComponent v-if="einstellung === 'Seminare'"/>
          <ProdukteComponent v-if="einstellung === 'Produkte'"/>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>


<script>

import PreiseUndLeistungenComponent from "@/components/PreiseUndLeistungenComponent.vue";
import YoutubeComponent from "@/components/YoutubeComponent.vue";
import {Icon} from "@iconify/vue";
import BerichteComponent from "@/components/BerichteComponent.vue";
import KontaktaufnahmenComponent from "@/components/KontaktaufnahmenComponent.vue";
import SeminareComponent from "@/components/SeminareComponent.vue";
import ProdukteComponent from "@/components/ProdukteComponent.vue";

export default {
  data() {
    return {
      einstellung: 'Produkte',
      einstellungen: ['Preise und Leistungen', 'Berichte', 'Kontaktaufnahmen', 'Seminare', 'Videos', 'Produkte']
    }
  },
  methods: {},
  components: {
    ProdukteComponent,
    SeminareComponent,
    KontaktaufnahmenComponent, BerichteComponent, Icon, PreiseUndLeistungenComponent, YoutubeComponent
  },
  mounted() {
  },
  created() {
  }
}
</script>


<style scoped>
.background {
  background-image: url("../assets/bgv.jpg");
  background-size: cover;
  height: 100vh;
  width: 100vw;
}

.v-row {
  width: 100%;
  margin-left: 0px;
  margin-right: 0px;
}
</style>