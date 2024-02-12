<template>
  <v-form @submit.prevent="login">
    <v-card class="card">
      <v-card-title class="text-center">
        <span class="text-h5 text-white ">Einloggen</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row class="d-flex justify-center" style="width: 100%">
            <v-col
                cols="12">
              <v-text-field v-model="email"
                            color="white"
                            label="Email"
                            required
                            style="color: white"
                            variant="underlined"
              ></v-text-field>
            </v-col>
            <v-col
                cols="12">
              <v-text-field
                  v-model="password"
                  :append-icon="show ?'mdi-eye':'mdi-eye-off'"
                  :type="show ?'text':'password'"
                  color="white"
                  label="Passwort"
                  name="password"
                  persistent-hint
                  required
                  style="color: white"
                  variant="underlined"
                  @click:append="show=!show">
              </v-text-field>
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
            color="white"
            type="submit"
            variant="text">
          Einloggen
        </v-btn>
        <v-btn
            color="white" variant="text" @click="$router.push('/')">
          Abbrechen
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
    show: false,
  }),

  components: {},
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
            }, {
              headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer" + localStorage.getItem('token'),
              }
            });
        await localStorage.setItem('token', response.data.token)
        this.$store.state.user = response.data.user
        location.reload()
      } catch (error) {

        if (error === 'AxiosError: Request failed with status code 401') {
          alert('Benutzername oder Passwort ist falsch.')
        }

        if (error !== 'AxiosError: Request failed with status code 401' && error != null) {
          alert('Einloggen ist momentan nicht möglich. Bitte wenden Sie sich an den Administrator.')
        }

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
  backdrop-filter: blur(10px);
  box-shadow: 5px 5px 10px #2c2a2a;
  height: 350px;
  width: 600px;
}
</style>