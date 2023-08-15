<template>
  <div id="app" class="justify-center d-flex">
    <v-card style="width: 60vw" class="mt-10">
    <quill-editor v-model:content="$store.state.contentDelta" theme="snow"></quill-editor>
    </v-card>
  </div>

  <div class="justify-center d-flex">
    <v-card style="width: 60vw; background-color: deepskyblue" class="mt-10">
      <div class="text-center mx-10" v-html="convertDeltaToHtml($store.state.contentDelta)"></div>
    </v-card>
  </div>
</template>

<script>
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import {QuillDeltaToHtmlConverter} from "quill-delta-to-html";
export default {
  name: "TextEditorComponent",
  components:{
    QuillEditor
},
  data() {
    return {

    };
  },
  methods: {
    convertDeltaToHtml(delta) {
      const converter = new QuillDeltaToHtmlConverter(delta.ops);
      return converter.convert();
    },
  }
}
</script>

<style scoped>

</style>