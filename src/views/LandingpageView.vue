<template>

  <div v-if="!$store.state.mobile" class="background">
    <p class="text-white">
    </p>
    <v-row class="ma-0 pa-0" style="width: 100%">
      <v-col cols="8">
        <HeaderComponent></HeaderComponent>
        <v-row class="justify-center mx-0 mt-16 pt-10" style="width: 100%">
          <v-col cols="10">
            <h1 class="text-white" style="font-size: 45px">
              Tier Gesundheitszentrum Andrea Bachem
            </h1>
          </v-col>
          <v-col cols="10">
            <h1 style="color: #0082c2">
              Ganzheitliche Therapie für die Gesundheit deines Tieres
            </h1>
          </v-col>
          <v-col cols="10">
            <p style="font-size: 18px; color: #dedddd">
              Bei uns steht die umfassende Gesundheit deines Tieres im Mittelpunkt.
              Wir bieten hochwertige Therapien, darunter Chiropraktik, Osteopathie,
              Physiotherapie und individuelle Ernährungsberatung. Vertraue uns, um das
              Wohlbefinden deines Lieblings zu fördern und ihm die beste Pflege zukommen zu lassen.
            </p>
          </v-col>
          <v-col cols="10">
            <v-dialog v-model="dialog" scrim="black" width="1200">
              <template v-slot:activator="{ props }">

                <v-btn style="background-color: #0082c2; color: #dedddd" v-bind="props">
                  Termin Vereinbaren
                </v-btn>
              </template>
              <v-card
                  class="mx-auto my-12 pa-5 dialogBackground"
                  style="background-color: rgb(205,205,205); box-shadow: 0 4px 8px 0 rgb(0,0,0), 0 6px 20px 0 rgb(0,0,0)"
                  width="1200">
                <v-row>
                  <v-col>
                    <v-row class="justify-center">
                      <v-col class="d-flex justify-center" cols="10">
                        <h1 class="line"> Termin Vereinbaren</h1>
                      </v-col>
                      <v-col class="d-flex justify-center mt-n3" cols="10">
                        <v-text-field v-model="name" label="Name" variant="underlined"/>
                      </v-col>
                      <v-col class="d-flex justify-center mt-n3" cols="10">
                        <v-text-field v-model="email" label="Email" variant="underlined"/>
                      </v-col>
                      <v-col class="d-flex justify-center mt-n3" cols="10">
                        <v-text-field v-model="telefonnummer" label="Telefonnummer" variant="underlined"/>
                      </v-col>
                      <v-col class="d-flex justify-center mt-n3" cols="10">
                        <v-textarea v-model="text" clearable counter
                                    label="Nachricht" no-resize style="color: black" variant="underlined"/>
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col class="align-center d-flex pr-16">
                    <v-row class="mt-10">
                      <v-col cols="8">
                        <div class="logo"/>
                      </v-col>
                      <v-col class=" pt-15" cols="12">
                        <h2 class="pt-10">Ihre Anliegen sind uns wichtig!</h2>
                        <br>
                        <p style="font-size: 16px">Zögern Sie nicht, unser
                          Kontaktformular
                          zu
                          nutzen,
                          um
                          mit
                          unserem Tiergesundheitszentrum in Verbindung zu treten und die bestmögliche Betreuung für
                          Ihr Haustier zu erhalten.
                        </p>
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col cols="12">
                    <v-row class="mt-10">
                      <v-col class="d-flex justify-center" cols="6">
                        <v-btn variant="text" @click="create">
                          Senden
                        </v-btn>
                      </v-col>
                      <v-col class="d-flex justify-center" cols="6">
                        <v-btn variant="text" @click="dialog = false">
                          Abbrechen
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </v-card>

            </v-dialog>
          </v-col>
        </v-row>

        <v-row class="justify-center mx-0 mt-10" style="width: 100%">
          <v-col class="d-flex justify-center mx-4  " cols="10">
            <v-row class="info mt-16 mx-0" style="width: 100%">
              <v-col class="d-flex justify-center align-center" cols="4">
                <v-row class="d-flex justify-center">
                  <div class="d-flex justify-center align-center"
                       style="border: 1px solid rgba(255,255,255,0.57); position: absolute;height: 45px; width: 45px ;left: 15%; top:-20px; background-color: #0082c2; border-radius: 100%">
                    <Icon icon="solar:phone-broken" style="font-size: 38px"/>
                  </div>
                  <v-col class="d-flex justify-center" cols="12">
                    <h2 style=" color: #ffffff">
                      Ruf mich an
                    </h2>

                  </v-col>
                  <v-col class="d-flex justify-center" cols="12">
                    <a href="tel:+4917806915915">
                      <h3 class=" mt-n4" style="color: #fdfcfc">
                        01786915915
                      </h3>
                    </a>
                  </v-col>
                </v-row>
              </v-col>
              <!--                <v-divider style="background-color: #fcf8f8; color: #fffdfd" vertical></v-divider>-->

              <v-col class="d-flex justify-center align-center" cols="4">
                <v-row class="d-flex justify-center">
                  <div class="d-flex justify-center align-center"
                       style="border: 1px solid rgba(255,255,255,0.57); position: absolute;height: 45px; width: 45px ;left: 48%; top:-20px; background-color: #0082c2; border-radius: 100%">
                    <Icon icon="ic:outline-mail" style="font-size: 38px"/>
                  </div>
                  <v-col class="d-flex justify-center" cols="12">
                    <h2 style="color: #fcf8f8">
                      Schreib mir eine Mail
                    </h2>

                  </v-col>
                  <v-col class="d-flex justify-center" cols="12">
                    <a href="mailto:andreabachem83@gmail.com" style="text-decoration: none" target="_blank">
                      <h3 class="mt-n4" style="color: #fcfbfb">
                        andreabachem83@gmail.com
                      </h3>
                    </a>

                  </v-col>
                </v-row>
              </v-col>
              <!--                <v-divider style="color: #faf7f7; background-color: #f8f8f8" vertical></v-divider>-->

              <v-col class="d-flex justify-center align-center" cols="4">
                <v-row class="d-flex justify-center">
                  <div class="d-flex justify-center align-center"
                       style="border: 1px solid rgba(255,255,255,0.57); position: absolute;height: 45px; width: 45px ;left: 81%; top:-20px; background-color: #0082c2; border-radius: 100%">
                    <Icon icon="ic:outline-place" style="font-size: 38px"/>
                  </div>
                  <v-col class="d-flex justify-center" cols="12">
                    <h2 style="color: #fafafa">
                      So findest du mich
                    </h2>
                  </v-col>
                  <v-col class="d-flex justify-center" cols="12">
                    <a href="https://www.google.de/maps/dir//Peter-May-Stra%C3%9Fe+47,+50374+Erftstadt/@50.8280411,6.7633927,13z/data=!3m1!4b1!4m9!4m8!1m0!1m5!1m1!1s0x47bf3d9b8e9b9ba3:0xf038ba0f5709dcf2!2m2!1d6.8046778!2d50.8280484!3e0?entry=ttu"
                       target="_blank">
                      <p class="text-center mt-n4" style="font-size: 14px; color: #fcfafa">
                        <b>
                          Peter-May-Straße 47 50374 Köttingen
                        </b>
                      </p>
                    </a>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

      </v-col>
      <v-col class="py-0" cols="4">

        <v-img alt="Bilder Kollage" src="../assets/kolage.webp"
               style="background-size: cover; height: 100vh;"></v-img>
      </v-col>
    </v-row>
    <div class="d-flex" style="position: absolute ; bottom: 10px">
      <router-link to="/impressum">
        <p class="mx-2 text-white link" style="cursor:pointer;">
          Impressum
        </p>
      </router-link>
      <p class="text-white">
        |
      </p>
      <router-link to="/verwaltung">
        <p class="mx-2 text-white link" style="cursor:pointer;">
          Verwaltung
        </p>
      </router-link>
      <p class="text-white">
        |
      </p>
      <router-link to="/datenschutz">
        <p class="mx-2 text-white link" style="cursor:pointer;">
          Datenschutz
        </p>
      </router-link>
      <router-link to="/Video">
        <Icon alt="Youtube Link" class="mx-3 mt-n4" icon="grommet-icons:youtube"
              style="cursor: pointer; font-size: 40px; color: red"/>
      </router-link>
      <a href="https://www.instagram.com/andreabachem?igsh=MTIxZTJxZHRvd2wxeg==" target="_blank">
        <Icon class="mx-3 mt-n4" icon="skill-icons:instagram" style="cursor: pointer; font-size: 40px"/>
        <p style="color: transparent">instagram</p>
      </a>
    </div>
  </div>

  <div v-if="$store.state.mobile" class="background">
    <div class="background-color-mobile">
      <HeaderComponent></HeaderComponent>
      <div class="mt-5 tab-card">

        <v-tabs
            v-model="$store.state.tab"
            align-tabs="center"
            center-active
            color="#0082c2"
            style="color: #c9c6c6"
        >

          <v-tab :value="0" class="">
            <router-link class="link" to="/" aria-label="Zur Startseite" >Home</router-link></v-tab>
          <v-tab :value="1" class="">
            <router-link class="link" aria-label="Preise"  to="/Preise">
            Preise
          </router-link></v-tab>
          <v-tab :value="2" class="">
            <router-link class="link" aria-label="Produkte"   to="/Produkt">
            Produkt
          </router-link></v-tab>
          <v-tab :value="3" class="">
            <router-link class="link" aria-label="Seminare"  to="/Seminare">
            Seminare
          </router-link></v-tab>
          <v-tab :value="4" class="">
            <router-link class="link" aria-label="Berichte"  to="/berichte">
            Berichte
          </router-link></v-tab>
          <v-tab :value="5" class="">
            <router-link aria-label="Chiropraktik" class="link" to="/Chiropraktik">
            Chiropraktik
          </router-link></v-tab>
          <v-tab :value="6" class="">
            <router-link class="link" aria-label="Osteopathie"  to="/Osteopathie">
            Osteopathie
          </router-link></v-tab>
          <v-tab :value="7" class="">
            <router-link class="link" aria-label="Physiotherapie"  to="/Physiotherapie">
            Physiotherapie
          </router-link></v-tab>
          <v-tab :value="8" class="">
            <router-link class="link" aria-label="Ernährung"  to="/Ernaehrung">
            Ernährung
          </router-link></v-tab>
          <v-tab :value="9" class="">Youtube</v-tab>
          <v-tab :value="10" class="">Impressum</v-tab>
          <v-tab :value="11" class="">Datenschutz</v-tab>
        </v-tabs>

        <v-window v-model="$store.state.tab">
          <v-window-item :value="0"
          >
            <v-container style="height: 80vh;  ">
              <v-row class="justify-center mx-0 mt-3" style="width: 100%">
                <v-col cols="11">
                  <h1 class="text-white" style="font-size: 25px">
                    Tier Gesundheitszentrum <br> Andrea Bachem
                  </h1>
                </v-col>
                <v-col cols="11">
                  <h1 style="color: #0082c2; font-size: 20px">
                    Ganzheitliche Therapie für die Gesundheit deines Tieres
                  </h1>
                </v-col>
                <v-col cols="11">
                  <h3 style="color: #dedddd; font-size: 15px">
                    Bei uns steht die umfassende Gesundheit deines Tieres im Mittelpunkt.
                    Wir bieten hochwertige Therapien, darunter Chiropraktik, Osteopathie,
                    Physiotherapie und individuelle Ernährungsberatung. Vertraue uns, um das
                    Wohlbefinden deines Lieblings zu fördern und ihm die beste Pflege zukommen zu lassen.
                  </h3>
                </v-col>
                <v-col cols="11">
                  <v-dialog v-model="dialog" scrim="black" width="1200">
                    <template v-slot:activator="{ props }">

                      <v-btn style="background-color: #0082c2; color: #dedddd" v-bind="props">
                        Termin Vereinbaren
                      </v-btn>
                    </template>
                    <v-card
                        class="mx-auto my-12 pa-5 dialogBackground"
                        style="background-color: rgb(205,205,205); box-shadow: 0 4px 8px 0 rgb(0,0,0), 0 6px 20px 0 rgb(0,0,0)"
                        width="350">
                      <v-row>
                        <v-col>
                          <v-row class="justify-center">
                            <v-col class="d-flex justify-center" cols="10">
                              <h1 class="line"> Termin Vereinbaren</h1>
                            </v-col>
                            <v-col class="d-flex justify-center mt-n8" cols="10">
                              <v-text-field v-model="name" label="Name" variant="underlined"/>
                            </v-col>
                            <v-col class="d-flex justify-center mt-n8" cols="10">
                              <v-text-field v-model="email" label="Email" variant="underlined"/>
                            </v-col>
                            <v-col class="d-flex justify-center mt-n8" cols="10">
                              <v-text-field v-model="telefonnummer" label="Telefonnummer" variant="underlined"/>
                            </v-col>
                            <v-col class="d-flex justify-center mt-n8" cols="10">
                              <v-textarea v-model="text" clearable counter
                                          label="Nachricht" no-resize style="color: black" variant="underlined"/>
                            </v-col>
                          </v-row>
                        </v-col>

                        <v-col cols="12">
                          <v-row class="mt-n10">
                            <v-col class="d-flex justify-center" cols="6">
                              <v-btn variant="text" @click="create">
                                Senden
                              </v-btn>
                            </v-col>
                            <v-col class="d-flex justify-center" cols="6">
                              <v-btn variant="text" @click="dialog = false">
                                Abbrechen
                              </v-btn>
                            </v-col>
                          </v-row>
                        </v-col>
                      </v-row>
                    </v-card>

                  </v-dialog>
                </v-col>
              </v-row>
              <v-row class="d-flex justify-center   mt-16" style="">
                <v-col class="d-flex justify-center" cols="3">

                  <div class="d-flex justify-center"
                       style="border: 2px solid rgba(255,255,255,0.57); height: 45px; width: 45px ; background-color: #0082c2; border-radius: 100%">
                    <a href="tel:+4917806915915">

                      <Icon icon="solar:phone-broken" style="font-size: 38px; margin-top: 2px; margin-left: 2px "/>
                    </a>
                  </div>
                </v-col>


                <v-col class="d-flex justify-center align-center" cols="3">

                  <div class="d-flex justify-center align-center"
                       style="border: 2px solid rgba(255,255,255,0.57); height: 45px; width: 45px ; background-color: #0082c2; border-radius: 100%">
                    <a href="mailto:andreabachem83@gmail.com">
                      <Icon icon="ic:outline-mail" style="font-size: 38px; margin-top: 7px;  "/>

                    </a>
                  </div>
                </v-col>

                <v-col class="d-flex justify-center align-center" cols="3">

                  <div class="d-flex justify-center align-center"
                       style="border: 2px solid rgba(255,255,255,0.57);height: 45px; width: 45px ; background-color: #0082c2; border-radius: 100%">
                    <a href="https://www.google.de/maps/dir//Peter-May-Stra%C3%9Fe+47,+50374+Erftstadt/@50.8280411,6.7633927,13z/data=!3m1!4b1!4m9!4m8!1m0!1m5!1m1!1s0x47bf3d9b8e9b9ba3:0xf038ba0f5709dcf2!2m2!1d6.8046778!2d50.8280484!3e0?entry=ttu"
                       target="_blank">

                      <Icon icon="ic:outline-place" style="font-size: 38px;  margin-top: 7px;"/>
                    </a>
                  </div>
                </v-col>
              </v-row>

            </v-container>
          </v-window-item>

          <v-window-item :value="1">
            <v-container style="height: 80vh;padding-bottom:200px ;  overflow: scroll">
              <h2 class="line text-white text-center"> Meine Preise und Leistungen</h2>
              <v-row class="mx-auto mt-n6" style="width: 100%;">
                <v-col v-for="preis in preiseArray" :key="preis.id" class="d-flex justify-center"
                       style="max-height: 530px">
                  <v-card
                      class="my-12"
                      height="500"
                      style="background-color: rgb(238,235,235); backdrop-filter: blur(4px);box-shadow: 1px 1px 5px black "
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
                        :src="preis.bild"
                        cover="true"
                        style="width: 100%; max-height: 180px"
                    ></v-img>

                    <v-card-title>{{ preis.ueberschrift }}</v-card-title>

                    <v-card-text>
                      <div class="my-2 text-subtitle-1">
                        {{ preis.preis }} €
                      </div>

                      <div>
                        <p style="color: black">
                          {{ preis.text }}

                        </p>

                      </div>
                    </v-card-text>

                    <v-divider class="mx-4"></v-divider>
                    <v-row class="ma-0" style="width: 100%">
                      <v-card-title>Dauer:</v-card-title>

                      <v-card-text>
                        <v-chip-group
                            v-model="selection"
                            active-class="deep-purple accent-4 white--text"

                        >
                          <v-chip>{{ preis.dauer }}</v-chip>

                        </v-chip-group>
                      </v-card-text>

                    </v-row>

                    <v-card-actions>
                      <v-dialog scrim="black" width="1200">
                        <template v-slot:activator="{ props }">
                          <div class="d-flex justify-center" style="width: 100%">
                            <v-btn style="background-color: #0082c2; color: #dedddd" v-bind="props">
                              Termin Vereinbaren
                            </v-btn>
                          </div>
                        </template>
                        <template v-slot:default="{ isActive }">
                          <v-card
                              class="mx-auto my-12 pa-5 dialogBackground"
                              style="background-color: rgb(205,205,205); box-shadow: 0 4px 8px 0 rgb(0,0,0), 0 6px 20px 0 rgb(0,0,0)"
                              width="1200">
                            <v-row>
                              <v-col>
                                <v-row class="justify-center">
                                  <v-col class="d-flex justify-center" cols="10">
                                    <h1 class="line"> Termin Vereinbaren</h1>
                                  </v-col>
                                  <v-col class="d-flex justify-center mt-n3" cols="10">
                                    <v-text-field v-model="name" label="Name" variant="outlined"/>
                                  </v-col>
                                  <v-col class="d-flex justify-center mt-n3" cols="10">
                                    <v-text-field v-model="email" label="Email" variant="outlined"/>
                                  </v-col>
                                  <v-col class="d-flex justify-center mt-n3" cols="10">
                                    <v-text-field v-model="telefonnummer" label="Telefonnummer" variant="outlined"/>
                                  </v-col>
                                  <v-col class="d-flex justify-center mt-n3" cols="10">
                                    <v-textarea v-model="text" clearable
                                                counter label="Nachricht" no-resize variant="outlined"/>
                                  </v-col>
                                </v-row>
                              </v-col>
                              <v-col class="align-center d-flex">
                                <v-row class="mt-10 justify-center">
                                  <v-col class="justify-center d-flex" cols="10">
                                    <div class="logo"/>
                                  </v-col>
                                  <v-col class="pa-10 pt-15" cols="12">
                                    <h3 class="pt-10">Ihre Anliegen sind uns wichtig!</h3>
                                    <br>
                                    <p style="font-size: 17px !important">Zögern Sie nicht, unser
                                      Kontaktformular
                                      zu
                                      nutzen,
                                      um
                                      mit
                                      unserem Tiergesundheitszentrum in Verbindung zu treten und die bestmögliche
                                      Betreuung für
                                      Ihr Haustier zu erhalten.
                                    </p>
                                  </v-col>
                                </v-row>
                              </v-col>
                              <v-col cols="12">
                                <v-row class="mt-10">
                                  <v-col class="d-flex justify-center" cols="6">
                                    <v-btn variant="text" @click="create">
                                      Senden
                                    </v-btn>
                                  </v-col>
                                  <v-col class="d-flex justify-center" cols="6">
                                    <v-btn variant="text" @click="isActive.value = false">
                                      Abbrechen
                                    </v-btn>
                                  </v-col>
                                </v-row>
                              </v-col>
                            </v-row>
                          </v-card>
                        </template>
                      </v-dialog>
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>


            </v-container>
          </v-window-item>

          <v-window-item :value="2">
            <v-container style="height: 80vh;padding-bottom:200px ;  overflow: scroll">
              <h2 class="line text-white text-center"> Meine Produkte</h2>
              <v-row class="mx-auto mt-2" style="width: 100%;">
                <v-col v-for="preis in produkteArray" :key="preis.id" style="max-height: 530px">
                  <v-card
                      :loading="loading"
                      class="mx-auto mt-5"
                      height="500"
                      style="background-color: rgba(229,227,227,0.98); backdrop-filter: blur(4px);box-shadow: 1px 1px 5px black "
                      width="330"
                  >
                    <v-img
                        :src="preis.bild"
                        cover="true"
                        style="width: 340px; height: 340px"
                    ></v-img>
                    <v-card-title>{{ preis.ueberschrift }}</v-card-title>
                    <v-card-text>
                      <div>
                        {{ preis.text }}
                      </div>
                    </v-card-text>
                    <div class="py-2 px-4"
                         style="background-color: rgba(0,130,194,0.71);width: 100%; height: 40px;position: absolute; bottom: 0px ">
                      <a :href="preis.link" style="text-decoration: none" target="_blank">
                        <div class="d-flex justify-lg-space-between">
                          <h4 class="text-white">Zum Produkt</h4>
                          <Icon class="mt-n1 text-white" icon="eva:arrow-right-fill" style="font-size: 35px"/>
                        </div>
                      </a>
                    </div>
                  </v-card>
                </v-col>
              </v-row>


            </v-container>
          </v-window-item>
          <v-window-item :value="3">
            <v-container style="height: 80vh;padding-bottom:200px ;  overflow: scroll">
              <h2 class="line text-white text-center"> Meine Seminare</h2>

              <v-row class="mx-auto mt-2" style="width: 100%;">
                <v-col v-for="seminar in seminarArray" :key="seminar.id">
                  <v-card
                      :loading="loading"
                      class="mx-auto mt-6 "
                      style="background-color: rgb(232,232,232); backdrop-filter: blur(4px);box-shadow: 1px 1px 5px black "
                      width="330"
                  >
                    <template>
                      <v-progress-linear
                          color="deep-purple"
                          height="10"
                          indeterminate
                      ></v-progress-linear>
                    </template>

                    <div style="background-color: rgba(0,130,194,0.74)">
                      <v-card-title class="text-white">{{ seminar.ueberschrift }}</v-card-title>

                    </div>

                    <v-card-text>
                      <div class="my-2 text-subtitle-1">
                        {{ seminar.preis }} €
                      </div>

                      <div v-html="seminar.text"/>
                    </v-card-text>

                    <v-divider class="mx-4"></v-divider>
                    <v-row class="ma-0 px-2" style="width: 100%">
                      <h3 class="mt-6">Datum:</h3>

                      <v-card-text>
                        <v-chip-group
                            v-model="selection"
                            active-class="deep-purple accent-4 white--text"

                        >
                          <v-chip>{{ seminar.vonDatum }}</v-chip>
                          <h3 class="mt-2">-</h3> &nbsp;
                          <v-chip>{{ seminar.bisDatum }}</v-chip>

                        </v-chip-group>
                      </v-card-text>

                    </v-row>
                    <v-row class="ma-0 mt-n5 px-2" style="width: 100%">
                      <h3 class="mt-6">Uhrzeit:</h3>

                      <v-card-text>
                        <v-chip-group
                            v-model="selection"
                            active-class="deep-purple accent-4 white--text"

                        >
                          <v-chip>{{ seminar.vonZeit }} Uhr</v-chip>
                          <h3 class="mt-2">-</h3> &nbsp;
                          <v-chip>{{ seminar.bisZeit }} Uhr</v-chip>

                        </v-chip-group>
                      </v-card-text>

                    </v-row>
                    <v-row class="ma-0" style="width: 100%;">
                      <v-col class="mt-n4" cols="3">
                        <h4>Straße:</h4>
                      </v-col>
                      <v-col class="mt-n4" cols="7">
                        <p style="font-size: 14px ">{{ seminar.straße }}</p>
                      </v-col>
                      <v-col class="mt-n4" cols="3">
                        <h4>PLZ:</h4>
                      </v-col>
                      <v-col class="mt-n4" cols="7">
                        <p style="font-size: 14px ">{{ seminar.plz }}</p>
                      </v-col>
                      <v-col class="mt-n4" cols="3">
                        <h4>Ort:</h4>
                      </v-col>
                      <v-col class="mt-n4" cols="7">
                        <p style="font-size: 14px ">{{ seminar.ort }}</p>
                      </v-col>


                    </v-row>

                    <v-card-actions>
                      <v-dialog v-model="dialog" scrim="black" width="1200">
                        <template v-slot:activator="{ props }">
                          <div class="d-flex justify-center" style="width: 100%">
                            <v-btn style="background-color: #0082c2; color: #dedddd" v-bind="props">
                              Termin Vereinbaren
                            </v-btn>

                          </div>
                        </template>
                        <v-card
                            class="mx-auto my-12 pa-5 dialogBackground"
                            style="background-color: rgb(205,205,205); box-shadow: 0 4px 8px 0 rgb(0,0,0), 0 6px 20px 0 rgb(0,0,0)"
                            width="350">
                          <v-row>
                            <v-col>
                              <v-row class="justify-center">
                                <v-col class="d-flex justify-center" cols="10">
                                  <h1 class="line"> Termin Vereinbaren</h1>
                                </v-col>
                                <v-col class="d-flex justify-center mt-n8" cols="10">
                                  <v-text-field v-model="name" label="Name" variant="underlined"/>
                                </v-col>
                                <v-col class="d-flex justify-center mt-n8" cols="10">
                                  <v-text-field v-model="email" label="Email" variant="underlined"/>
                                </v-col>
                                <v-col class="d-flex justify-center mt-n8" cols="10">
                                  <v-text-field v-model="telefonnummer" label="Telefonnummer" variant="underlined"/>
                                </v-col>
                                <v-col class="d-flex justify-center mt-n8" cols="10">
                                  <v-textarea v-model="text" clearable counter
                                              label="Nachricht" no-resize style="color: black" variant="underlined"/>
                                </v-col>
                              </v-row>
                            </v-col>

                            <v-col cols="12">
                              <v-row class="mt-n10">
                                <v-col class="d-flex justify-center" cols="6">
                                  <v-btn variant="text" @click="create">
                                    Senden
                                  </v-btn>
                                </v-col>
                                <v-col class="d-flex justify-center" cols="6">
                                  <v-btn variant="text" @click="dialog = false">
                                    Abbrechen
                                  </v-btn>
                                </v-col>
                              </v-row>
                            </v-col>
                          </v-row>
                        </v-card>

                      </v-dialog>
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>

            </v-container>
          </v-window-item>
          <v-window-item :value="4">
            <v-container style="height: 80vh;padding-bottom:200px ;  overflow: scroll">
              <h2 class="line text-white text-center"> Meine Berichte</h2>

              <v-row class="mx-auto justify-center mt-6 " style="width: 100%;">
                <v-col v-for="bericht in reverseBerichte" :key="bericht.id" cols="11" style="height: 100%">

                  <div class="container1">
                    <div class="image">
                      <v-img :src="bericht.bild" alt="Beschreibung des Bildes " cover height="150px"
                             width="150px"></v-img>
                    </div>
                    <h3> {{ bericht.ueberschrift }}</h3>

                    <h4 style="color: grey">
                      Autor: {{ bericht.autor }}
                    </h4>
                    <h4 style="color: grey">
                      Erschienen am: {{ bericht.datum }}
                    </h4>

                    <br>

                    <p class="text" v-html="bericht.text"/>

                  </div>


                </v-col>

              </v-row>

            </v-container>
          </v-window-item>
          <v-window-item :value="5">
            <v-container class="d-flex justify-center" style="overflow: scroll; padding-bottom:200px ">
              <v-row class="mt-5 d-flex justify-center" style="width: 100%;">
                <v-col class="d-flex justify-center" cols="12">
                  <v-card class="buchBG pa-3" style=" overflow: scroll; height: 70vh; width: 90%">
                    <h2 class="line">Chiropraktik</h2>
                    <br>
                    <p>
                      Die Chiropraktik beim Tier ist eine effektive und ganzheitliche Therapiemode, die darauf abzielt,
                      die Gesundheit und das Wohlbefinden des Tieres durch die Korrektur von Wirbelsäulen- und
                      Gelenkproblemen zu verbessern. Durch sanfte, präzise chiropraktische Justierungen werden Blockaden
                      und Fehlstellungen im Körper des Tieres gelöst, wodurch die natürliche Balance und Funktion
                      wiederhergestellt werden.
                      Die Wirkung der Chiropraktik beruht auf der Tatsache, dass das Nervensystem eine zentrale Rolle
                      bei der Steuerung aller Körperfunktionen spielt. Durch Wirbelsäulen- und Gelenkfehlstellungen
                      können Nervenimpulse blockiert oder gestört werden, was zu Schmerzen, Bewegungseinschränkungen und
                      verschiedenen gesundheitlichen Problemen führen kann. Durch chiropraktische Justierungen werden
                      diese Blockaden entfernt, wodurch die Kommunikation zwischen Gehirn, Nerven und Organen verbessert
                      wird.
                      Die Chiropraktik beim Tier kann bei einer Vielzahl von Beschwerden wie Rückenschmerzen,
                      Gelenkproblemen, Muskelschwäche, Verdauungsstörungen und sogar Verhaltensproblemen wirksam sein.
                      Sie eignet sich sowohl zur Schmerzlinderung als auch zur Verbesserung der Beweglichkeit und
                      Koordination. Chiropraktische Behandlungen sind in der Regel schmerzfrei und können bei Tieren
                      aller Altersgruppen und Rassen angewendet werden.
                      Die Wirksamkeit der Chiropraktik beruht auf ihrer ganzheitlichen Herangehensweise, bei der nicht
                      nur die Symptome behandelt werden, sondern auch die zugrunde liegenden Ursachen. Indem
                      Ungleichgewichte im Körper korrigiert werden, wird die Selbstheilungskraft des Tieres stimuliert
                      und dessen Gesundheit und Wohlbefinden auf natürliche Art und Weise gefördert. Es ist jedoch
                      wichtig, einen zertifizierten und erfahrenen Tierchiropraktiker zu konsultieren, um die beste
                      Betreuung für Ihr Tier zu gewährleisten.
                    </p>
                    <br>
                    <p> Ich bin ausgebildet und geprüfte Chiropraktikerin bei der ATM
                    </p>
                    <v-row class=" ma-0 " style="width: 100%;">
                      <v-col cols="2">
                        <div class="chirosiegel"></div>

                      </v-col>
                    </v-row>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-window-item>
          <v-window-item :value="6">
            <v-container class="d-flex justify-center" style="overflow: scroll; padding-bottom:200px ">
              <v-row class="mt-5 d-flex justify-center" style="width: 100%;">
                <v-col class="d-flex justify-center" cols="12">
                  <v-card class="buchBG pa-3" style="overflow: scroll; height: 70vh; width: 90%">
                    <h2 class="line">Osteopathie</h2>
                    <br>
                    <p>
                      Osteopathie beim Tier ist eine sanfte und ganzheitliche Therapiemethode,
                      die darauf abzielt, die körpereigene Selbstheilungskraft zu aktivieren.
                      Durch manuelle Techniken werden Blockaden, Verspannungen und Dysfunktionen
                      im Bewegungsapparat des Tieres gelöst, wodurch Schmerzen gelindert und die Mobilität
                      verbessert werden können. Die Osteopathie betrachtet den Körper als Einheit aus Struktur,
                      Funktion und Energie, und behandelt somit nicht nur Symptome, sondern auch die Ursache des
                      Problems.
                      Sie kann bei verschiedenen Beschwerden wie muskulären Verspannungen, Gelenkproblemen,
                      Verdauungsstörungen
                      oder Verhaltensauffälligkeiten angewendet werden. Die osteopathische Behandlung ist in der Regel
                      schmerzfrei
                      und für Tiere aller Altersgruppen geeignet. Sie kann eine wertvolle Ergänzung zur Schulmedizin
                      sein und dazu beitragen,
                      die Gesundheit und das Wohlbefinden Ihres Tieres auf natürliche Weise zu fördern.
                    </p>

                    <v-row class="mt-6 ma-0 " style="width: 90%;">
                      <v-col cols="2">
                        <div class="chirosiegel1"></div>

                      </v-col>
                    </v-row>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-window-item>
          <v-window-item :value="7">
            <v-container class="d-flex justify-center" style="overflow: scroll; padding-bottom:200px ">
              <v-row class="mt-5      d-flex justify-center" style="width: 100%;">
                <v-col class="d-flex justify-center" cols="12">
                  <v-card class="buchBG pa-3" style="overflow: scroll; height: 70vh; width: 90%">
                    <h2 class="line">Physiotherapie</h2>
                    <br>
                    <p>
                      Physiotherapie beim Tier ist eine wichtige Therapiemethode, die darauf abzielt, die Funktion und
                      Beweglichkeit des Tieres wiederherzustellen, zu verbessern oder zu erhalten. Als ausgebildeter und
                      geprüfter Physiotherapeut für Tiere erfasse ich die individuellen Bedürfnisse jedes Tieres, um ein
                      maßgeschneidertes Behandlungsprogramm zu erstellen.
                      Die Hauptaufgabe der Physiotherapie ist es, die körperliche Rehabilitation und die
                      Schmerzlinderung zu fördern. Durch verschiedene Behandlungstechniken wie Massage, manuelle
                      Therapie, passive Bewegung, Dehnung und Übungen werden Schmerzen reduziert, Muskelverspannungen
                      gelöst und die Gelenkfunktion verbessert.
                      Die Physiotherapie kann bei verschiedenen Problemen eingesetzt werden, z.B. nach Verletzungen,
                      Operationen oder bei chronischen Erkrankungen. Sie hilft auch, altersbedingte Probleme wie
                      Arthritis oder Wirbelsäulenprobleme zu bewältigen. Das Ziel ist es, die Mobilität zu verbessern,
                      die Muskelfunktion zu stärken und die Lebensqualität des Tieres zu steigern.
                      Ein weiterer Schwerpunkt der Physiotherapie liegt auf der Prävention von Verletzungen und
                      Erkrankungen. Durch gezieltes Training, Aufbau von Muskelkraft und Verbesserung der Balance wird
                      die Belastbarkeit des Tieres erhöht, bevor es zu Problemen kommt.
                      Die Physiotherapie beim Tier kann als eigenständige Therapieform oder in Kombination mit anderen
                      Behandlungsmethoden wie Osteopathie oder Akupunktur eingesetzt werden. Wichtig ist eine
                      ganzheitliche Betrachtung des Tieres und eine enge Zusammenarbeit mit dem Tierbesitzer und anderen
                      Fachleuten, um die bestmögliche Betreuung zu gewährleisten.
                      Meine Qualifikation als ausgebildeter und geprüfter Physiotherapeut für Tiere stellt sicher, dass
                      Ihr Tier die bestmögliche Versorgung erhält. Ich stehe Ihnen gerne zur Verfügung, um gemeinsam das
                      Behandlungsprogramm zu entwickeln, das den individuellen Bedürfnissen Ihres Tieres am besten
                      entspricht.
                    </p>

                    <v-row class="ma-0 mt-4" style="width: 90%;">
                      <v-col cols="2">
                        <div class="chirosiegel2"></div>

                      </v-col>
                    </v-row>
                  </v-card>

                </v-col>
              </v-row>
            </v-container>
          </v-window-item>
          <v-window-item :value="8">
            <v-container class="d-flex justify-center" style="overflow: scroll; padding-bottom:200px ">
              <v-row class="mt-5 d-flex justify-center" style="width: 100%;">
                <v-col class="d-flex justify-center" cols="12">
                  <v-card class="buchBG pa-7" style="overflow: scroll; height: 70vh; width: 90%">
                    <h2 class="line">Ernährung</h2>
                    <br>
                    <h4 class="line">

                      Die Bedeutung der natürlichen Ernährung für Tiere
                    </h4>

                    <p class="mt-1">
                      Gesundheit ist von entscheidender Bedeutung, aber sie beginnt nicht nur mit äußerlichen Faktoren.
                      Auch bei Tieren ist eine gesunde Ernährung der Grundstein für ein vitales und glückliches Leben.
                      Leider können Allergien, Gelenkserkrankungen und sogar Kotwasser bei Pferden durch eine falsche
                      Ernährung verursacht werden. Daher ist es von großer Bedeutung, sich mit diesem Thema genauer
                      auseinanderzusetzen und Lösungen zu finden.
                    </p>
                    <br>
                    <h4 class="line">

                      Allergien durch falsche Fütterung
                    </h4>
                    <p class="mt-1">
                      Eine falsche Ernährung kann bei Tieren zu allergischen Reaktionen führen. Unausgewogene Nahrung,
                      zu viele künstliche Zusatzstoffe oder bestimmte Inhaltsstoffe können zu Sensibilisierungen führen.
                      Dies kann sich in Symptomen wie Juckreiz, Hautrötungen, Durchfall oder Erbrechen äußern. Um
                      Allergien zu vermeiden, ist eine natürliche und ausgewogene Ernährung, die den individuellen
                      Bedürfnissen des Tieres entspricht, unerlässlich.

                    </p>
                    <br>
                    <h4 class="line">

                      Gelenkserkrankungen und Wirbelblockaden durch Magen-Darm-Probleme

                    </h4>
                    <p class="mt-1">

                      Eine unzureichende Ernährung kann auch zu wiederkehrenden Gelenkserkrankungen und Wirbelblockaden
                      führen. Durch falsches Futter fehlen wichtige Nährstoffe, die für den Erhalt der Gelenkgesundheit
                      und den reibungslosen Bewegungsablauf benötigt werden. Magen-Darm-Erkrankungen können zu
                      Entzündungen führen, die wiederum die Gelenke und Wirbelsäule beeinflussen können. Durch gezielte
                      Untersuchungen mit einem Labor können mögliche Zusammenhänge zwischen der Ernährung und solchen
                      gesundheitlichen Problemen identifiziert werden.
                    </p>
                    <br>

                    <h4 class="line">
                      Kotwasser bei Pferden und mögliche ernährungsbedingte Ursachen

                    </h4>
                    <p class="mt-1">
                      Kotwasser bei Pferden ist ein häufiges Problem, das oft mit der Ernährung in Verbindung gebracht
                      wird. Ein Mangel an Ballaststoffen oder eine zu hohe Zufuhr von Stärke und Zucker kann die
                      Darmflora negativ beeinflussen und zu Verdauungsstörungen führen. Eine angepasste
                      Futterzusammensetzung, die auf den individuellen Bedarf des Pferdes abgestimmt ist, kann dazu
                      beitragen, Kotwasser zu reduzieren und die Darmgesundheit zu verbessern.

                    </p>
                    <br>
                    <h4 class="line">
                      Fazit:

                    </h4>
                    <p class="mt-1">
                      Eine artgerechte und ausgewogene Ernährung ist von großer Bedeutung, um Gesundheitsprobleme wie
                      Allergien, Gelenkserkrankungen und Kotwasser bei Tieren zu vermeiden. Untersuchungen mit einem
                      Labor können helfen, mögliche ernährungsbedingte Ursachen zu identifizieren. Sorgen wir mit einer
                      bewussten und auf die individuellen Bedürfnisse abgestimmten Ernährung für das Wohlbefinden
                      unserer tierischen Begleiter und geben ihnen die beste Chance auf ein gesundes und glückliches
                      Leben.

                    </p>

                    <br>

                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-window-item>
          <v-window-item :value="9">
            <div style="padding-bottom: 400px; overflow-y: scroll; height: 100vh">
              <h2 class="line text-white text-center mt-2"> Meine Videos</h2>
              <v-row class="justify-center mx-0 mt-6" style="width: 100%;">
                <v-col v-for="video in videoArray" :key="video.id" class="d-flex justify-center" cols="12">
                  <v-card
                      class="ma-3"
                      style="backdrop-filter: blur(4px); background-color: rgba(222,221,221,0.48); box-shadow: 2px 2px 5px black; height: auto; width: 390px">
                    <v-card-title>{{ video.text }}</v-card-title>
                    <div>
                      <vue-plyr
                      >
                        <div

                            :data-plyr-embed-id="video.url"
                            data-plyr-provider="youtube"
                        >
                        </div>
                      </vue-plyr>
                    </div>
                  </v-card>

                </v-col>
              </v-row>

            </div>
          </v-window-item>
          <v-window-item :value="10">
            <v-container class="d-flex justify-center" style="overflow: scroll; padding-bottom:200px ">
              <div class="background-impressum" style="overflow: scroll; width: 100%; height: 70vh; ">
                <v-row class="mx-0" style="width: 100%">
                  <v-col cols="12">
                    <v-row class="mx-0" style="width: 100%">
                      <v-col class="mt-10" cols="12">
                        <h3 class="line">
                          Impressum Tier-Gesundheitszentrum Andrea Bachem
                        </h3>
                      </v-col>

                      <v-col cols="12">
                        <p>
                          Ein Hinweis aufgrund des Heilmittelwerbegesetzes:<br>
                          Grundsätzlich soll bei den aufgeführten Therapien nicht der Eindruck erweckt werden, dass
                          diesen ein
                          Heilversprechen zugrunde liegt. Ebenso wenig kann aus den Ausführungen abgeleitet werden, dass
                          Linderung
                          oder Verbesserung eines Krankheitszustandes garantiert oder versprochen werden. Homöopathie
                          und
                          Magnetfeldtherapie werden schulmedizinisch nicht anerkannt.
                        </p>
                      </v-col>

                      <v-col cols="12">
                        <p>
                          Die hier bereitgestellten Inhalte sind mit größter Sorgfalt recherchiert. Dennoch kann keine
                          Gewähr für
                          deren Richtigkeit übernommen werden. Die Benutzung erfolgt ausschließlich auf eigenes Risiko.
                        </p>
                      </v-col>

                      <v-col cols="12">
                        <p>Andrea Bachem<br>
                          Tier-Gesundheitszentrum<br>
                          Peter-May-straße 47<br>
                          50374 Köttingen<br>
                          Telefon 01786915915<br>
                          St-Nr.203/5008/2253</p>
                      </v-col>

                      <v-col cols="12">
                        <h3 class="line">Website created by</h3>
                      </v-col>

                      <v-col cols="12">
                        <p>
                          <a href="https://www.franke-arts.de" target="_blank">Stefan Franke</a>
                          <br>
                          <a href="https://www.leandro-graf.de" target="_blank">Leandro Graf</a>
                        </p>
                      </v-col>

                      <v-col cols="12">
                        <h3 class="line">Streitschlichtung</h3>
                      </v-col>

                      <v-col cols="12">
                        <p>
                          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a
                            href="https://ec.europa.eu/consumers/odr"
                            target="_blank">https://ec.europa.eu/consumers/odr</a>.<br>
                          Unsere E-Mail-Adresse finden Sie oben im Impressum.<br>
                          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                          Verbraucherschlichtungsstelle teilzunehmen.
                        </p>
                      </v-col>

                      <v-col cols="12">
                        <h3 class="line">Haftung für Inhalte</h3>
                      </v-col>

                      <v-col cols="12">
                        <p>
                          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
                          allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch
                          nicht
                          verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach
                          Umständen zu
                          forschen, die auf eine rechtswidrige Tätigkeit hinweisen.<br>
                          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
                          allgemeinen Gesetzen
                          bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
                          Kenntnis
                          einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
                          Rechtsverletzungen werden
                          wir diese Inhalte umgehend entfernen.
                        </p>
                      </v-col>

                      <v-col cols="12">
                        <h3 class="line">Haftung für Links</h3>
                      </v-col>


                      <v-col cols="12">
                        <p>
                          Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
                          Einfluss haben.
                          Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
                          verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                          Die
                          verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
                          Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.<br>
                          Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
                          Anhaltspunkte einer
                          Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige
                          Links
                          umgehend entfernen.
                        </p>
                      </v-col>

                      <v-col cols="12">
                        <h3 class="line">Urheberrecht</h3>
                      </v-col>

                      <v-col cols="12">
                        <p>
                          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
                          deutschen
                          Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung
                          außerhalb der
                          Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw.
                          Erstellers.
                          Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch
                          gestattet.<br>
                          Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die
                          Urheberrechte
                          Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
                          trotzdem
                          auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden
                          Hinweis. Bei
                          Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                        </p>
                      </v-col>
                    </v-row>

                  </v-col>
                </v-row>
              </div>
            </v-container>
          </v-window-item>
          <v-window-item :value="11">
            <v-container class="d-flex justify-center" style="overflow: scroll; padding-bottom:200px ">
              <div class="background-impressum" style="overflow-y: scroll; width: 100%; height: 70vh; ">
                <v-row class="justify-center mx-0" style="width: 100%">
                  <v-col cols="12">
                    <v-row class="mx-0" style="width: 100%">
                      <v-col class="d-flex" cols="12">
                        <h3 class="line mt-8">
                          Datenschutz Praxis Andrea Bachem Tiergesundheit
                        </h3>
                      </v-col>
                      <v-col cols="12">
                        <p class="">
                          Wir legen großen Wert auf den Schutz der Privatsphäre unserer Kunden sowie die
                          Vertraulichkeit der von
                          ihnen bereitgestellten Daten. Diese Datenschutzerklärung erläutert, wie wir personenbezogene
                          Informationen
                          erfassen, verwenden, offenlegen und schützen, insbesondere in Bezug auf die Zusammenarbeit mit
                          anderen
                          Therapeuten und Tierärzten. Bitte lesen Sie die folgenden Informationen sorgfältig durch.
                        </p>
                      </v-col>

                      <v-col cols="12">
                        <h3 class="line"> 1. Datenerfassung und -verwendung</h3>
                      </v-col>

                      <v-col cols="12">
                        <p>
                          In unserer Praxis erheben und verarbeiten wir personenbezogene Daten nur in dem Umfang,
                          der zur
                          Erbringung unserer Dienstleistungen notwendig ist. Dies umfasst Informationen über das Tier,
                          den
                          Besitzer
                          und gegebenenfalls relevante medizinische Informationen. Diese Daten werden streng vertraulich
                          behandelt
                          und nur für den vorgesehenen Zweck verwendet.
                        </p>
                      </v-col>

                      <v-col cols="12">
                        <h3 class="line text-left"> 2. Zusammenarbeit mit anderen Therapeuten und
                          Tierärzten</h3>
                      </v-col>

                      <v-col cols="12">
                        <p>
                          Wir sind bestrebt, das Wohl des Tieres sicherzustellen. Daher kann es in einigen Fällen
                          erforderlich
                          sein, uns mit anderen Therapeuten und Tierärzten abzustimmen, um eine bestmögliche Behandlung
                          zu
                          gewährleisten. In solchen Fällen behalten wir uns das Recht vor, relevante Informationen über
                          das Tier
                          und
                          seine medizinische Geschichte im Rahmen dieser Zusammenarbeit weiterzugeben. Es wird darauf
                          geachtet,
                          dass
                          keine persönlichen Daten des Besitzers offengelegt werden, sofern dies nicht ausdrücklich
                          gewünscht
                          wird.
                        </p>
                      </v-col>

                      <v-col cols="12">
                        <h3 class="line text-left"> 3. Einwilligung und Information der Besitzer</h3>
                      </v-col>

                      <v-col cols="12">
                        <p>
                          Wir respektieren die Privatsphäre unserer Kunden und geben keine persönlichen Daten
                          ohne Zustimmung
                          weiter. Falls wir die Zustimmung zur Weitergabe von Informationen benötigen, werden wir den
                          Besitzer
                          zuvor
                          kontaktieren und die Zustimmung explizit einholen.
                        </p>
                      </v-col>

                      <v-col cols="12">
                        <h3 class="line text-left"> 4. Datensicherheit</h3>
                      </v-col>

                      <v-col cols="12">
                        <p>
                          Wir treffen angemessene technische und organisatorische Maßnahmen, um die Sicherheit
                          personenbezogener
                          Daten zu gewährleisten. Wir verwenden geeignete Sicherheitsvorkehrungen, um unberechtigten
                          Zugriff,
                          unbefugte Offenlegung, unbefugte Änderungen oder Zerstörung der gesel Daten zu verhindern.
                        </p>
                      </v-col>

                      <v-col cols="12">
                        <h3 class="line"> 5. Aufbewahrungsfrist</h3>
                      </v-col>

                      <v-col cols="12">
                        <p>
                          Personenbezogene Daten werden nur so lange aufbewahrt, wie es für die Erbringung
                          unserer Dienstleistungen
                          und die Einhaltung rechtlicher Anforderungen erforderlich ist. Sobald die Daten nicht mehr
                          benötigt
                          werden, werden sie sicher gelöscht oder anonymisiert.
                        </p>
                      </v-col>

                      <v-col cols="12">
                        <h3 class="line text-left"> 6. Rechte der betroffenen Personen</h3>
                      </v-col>

                      <v-col cols="12">
                        <p>
                          Unsere Kunden haben das Recht auf Auskunft, Berichtigung und Löschung ihrer
                          personenbezogenen Daten.
                          Falls Sie Fragen zu unseren Datenschutzpraktiken haben oder Ihre Rechte ausüben möchten,
                          wenden Sie sich
                          bitte an uns.
                        </p>
                      </v-col>

                      <v-col cols="12">
                        <h3 class="line text-left"> 7. Änderungen der Datenschutzerklärung</h3>
                      </v-col>

                      <v-col cols="12">
                        <p>
                          Wir behalten uns das Recht vor, diese Datenschutzerklärung jederzeit zu ändern oder zu
                          aktualisieren, um
                          den aktuellen rechtlichen Anforderungen zu entsprechen oder um unsere Praktiken im Hinblick
                          auf den
                          Schutz
                          personenbezogener Daten zu verbessern. Wir empfehlen unseren Kunden, regelmäßig unsere Website
                          zu
                          besuchen, um über etwaige Änderungen informiert zu bleiben.
                        </p>
                      </v-col>

                      <v-col cols="12">
                        <p class="text-left mt-7">Bitte beachten Sie, dass diese Datenschutzerklärung eine allgemeine
                          Beschreibung
                          unserer Praktiken
                          darstellt. Für spezifische Informationen und Abstimmungen im Zusammenhang mit der Weitergabe
                          von
                          Informationen zwischen Therapeuten und Tierärzten kontaktieren Sie uns bitte direkt.
                        </p>
                      </v-col>

                      <v-col class="text-left" cols="12">
                        <p>Bei weiteren Fragen stehen wir Ihnen gerne zur Verfügung.</p>
                        <p>Tiergesundheit Andrea Bachem</p>
                        <a href="https://www.google.de/maps/dir//Peter-May-Stra%C3%9Fe+47,+50374+Erftstadt/@50.8280411,6.7633927,
          13z/data=!3m1!4b1!4m9!4m8!1m0!1m5!1m1!1s0x47bf3d9b8e9b9ba3:0xf038ba0f5709dcf2!2m2!1d6.8046778!2d50.8280484!3e0?entry=ttu"
                           target="_blank">
                          <p>Postadresse Coloniastrasse 18</p>
                          <p>50169 Kerpen</p>
                        </a>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </div>
            </v-container>
          </v-window-item>
        </v-window>
      </div>
    </div>
  </div>

</template>


<script>
import {Icon} from '@iconify/vue';
import HeaderComponent from "@/components/HeaderComponent.vue";
import axios from "axios";
import {mapGetters} from "vuex";

export default {
  data() {
    return {
      name: '',
      email: '',
      telefonnummer: '',
      text: '',
      isHovered: false,
      dialog: false,
    }
  },
  methods: {
    async getSeminare() {
      const response = await axios.get('/seminar')

      const seminarArray = response.data;
      Object.freeze(seminarArray);
      this.$store.state.seminarArray = seminarArray;
    },
    async getProdukte() {
      const response = await axios.get('/produkt')

      const produkteArray = response.data;
      Object.freeze(produkteArray);

      this.$store.state.produkteArray = produkteArray;
      this.$store.state.produkteArray.forEach(item => {
        item.bild = `data:image/jpeg;base64,${item.bild}`;
      });
    },
    async getPreise() {
      const response = await axios.get('/preis')

      const preiseArray = response.data;
      Object.freeze(preiseArray);

      this.$store.state.preiseArray = preiseArray;
      this.$store.state.preiseArray.forEach(item => {
        item.bild = `data:image/jpeg;base64,${item.bild}`;
      });
    },
    async getBerichte() {
      const response = await axios.get('/bericht')

      const berichteArray = response.data;
      Object.freeze(berichteArray);

      this.$store.state.berichteArray = berichteArray;
      this.$store.state.berichteArray.forEach(item => {
        item.bild = `data:image/jpeg;base64,${item.bild}`;
      });
    },
    async getVideo() {
      const response = await axios.get('/video')
      const videoArray = response.data;
      Object.freeze(videoArray);
      this.$store.state.videoArray = videoArray;
    },
    async create() {
      try {
        await axios.post('/kontaktaufnahme', {
          email: this.email,
          telefonnummer: this.telefonnummer,
          name: this.name,
          text: this.text,
        })

        this.email = null
        this.telefonnummer = null
        this.name = null
        this.text = null

      } catch (e) {
        alert("Bitte füllen Sie alle Felder aus.")
      }
    },
  },
  components: {
    Icon, HeaderComponent
  },
  computed: {
    ...mapGetters(['preiseArray', 'produkteArray', 'seminarArray', 'berichteArray', 'videoArray']),
    reverseBerichte: function () {
      return this.berichteArray.slice().reverse()
    },
  },

}
</script>
<style scoped>
a {
  text-decoration: none;
  color: inherit
}

.tab-card {
  height: 85vh;

  background-color: transparent;

}

.text {
  text-align: justify;
  font-size: 15px;
}

.line {
  font-family: "Dancing Script", cursive;
  color: #2c2a2a;
}

.logo {
  background-image: url("../assets/Logo2.png");
  background-size: cover;
  width: 372px;
  height: 165px;
}

.dialogBackground {
  background-image: url("../assets/bg_black2_11zon.webp");
  background-size: cover;
}

.background-impressum {

  background-image: url("../assets/paper.webp");
  background-size: cover;

}

.background {
  background-image: url("../assets/black.webp");
  background-size: cover;
  height: 100vh;
  width: 100vw;
  position: fixed;
  padding-bottom: 150px;
}


.info {
  background-color: rgba(0, 130, 194, 0.82);
  min-height: 120px;
  border-radius: 4px;
  backdrop-filter: blur(4px);
  border-left: rgba(255, 255, 255, 0.5) solid 1px;
  border-top: rgba(255, 255, 255, 0.5) solid 1px;

}

.kontaktformular {
  background-color: rgba(242, 243, 243, 0.39);
  backdrop-filter: blur(3px);
  border: solid 2px black;
}

a {
  text-decoration: none;
  cursor: pointer;
}

.container1 {
  background-color: rgb(238, 238, 238);

  border: 2px solid black;
  padding: 20px;

  overflow: hidden;
  border-radius: 5px;
  transform-origin: -0px 0px;
}

.image {
  float: left; /* Float links für das Bild */
  margin-right: 20px; /* Abstand zum Text rechts vom Bild */
}

.buchBG {
  background-image: url("../assets/blattBg.png");
  background-size: cover;
  box-shadow: 0px 0px 8px 3px rgba(0, 0, 0, 0.34);
}

p {
  font-size: 10px;
}

.chirosiegel {
  background-image: url("../assets/chiroSiegel.webp");
  background-size: cover;
  height: 70px;
  width: 70px;
}

.chirosiegel1 {
  background-image: url("../assets/osteoSiegel.png");
  background-size: cover;
  height: 150px;
  width: 150px;
  margin-right: 60px;

}

.chirosiegel2 {
  background-image: url("../assets/physioSiegel.png");
  background-size: cover;
  height: 30px;
  width: 170px;

}

a:focus {
  outline: 2px solid blue;
}
</style>
