<template>
  <v-app id="home">
    <v-main>
      <router-view/>
      <UeberUnsComponent></UeberUnsComponent>
    </v-main>
  </v-app>
</template>

<script>

import UeberUnsComponent from "@/components/UeberUnsComponent.vue";

export default {

  name: 'App',
 components:{
   UeberUnsComponent

 },
  data: () => ({
    //
  }),
}
</script>
<style>
::-webkit-scrollbar {
  width: 0;
  background: transparent;
}

</style>
