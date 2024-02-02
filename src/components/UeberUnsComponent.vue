<template>
  <v-row justify="center">
    <v-dialog
        v-model="dialog"
        width="800"
    >
      <template v-slot:activator="{ props }">
        <Icon class="bubble" v-bind="props" icon="f7:chat-bubble-text" />
      </template>
      <div class="container">
        <div class="item">
          <v-card class="card">
            <v-card-title>
              <h1 class="line" >Use Google's location service?</h1>
            </v-card-title>
            <v-card-text >
              Lorem ipsum dolor sit amet, semper quis, sapien id natoque elit. Nostra urna at, magna at neque sed sed ante imperdiet, dolor mauris cursus velit, velit non, sem nec. Volutpat sem ridiculus placerat leo, augue in, duis erat proin condimentum in a eget, sed fermentum sed vestibulum varius ac, vestibulum volutpat orci ut elit eget tortor. Ultrices nascetur nulla gravida ante arcu. Pharetra rhoncus morbi ipsum, nunc tempor debitis, ipsum pellentesque, vitae id quam ut mauris dui tempor, aptent non. Quisque turpis. Phasellus quis lectus luctus orci eget rhoncus. Amet donec vestibulum mattis commodo, nulla aliquet, nibh praesent, elementum nulla. Sit lacus pharetra tempus magna neque pellentesque, nulla vel erat.
              Justo ex quisque nulla accusamus venenatis, sed quis. Nibh phasellus gravida metus in, fusce aenean ut erat commodo eros. Ut turpis, dui integer, nonummy pede placeat nec in sit leo. Faucibus porttitor illo taciti odio, amet viverra scelerisque quis quis et tortor, curabitur morbi a. Enim tempor at, rutrum elit condimentum, amet rutrum vitae tempor torquent nunc. Praesent vestibulum integer maxime felis. Neque aenean quia vitae nostra, tempus elit enim id dui, at egestas pulvinar. Integer libero vestibulum, quis blandit scelerisque mattis fermentum nulla, tortor donec vestibulum dolor amet eget, elit nullam. Aliquam leo phasellus aliquam curabitur metus a, nulla justo mattis duis interdum vel, mollis vitae et id, vestibulum erat ridiculus sit pulvinar justo sed. Vehicula convallis, et nulla wisi, amet vestibulum risus, quam ac egestas.
              vestibulum, cursus accumsan nunc pede tempus mi ipsum, ligula sed. Non condimentum ac dolor sit. Mollis eu aliquam, vel mattis mollis massa ut dolor ante, tempus lacinia arcu. Urna vestibulum lorem, nulla fermentum, iaculis ut congue ac vivamus. Nam libero orci, pulvinar nulla, enim pellentesque consectetuer leo, feugiat rhoncus rhoncus vel. Magna sociosqu donec, dictum cursus ullamcorper viverra. Ultricies quis orci lorem, suspendisse ut vestibulum integer, purus sed lorem pulvinar habitasse turpis.
              +
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                  class="line mr-5 mb-5"
                  variant="text"
                  @click="dialog = false"
              >
                Zurück
              </v-btn>
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
    }
  }
}
</script>


<style scoped>
.container{
  width: 700px;
}
.card{
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
}
.item:hover .card{
  left: 50px;
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
</style>

