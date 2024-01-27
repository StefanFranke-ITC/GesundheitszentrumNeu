<template>
  <div class="pt-10 background">
    <v-row class="mx-0 justify-center" style="width: 100%">
      <v-col cols="4">
        <v-select v-model="einstellung"
                  :items="einstellungen"
                  label="Einstellungen" variant="solo"/>

      </v-col>

      <v-col cols="10">
        <v-card
            style="width: 100%; height: 70vh; background-color: rgba(255,255,255,0.21); backdrop-filter: blur(4px); box-shadow: 2px 2px 5px black; border-left: rgba(255,255,255,0.47) 2px solid; border-top: rgba(255,255,255,0.44) 2px solid">
          <PreiseUndLeistungenComponent v-if="einstellung === 'Preise und Leistungen'"/>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>


<script>

import PreiseUndLeistungenComponent from "@/components/PreiseUndLeistungenComponent.vue";

export default {
  data() {
    return {
      einstellung: 'Preise und Leistungen',
      einstellungen: ['Preise und Leistungen', 'Berichte', 'Kontaktaufnahmen', 'Seminare', 'Videos', 'Produkte']
    }
  },
  methods: {},
  components: {PreiseUndLeistungenComponent},
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