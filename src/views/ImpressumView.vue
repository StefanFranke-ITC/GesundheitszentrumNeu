<template>
  <div class="background">
    <v-row class="bg ma-0 pb-7 pa-0" style="width: 100%">
      <v-col cols="8">
        <HeaderComponent></HeaderComponent>
      </v-col>
      <v-col class="py-0" cols="4">
        <div class="collage"></div>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <div style="overflow: scroll; height: 100%; padding-bottom: 210px">
      <v-row class="justify-center">
        <v-col cols="6">
          <v-row class="mx-0" style="width: 100%">
            <v-col class="d-flex mt-10" cols="12">
              <h1 class="line">
                Impressum Tier-Gesundheitszentrum Andrea Bachem
              </h1>
            </v-col>

            <v-col cols="12">
              <p>
                Ein Hinweis aufgrund des Heilmittelwerbegesetzes:<br>
                Grundsätzlich soll bei den aufgeführten Therapien nicht der Eindruck erweckt werden, dass diesen ein
                Heilversprechen zugrunde liegt. Ebenso wenig kann aus den Ausführungen abgeleitet werden, dass Linderung
                oder Verbesserung eines Krankheitszustandes garantiert oder versprochen werden. Homöopathie und
                Magnetfeldtherapie werden schulmedizinisch nicht anerkannt.
              </p>
            </v-col>

            <v-col cols="12">
              <p>
                Die hier bereitgestellten Inhalte sind mit größter Sorgfalt recherchiert. Dennoch kann keine Gewähr für
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
              <h1 class="line">Website created by</h1>
            </v-col>

            <v-col cols="12">
              <p>
                <a href="https://www.franke-arts.de" target="_blank">Stefan Franke</a>
                <br>
                <a href="https://www.leandro-graf.de" target="_blank">Leandro Graf</a>
              </p>
            </v-col>

            <v-col cols="12">
              <h1 class="line">Streitschlichtung</h1>
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
              <h1 class="line">Haftung für Inhalte</h1>
            </v-col>

            <v-col cols="12">
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
                allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
                verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
                forschen, die auf eine rechtswidrige Tätigkeit hinweisen.<br>
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen
                bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis
                einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden
                wir diese Inhalte umgehend entfernen.
              </p>
            </v-col>

            <v-col cols="12">
              <h1 class="line">Haftung für Links</h1>
            </v-col>


            <v-col cols="12">
              <p>
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
                Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
                verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die
                verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
                Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.<br>
                Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer
                Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links
                umgehend entfernen.
              </p>
            </v-col>

            <v-col cols="12">
              <h1 class="line">Urheberrecht</h1>
            </v-col>

            <v-col cols="12">
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
                Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
                Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.<br>
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte
                Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem
                auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei
                Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
              </p>
            </v-col>
          </v-row>

        </v-col>
      </v-row>
    </div>

  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";

export default {
  data: () => ({
    loading: false,
  }),

  methods: {},
  mounted() {
  },
  computed: {},
  components: {
    HeaderComponent,
  },
};
</script>

<style scoped>
.background {
  position: fixed;
  background-image: url("../assets/paper.webp");
  background-size: cover;
  height: 100vh;
  width: 100vw;
}

p {
  color: #4b4a4a;
}

h1 {
  color: #4b4a4a;
}

.bg {
  background-image: url("../assets/wiese_11zon.jpg");
  box-shadow: 0px 3px 5px black;
}

@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap');
.line {
  font-family: "Dancing Script", cursive;
  margin-top: 10px;
}
</style>
