<template>
  <div>
    <v-tabs
        v-model="tab"
        align-tabs="center"
        class="mt-3 text-white"
        color="orange"
        style="height: 100%"
    >
      <v-tab :value="0">Erstellen</v-tab>
      <v-tab :value="1">Bearbeiten</v-tab>
      <v-tab :value="2">Löschen</v-tab>
    </v-tabs>

    <v-window v-model="tab">
      <v-window-item value="0">
        <v-container fluid>
          <v-row>
            <v-col cols="4">
              <v-card
                  class="mx-auto my-12 "
                  height="500"
                  style="background-color: rgb(255,255,255); backdrop-filter: blur(4px);box-shadow: 1px 1px 5px black "
                  width="340"
              >
                <template>
                  <v-progress-linear
                      color="deep-purple"
                      height="10"
                      indeterminate
                  ></v-progress-linear>
                </template>

                <v-img
                    :src="bild"
                    cover="true"
                    style="width: 100%; max-height: 180px"
                ></v-img>

                <v-card-title>{{ ueberschrift }}</v-card-title>

                <v-card-text>
                  <div class="my-2 text-subtitle-1">
                    {{ preis }} €
                  </div>

                  <div>
                    {{ text }}

                  </div>
                </v-card-text>

                <v-divider class="mx-4"></v-divider>
                <v-row class="ma-0" style="width: 100%">
                  <v-card-title>Dauer:</v-card-title>

                  <v-card-text>
                    <v-chip-group
                        active-class="deep-purple accent-4 white--text">

                      <v-chip>{{ dauer }}</v-chip>

                    </v-chip-group>
                  </v-card-text>

                </v-row>

                <v-card-actions>
                  <div class="d-flex justify-center" style="width: 100%">
                    <v-btn style="background-color: #0082c2; color: #dedddd" v-bind="props">
                      Termin Vereinbaren
                    </v-btn>
                  </div>

                </v-card-actions>
              </v-card>
            </v-col>

            <v-col cols="8">
              <v-card
                  class="mx-auto my-12 pa-5"
                  height="500">
                <v-row class="justify-center">
                  <v-col class="d-flex justify-center" cols="5">
                    <v-text-field v-model="ueberschrift" label="Überschrift">

                    </v-text-field>
                  </v-col>
                  <v-col class="d-flex justify-center" cols="5">
                    <v-text-field v-model="bild" label="Bild">

                    </v-text-field>
                  </v-col>
                  <v-col class="d-flex justify-center" cols="5">
                    <v-text-field v-model="preis" label="Preis">

                    </v-text-field>
                  </v-col>
                  <v-col class="d-flex justify-center" cols="5">
                    <v-text-field v-model="dauer" label="Dauer">

                    </v-text-field>
                  </v-col>
                  <v-col class="d-flex justify-center" cols="10">
                    <v-textarea v-model="text" :maxlength="215" :rules="rules" clearable counter label="Beschreibung"
                                no-resize>

                    </v-textarea>
                  </v-col>
                  <v-col class="d-flex justify-center" cols="5">
                    <v-btn>
                      speichern
                    </v-btn>
                  </v-col>
                  <v-col class="d-flex justify-center" cols="5">
                    <v-btn>
                      leeren
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-window-item>

      <v-window-item value="1">
        test
      </v-window-item>
      <v-window-item value="2">
        dsfsdf
      </v-window-item>
    </v-window>


  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: null,
      ueberschrift: '',
      preis: '',
      bild: require('/src/assets/preisBild.png'),
      dauer: '',
      text: '',
      rules: [v => v.length <= 214 || 'Maximale Zeichenanzahl 215 erreicht'],
    }
  },
  methods: {},
  components: {},
  mounted() {
  },
  created() {
  }
}
</script>

<style scoped>
.v-row {
  width: 100%;
  margin-left: 0px;
  margin-right: 0px;
}
</style>