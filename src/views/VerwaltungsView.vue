<template>
  <div v-if="!user" class="d-flex justify-center align-center backgroundLogin"
       style="width: 100vw; height: 100vh">
    <LoginComponent/>
  </div>
  <div v-else class="pt-10 background">
    <v-row class="mx-0 justify-center" style="width: 100%">
      <Icon class="mt-6 icon" icon="ion:arrow-back" style="font-size: 40px; position: absolute; top: 0; left: 10px"
            @click="$router.push('/')"/>
      <Icon class="mt-6 icon" icon="material-symbols:logout"
            style="font-size: 40px; position: absolute; top: 0; right: 60px"
            @click="logout"/>
      <v-col cols="4">
        <v-select
            v-model="einstellung"
            :items="einstellungen"
            label="Einstellungen"
            variant="solo"
            style="height: 100%"
        />

      </v-col>
      <v-col cols="10">
        <v-card
            class="pb-5"
            style="width: 100%; height: 100%; background-color: rgba(255,255,255,0.21); backdrop-filter: blur(4px); box-shadow: 2px 2px 5px black; border-left: rgba(255,255,255,0.47) 2px solid; border-top: rgba(255,255,255,0.44) 2px solid">
          <PreiseUndLeistungenComponent v-if="einstellung === 'Preise und Leistungen'"/>
          <YoutubeComponent v-if="einstellung === 'Videos'"/>
          <BerichteComponent v-if="einstellung === 'Berichte'"/>
          <KontaktaufnahmenComponent v-if="einstellung === 'Kontaktaufnahmen'"/>
          <SeminareComponent v-if="einstellung === 'Seminare'"/>
          <ProdukteComponent v-if="einstellung === 'Produkte'"/>
          <RechnungComponent v-if="einstellung === 'Rechnungen'"/>
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
import {mapGetters} from "vuex";
import LoginComponent from "@/components/LoginComponent.vue";
import axios from "axios";
import RechnungComponent from "@/components/RechnungComponent.vue";

export default {
  data() {
    return {
      einstellung: 'Kontaktaufnahmen',
      einstellungen: ['Kontaktaufnahmen', 'Berichte', 'Preise und Leistungen', 'Seminare', 'Videos', 'Produkte', 'Rechnungen']
    }
  },
  methods: {
    async getUser() {
      console.log(this.$store.state.user)
      try {
        const user = await axios.get('/user')
        this.$store.dispatch('user', user.data)
      } catch (error) {
        console.log(error)
      }
    },
    logout() {
      localStorage.removeItem('token');
      this.$store.dispatch('user', false);
      location.reload()
    },
  },
  mounted() {
    this.getUser();
  },
  components: {
    LoginComponent,
    ProdukteComponent,
    SeminareComponent,
    KontaktaufnahmenComponent,
    BerichteComponent,
    Icon,
    PreiseUndLeistungenComponent,
    YoutubeComponent,
    RechnungComponent
  },
  computed: {
    ...mapGetters(['user'])
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

.icon {
  color: black;
}

.icon:hover {
  color: blue;
  cursor: pointer;
}

.backgroundLogin {
  background-image: url("../assets/bg_login_dialog.jpg");
  background-size: cover;
}

.v-row {
  width: 100%;
  margin-left: 0px;
  margin-right: 0px;
}
</style>