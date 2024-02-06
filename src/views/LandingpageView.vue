<template>
  <div v-if="!$store.state.mobile" class="background">
    <p class="text-white">
    </p>
    <div style="height: 100%; width: 100%; background-color: rgba(0,0,0,0.13)">
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
              <h3 style="color: #dedddd">
                Bei uns steht die umfassende Gesundheit deines Tieres im Mittelpunkt.
                Wir bieten hochwertige Therapien, darunter Chiropraktik, Osteopathie,
                Physiotherapie und individuelle Ernährungsberatung. Vertraue uns, um das
                Wohlbefinden deines Lieblings zu fördern und ihm die beste Pflege zukommen zu lassen.
              </h3>
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
                          <h3 class="pt-10">Ihre Anliegen sind uns wichtig!</h3>
                          <br>
                          <p>Zögern Sie nicht, unser
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
                      <h2 style="color: #fdfcfc">
                        Ruf mich an
                      </h2>

                    </v-col>
                    <v-col class="d-flex justify-center" cols="12">
                      <a href="tel:+4917806915915">
                        <h3 class=" mt-n4" style="color: #fdfcfc">
                          017806915915
                        </h3>
                      </a>
                    </v-col>
                  </v-row>
                </v-col>
                <v-divider style="background-color: #fcf8f8; color: #fffdfd" vertical></v-divider>

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
                <v-divider style="color: #faf7f7; background-color: #f8f8f8" vertical></v-divider>

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
                        <h5 class="text-center mt-n4" style="color: #fcfafa">
                          Peter-May-straße 47 50374 Köttingen
                        </h5>
                      </a>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-col>
          </v-row>

        </v-col>
        <v-col class="py-0" cols="4">
          <div class="collage"></div>
        </v-col>
      </v-row>
      <div class="d-flex" style="position: absolute ; bottom: 10px">
        <p class="mx-2 text-white link" style="cursor:pointer;" @click="$router.push('/impressum')">
          Impressum
        </p>
        <p class="text-white">
          |
        </p>
        <p class="mx-2 text-white link" style="cursor:pointer;" @click="$router.push('/verwaltung')">
          Verwaltung
        </p>
        <p class="text-white">
          |
        </p>
        <p class="mx-2 text-white link" style="cursor:pointer;" @click="$router.push('/datenschutz')">
          Datenschutz
        </p>
        <Icon class="mx-3 mt-n4" icon="grommet-icons:youtube" style="cursor: pointer; font-size: 40px; color: red"
              @click="$router.push('/Video')"/>
        <a href="https://www.instagram.com/andreabachem?igsh=MTIxZTJxZHRvd2wxeg==">

          <Icon class="mx-3 mt-n4" icon="skill-icons:instagram" style="cursor: pointer; font-size: 40px"/>
        </a>
      </div>
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

          <v-tab :value="0" class="">Home</v-tab>
          <v-tab :value="1" class="">Preise</v-tab>
          <v-tab :value="2" class="">Produkte</v-tab>
          <v-tab :value="3" class="">Seminare</v-tab>
          <v-tab :value="4" class="">Berichte</v-tab>
          <v-tab :value="5" class="">Chiopraktik</v-tab>
          <v-tab :value="6" class="">Osteopathie</v-tab>
          <v-tab :value="7" class="">Physiotherapie</v-tab>
          <v-tab :value="8" class="">Ernährung</v-tab>
          <v-tab :value="9" class="">Youtube</v-tab>
          <v-tab :value="10" class="">Impressum</v-tab>
          <v-tab :value="11" class="">Datenschutz</v-tab>


        </v-tabs>

        <v-window v-model="$store.state.tab">
          <v-window-item :value="0"
          >
            <v-container style="height: 80vh">
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
                              <h3 class="pt-10">Ihre Anliegen sind uns wichtig!</h3>
                              <br>
                              <p>Zögern Sie nicht, unser
                                Kontaktformular
                                zu
                                nutzen,
                                um
                                mit
                                unserem Tiergesundheitszentrum in Verbindung zu treten und die bestmögliche Betreuung
                                für
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
              <v-row class="d-flex justify-center   mt-10" style="position: absolute; bottom: 30px; width: 100%">
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
            <v-container style="height: 80vh; overflow: scroll">
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
                                    <p>Zögern Sie nicht, unser
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
            <v-container class="d-flex justify-center" style="height: 80vh; overflow: scroll">
              <v-row class="mx-0 mt-n6" style="width: 100%;">
                <v-col v-for="preis in produkteArray" :key="preis.id" style="max-height: 530px">
                  <v-card
                      :loading="loading"
                      class="mx-auto my-12 "
                      height="500"
                      style="background-color: rgba(229,227,227,0.98); backdrop-filter: blur(4px);box-shadow: 1px 1px 5px black "
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
            <v-container class="d-flex justify-center" style="height: 80vh; overflow: scroll">

              <v-row class="mx-0 mt-n6" style="width: 100%;">
                <v-col v-for="seminar in seminarArray" :key="seminar.id" style="max-height: 550px">
                  <v-card
                      :loading="loading"
                      class="mx-auto my-12 "
                      height="520"
                      style="background-color: rgb(232,232,232); backdrop-filter: blur(4px);box-shadow: 1px 1px 5px black "
                      width="340"
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

                      <div>
                        {{ seminar.text }}

                      </div>
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
                        <p>{{ seminar.straße }}</p>
                      </v-col>
                      <v-col class="mt-n4" cols="3">
                        <h4>PLZ:</h4>
                      </v-col>
                      <v-col class="mt-n4" cols="7">
                        <p>{{ seminar.plz }}</p>
                      </v-col>
                      <v-col class="mt-n4" cols="3">
                        <h4>Ort:</h4>
                      </v-col>
                      <v-col class="mt-n4" cols="7">
                        <p>{{ seminar.ort }}</p>
                      </v-col>


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
                                    <p>Zögern Sie nicht, unser
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
          <v-window-item :value="4">
            <v-container class="d-flex justify-center" style="height: 80vh; overflow: scroll">

              <v-row class="justify-center mt-n4 mx-0" style=" width: 100%;">
                <v-col v-for="bericht in reverseBerichte" :key="bericht.id" cols="10">

                  <div class="container1">
                    <div class="image">
                      <v-img :src="bericht.bild" alt="Beschreibung des Bildes " cover height="300px"
                             width="300px"></v-img>
                    </div>
                    <h1 class=""> {{ bericht.ueberschrift }}</h1>
                    <br>
                    <h3 style="color: grey">
                      Autor: {{ bericht.autor }}
                    </h3>
                    <h3 style="color: grey">
                      Erschienen am: {{ bericht.datum }}
                    </h3>
                    <br>
                    <br>

                    <p class="text">
                      {{ bericht.text }}
                    </p>

                  </div>


                </v-col>

              </v-row>

            </v-container>
          </v-window-item>
          <v-window-item :value="5">
            <v-container class="d-flex justify-center">
              <div class="d-flex justify-center kontaktformular-mobile1">
                <div style="max-width: 90%; height: 100%">

                  <v-card
                      style="background-color: transparent; box-shadow: 0px 0px; overflow-y: scroll; max-height: 100%; color: #e3dede">

                    <div id="content" class="site-content">

                      <div id="primary" class="content-area">
                        <main id="main" class="site-main">

                          <article id="post-6" class="post-6 page type-page status-publish"
                                   itemscope="" itemtype="https://schema.org/CreativeWork">
                            <div class="inside-article">

                              <header aria-label="Inhalt" class="entry-header">
                                <h1 class="entry-title text-black" itemprop="headline">Impressum</h1></header>


                              <div class="entry-content" itemprop="text">

                                <p><br><em><strong>Angaben gemäß § 5 TMG</strong></em><strong><br></strong></p>


                                <p>Benjamin Bodtländer<br>Institut für MPU-Beratung und Suchtprävention<br>Alter Woog
                                  13<br>66606 Sankt Wendel<br></p>


                                <p><strong>Kontakt</strong><br>Telefon: 0151 21225525<br>E-Mail:
                                  Info@MPU-Institut-Saar.de<br>
                                </p>


                                <p>Verbraucherstreitbeilegung/Universalschlichtungsstelle<br>Wir sind nicht bereit oder
                                  verpflichtet, an Streitbeilegungsverfahren vor einer<br>Verbraucherschlichtungsstelle
                                  teilzunehmen.<br></p>


                                <p>Quelle:<br>e-recht24.de</p>

                                <br>

                                <header aria-label="Inhalt" class="entry-header">
                                  <h1 class="entry-title text-black" itemprop="headline">Website</h1></header>

                                <p>
                                  <strong>
                                    Website created by
                                  </strong>
                                  <br>

                                </p>

                                <ul>
                                  <li>
                                    <h4>
                                      <a href="https://leandro-graf.de" target="_blank">Leandro Graf</a>
                                    </h4>
                                  </li>
                                  <li>
                                    <h4>
                                      <a href="https://franke-arts.de" target="_blank">Stefan Franke</a>
                                    </h4>
                                  </li>
                                </ul>

                                <p></p>

                                <br>


                                <p></p>


                                <p style="font-size:25px"><strong>Datenschutzerklärung</strong></p>


                                <h4 class="wp-block-heading text-black">Zugriffsdaten</h4>


                                <p>Wir, der Websitebetreiber bzw. Seitenprovider, erheben aufgrund unseres berechtigten
                                  Interesses (s. Art. 6 Abs. 1 lit. f. DSGVO) Daten über Zugriffe auf die Website und
                                  speichern diese als „Server-Logfiles“ auf dem Server der Website ab. Folgende Daten
                                  werden so protokolliert:</p>


                                <ul class="ml-5">
                                  <li>Besuchte Website</li>


                                  <li>Uhrzeit zum Zeitpunkt des Zugriffes</li>


                                  <li>Menge der gesendeten Daten in Byte</li>


                                  <li>Quelle/Verweis, von welchem Sie auf die Seite gelangten</li>


                                  <li>Verwendeter Browser</li>


                                  <li>Verwendetes Betriebssystem</li>


                                  <li>Verwendete IP-Adresse</li>
                                </ul>


                                <p>Die Server-Logfiles werden für maximal 7 Tage gespeichert und anschließend gelöscht.
                                  Die Speicherung der Daten erfolgt aus Sicherheitsgründen, um z. B. Missbrauchsfälle
                                  aufklären zu können. Müssen Daten aus Beweisgründen aufgehoben werden, sind sie
                                  solange
                                  von der Löschung ausgenommen bis der Vorfall endgültig geklärt ist.</p>


                                <h4 class="wp-block-heading text-black">Reichweitenmessung &amp; Cookies</h4>


                                <h4 class="wp-block-heading">&nbsp;</h4>


                                <p>Diese Website verwendet Cookies zur pseudonymisierten Reichweitenmessung, die
                                  entweder
                                  von unserem Server oder dem Server Dritter an den Browser des Nutzers übertragen
                                  werden.
                                  Bei Cookies handelt es sich um kleine Dateien, welche auf Ihrem Endgerät gespeichert
                                  werden. Ihr Browser greift auf diese Dateien zu. Durch den Einsatz von Cookies erhöht
                                  sich die Benutzerfreundlichkeit und Sicherheit dieser Website</p>


                                <p>Falls Sie nicht möchten, dass Cookies zur Reichweitenmessung auf Ihrem Endgerät
                                  gespeichert werden, können Sie dem Einsatz dieser Dateien hier widersprechen:</p>


                                <ul class="ml-5">
                                  <li>Cookie-Deaktivierungsseite der Netzwerkwerbeinitiative: <a
                                      href="http://optout.networkadvertising.org/?c=1#!/">http://optout.networkadvertising.org/?c=1#!/</a>
                                  </li>


                                  <li>Cookie-Deaktivierungsseite der US-amerikanischen Website: <a
                                      href="http://optout.aboutads.info/?c=2#!/">http://optout.aboutads.info/?c=2#!/</a>
                                  </li>


                                  <li>Cookie-Deaktivierungsseite der europäischen Website: <a
                                      href="http://optout.networkadvertising.org/?c=1#!/">http://optout.networkadvertising.org/?c=1#!/</a>
                                  </li>
                                </ul>


                                <p>Gängige Browser bieten die Einstellungsoption, Cookies nicht zuzulassen. Hinweis: Es
                                  ist nicht gewährleistet, dass Sie auf alle Funktionen dieser Website ohne
                                  Einschränkungen zugreifen können, wenn Sie entsprechende Einstellungen vornehmen.</p>


                                <p>Erfassung und Verarbeitung personenbezogener Daten</p>


                                <p>Der Websitebetreiber erhebt, nutzt und gibt Ihre personenbezogenen Daten nur dann
                                  weiter, wenn dies im gesetzlichen Rahmen erlaubt ist oder Sie in die Datenerhebung
                                  einwilligen.</p>


                                <p>Als personenbezogene Daten gelten sämtliche Informationen, welche dazu dienen, Ihre
                                  Person zu bestimmen und welche zu Ihnen zurückverfolgt werden können – also
                                  beispielsweise Ihr Name, Ihre E-Mail-Adresse und Telefonnummer.</p>


                                <p>Diese Website können Sie auch besuchen, ohne Angaben zu Ihrer Person zu machen. Zur
                                  Verbesserung unseres Online-Angebotes speichern wir jedoch (ohne Personenbezug) Ihre
                                  Zugriffsdaten auf diese Website. Zu diesen Zugriffsdaten gehören z. B. die von Ihnen
                                  angeforderte Datei oder der Name Ihres Internet-Providers. Durch die Anonymisierung
                                  der
                                  Daten sind Rückschlüsse auf Ihre Person nicht möglich.</p>


                                <p><strong>Umgang mit Kontaktdaten</strong></p>


                                <p>Nehmen Sie mit uns als Websitebetreiber durch die angebotenen Kontaktmöglichkeiten
                                  Verbindung auf, werden Ihre Angaben gespeichert, damit auf diese zur Bearbeitung und
                                  Beantwortung Ihrer Anfrage zurückgegriffen werden kann. Ohne Ihre Einwilligung werden
                                  diese Daten nicht an Dritte weitergegeben.</p>


                                <p><strong>Umgang mit Kommentaren und Beiträgen</strong></p>


                                <p>Hinterlassen Sie auf dieser Website einen Beitrag oder Kommentar, wird Ihre
                                  IP-Adresse
                                  gespeichert. Dies erfolgt aufgrund unserer berechtigten Interessen im Sinne des Art. 6
                                  Abs. 1 lit. f. DSGVO und dient der Sicherheit von uns als Websitebetreiber: Denn
                                  sollte
                                  Ihr Kommentar gegen geltendes Recht verstoßen, können wir dafür belangt werden,
                                  weshalb
                                  wir ein Interesse an der Identität des Kommentar- bzw. Beitragsautors haben.</p>


                              </div>

                            </div>
                          </article>
                        </main>
                      </div>

                      <div id="right-sidebar" class="widget-area sidebar is-right-sidebar">
                        <div class="inside-right-sidebar">
                        </div>
                      </div>

                    </div>

                  </v-card>

                </div>
              </div>
            </v-container>
          </v-window-item>


        </v-window>


      </div>
      <FooterComponent></FooterComponent>
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
    ...mapGetters(['preiseArray', 'produkteArray', 'seminarArray', 'berichteArray']),
    reverseBerichte: function () {
      return this.berichteArray.slice().reverse()
    },
  },
  mounted() {
    this.getPreise()
    this.getProdukte()
    this.getSeminare()
    this.getBerichte()
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
  background-image: url("../assets/bg_black2.jpg");
  background-size: cover;
}

.background {
  background-image: url("../assets/black.jpg");
  background-size: cover;
  height: 100vh;
  width: 100vw;
  position: fixed;
  padding-bottom: 150px;
}

.collage {
  background-image: url("../assets/Kolage.png");
  background-size: cover;
  height: 100vh;
}

.info {
  background-color: rgba(0, 130, 194, 0.33);
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
  background-color: rgba(255, 255, 255, 0.74);
  transform: scale(0.6);
  border: 2px solid black;
  padding: 20px;
  width: 500px;
  overflow: hidden;
  border-radius: 5px;
  transform-origin: 25px 25px;
}

.image {
  float: left; /* Float links für das Bild */
  margin-right: 20px; /* Abstand zum Text rechts vom Bild */
}
</style>