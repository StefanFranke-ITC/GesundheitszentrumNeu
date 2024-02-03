<template>
  <v-app id="home">
    <v-main>
      <router-view/>
      <UeberUnsComponent v-if="$route.path !== '/verwaltung'"></UeberUnsComponent>
      <cookie-accept-decline></cookie-accept-decline>
    </v-main>
  </v-app>
</template>

<script>

import UeberUnsComponent from "@/components/UeberUnsComponent.vue";
import cookieAcceptDecline from "@/views/Cookie-accept-decline.vue";

export default {

  name: 'App',
  components: {
    UeberUnsComponent, cookieAcceptDecline

  },
  data: () => ({
    text: "hallo",
    snackbar: true,
  }),
}
</script>
<style>
::-webkit-scrollbar {
  width: 0;
  background: transparent;
}

</style>
