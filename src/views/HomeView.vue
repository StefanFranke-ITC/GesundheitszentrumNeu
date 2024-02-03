<template>
  test
  <div class="background">
    <TextEditorComponent/>
    <div class="d-flex justify-center">
      <LoginComponent/>
      test
    </div>
    <div class="d-flex justify-center">
      <RegistrierenComponent/>
    </div>
  </div>
</template>

<script>
import {defineComponent} from 'vue';
import TextEditorComponent from "@/components/TextEditorComponent";
import RegistrierenComponent from "@/components/RegistrierenComponent";

export default defineComponent({
  name: 'HomeView',

  components: {
    TextEditorComponent, RegistrierenComponent
  },
});
</script>
<style>
.background {
  background-image: url("../assets/backgroundLogin.jpg");
  height: 100%;
  position: fixed;
  width: 100%;
}
</style>
