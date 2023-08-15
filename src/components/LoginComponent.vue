<template>
        <v-form @submit.prevent="login">
          <v-card class="card">
            <v-card-title class="text-center">
              <span class="text-h5 ">Einloggen</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row class="d-flex justify-center" style="width: 100%">
                  <v-col
                      cols="12">
                    <v-text-field v-model="email"
                                  class=""
                                  label="Email"
                                  required
                                  variant="outlined"
                    ></v-text-field>
                  </v-col>
                  <v-col
                      cols="12">
                    <v-text-field v-model="password"
                                  class=""
                                  label="Passwort"
                                  persistent-hint
                                  required
                                  variant="outlined"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
              <v-alert v-if="error === 'AxiosError: Request failed with status code 401'"
                       class="text-center text-black" type="error">
                Benutzername oder Passwort ist falsch.
              </v-alert>

              <v-alert v-if="error !== 'AxiosError: Request failed with status code 401' && error != null"
                       class="text-center text-black" type="error">
                Einloggen ist momentan nicht möglich. Bitte wenden Sie sich an den Administrator.
              </v-alert>
            </v-card-text>
            <v-card-actions class="d-flex justify-center">
              <v-btn
                  
                  variant="text">
                Abbrechen
              </v-btn>
              <v-btn
                  
                  type="submit">
                Einloggen
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-form>
</template>

<script>
import {mapGetters} from "vuex";
import axios from "axios";

export default {
  name: "LoginComponent",
  data: () => ({
    email: null,
    password: '',
}),

  components: {

  },
  computed: {
    ...mapGetters(['user'])
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('/login',
            {
              email: this.email,
              password: this.password
              // Eventuell weitere Attribute
            });
        await localStorage.setItem('token', response.data)
        // Was soll danach passieren? Wohin weiterleiten?
      } catch (error) {

        if(error === 'AxiosError: Request failed with status code 401') {
          alert('Benutzername oder Passwort ist falsch.')
        }

        if(error !== 'AxiosError: Request failed with status code 401' && error != null) {
          alert('Einloggen ist momentan nicht möglich. Bitte wenden Sie sich an den Administrator.')
        }

      }
    },
    logout() {
      localStorage.removeItem('token');
      this.$store.dispatch('user', null);
      location.reload(); // Soll woanders weitergeleitet werden?
    },
    async getUser() {
      try {
        const user = await axios.get('/user')
        this.$store.dispatch('user', user.data)
      } catch (error) {
        console.log(error)
      }
    },
  },

}
</script>

<style>
.card {
  background-color: rgba(255, 255, 255, 0.10);
  border-top: 1px solid rgba(255, 255, 255, 0.75);
  border-left: 1px solid rgba(255, 255, 255, 0.75);
  border-radius: 30px;
  backdrop-filter: blur(4px);
  box-shadow: 5px 5px 10px #2c2a2a;
  height: 350px;
  width: 600px;
}
</style>