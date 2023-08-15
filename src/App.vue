<template>
  <v-app id="home">
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

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
