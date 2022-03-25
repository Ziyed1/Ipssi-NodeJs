<template>
  <div>
    <v-carousel hide-delimiters>
      <v-carousel-item
        :src="require('../assets/img/home/slider4.jpg')"
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="display-2 white--text pl-5 pr-5 hidden-sm-only"><strong>Réduction de 60% sur les armes à feu</strong></div><br/>
        </v-row>
      </v-carousel-item>
      <v-carousel-item
        :src="require('../assets/img/home/slider2.jpg')"
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="display-2 white--text pl-5 pr-5 hidden-sm-only"><strong>Réduction de 20% sur les munitions</strong></div><br/>
        </v-row>
      </v-carousel-item>
      <v-carousel-item
        :src="require('../assets/img/home/slider3.jpg')"
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="display-2 white--text pl-5 pr-5 hidden-sm-only"><strong>Nouveau stock disponible !</strong></div><br/>
        </v-row>
      </v-carousel-item>
      <v-carousel-item
        :src="require('../assets/img/home/slider1.jpg')"
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="display-2 white--text pl-5 pr-5 hidden-sm-only"><strong>Livraison gratuite avec un minimum d'achat de 100€</strong></div><br/>
        </v-row>
      </v-carousel-item>

    </v-carousel> <br>
    <div class="pl-4 pr-4 row">
      <div
       class="col-md-6 col-sm-6 col-xs-12"
      >
        <v-card>

          <v-img
            :src="require('../assets/img/home/slider2.jpg')"
            class="white--text align-center"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="400px"
          >
           <h1 class="text-center font-size">Les munitions</h1>
            <div class="text-center">
              <v-btn  href="/shop" class="white--text " outlined>Acheter</v-btn>
            </div>


<!--            <v-expand-transition>-->
<!--              <div-->
<!--                v-if="hover"-->
<!--                class="d-flex transition-fast-in-fast-out orange darken-2 v-card&#45;&#45;reveal display-3 white&#45;&#45;text"-->
<!--                style="height: 100%;"-->
<!--              >-->

<!--                <h3>Top Picks</h3><br/>-->
<!--                <h3>sdfs</h3>-->
<!--              </div>-->
<!--            </v-expand-transition>-->
          </v-img>
        </v-card>
<!--        </v-hover>-->
      </div>
      <div
        class="col-md-6 col-sm-6 col-xs-12"
      >
        <v-card>
          <v-img
            :src="require('../assets/img/home/slider3.jpg')"
            class="white--text align-center"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="400px"
          >
            <h1 class="text-center font-size">Nouveauté</h1>
            <div class="text-center">
              <v-btn  href="/shop" class="white--text" outlined>Acheter</v-btn>
            </div>
          </v-img>
        </v-card>
      </div>
    </div>
    <div class="pl-4 pr-4 row">
      <div
       class="col-md-4 col-sm-4 col-xs-12"
      >
        <v-card outlined>
          <v-img
            :src="require('../assets/img/home/deal2.jpg')"
            class="white--text align-center"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="300px"
          >
            <h1 class="text-center font-size">Armes à feu</h1>
            <div class="text-center mt-2">
              <v-btn class="white--text caption"  href="/shop" text>Acheter <v-icon class="white--text caption">mdi-arrow-right</v-icon></v-btn>
            </div>
          </v-img>
        </v-card>
      </div>
      <div
        class="col-md-4 col-sm-4 col-xs-12"
      >
        <v-card outlined>
          <v-img
            :src="require('../assets/img/home/deal3.jpg')"
            class="white--text align-center"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="300px"
          >
            <h1 class="text-center font-size">Armes blanches</h1>
            <div class="text-center mt-2">
              <v-btn class="white--text caption"  href="/shop" text>Acheter <v-icon class="white--text caption">mdi-arrow-right</v-icon></v-btn>
            </div>
          </v-img>
        </v-card>
      </div>
      <div
        class="col-md-4 col-sm-4 col-xs-12"
      >
        <v-card outlined>
          <v-img
            :src="require('../assets/img/home/deal4.jpg')"
            class="white--text align-center"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="300px"
          >
            <h1 class="text-center font-size">Accessoires</h1>
            <div class="text-center mt-2">
              <v-btn class="white--text caption"  href="/shop" text>Acheter <v-icon class="white--text caption">mdi-arrow-right</v-icon></v-btn>
            </div>
          </v-img>
        </v-card>
      </div>
    </div>
    <v-container>
      <v-row no-gutters>
        <v-col :cols="12">
          <v-card-text
            class=""
            tile
            outlined
          >
            <v-card-title class="subheading ">Bon plan de la semaine</v-card-title>
            <v-divider></v-divider>
            <div class="row">
              <div class="col-12 col-md-3 col-sm-6 col-xs-6 text-center">
                <v-hover
                  v-slot:default="{ hover }"
                  open-delay="200"
                >
                  <v-card
                    :elevation="hover ? 16 : 2"
                >
                  <v-img
                    class="white--text align-end"
                    height="200px"
                    :src="require('../assets/img/home/deal1.jpg')"
                  >
                    <v-card-title> </v-card-title>
                  </v-img>

                  <v-card-text class="text--primary text-center">
                    <div>Réduction de 60%</div>
                    <div><strong>Magnum</strong></div>
                    <div><del>500,00 € </del>399,99 €</div>
                  </v-card-text>

                  <div class="text-center">
                    <v-btn
                      href="/shop"
                      class="ma-2"
                      outlined
                      color="info"
                    >
                      Découvrir
                    </v-btn>
                  </div>
                </v-card>
                </v-hover>
              </div>
              <div class="col-12 col-md-3 col-sm-6 col-xs-6 text-center" >
                <v-hover
                  v-slot:default="{ hover }"
                  open-delay="200"
                >
                  <v-card
                    :elevation="hover ? 16 : 2"
                  >
                  <v-img
                    class="white--text align-end"
                    height="200px"
                    :src="require('../assets/img/home/katana.jpg')"
                  >
                    
                  </v-img>

                  <v-card-text class="text--primary text-center">
                    <div>Réduction de 50%</div>
                    <div><strong>Katana</strong></div>
                    <div><del>380,00 € </del>300,00 €</div>
                  </v-card-text>

                  <div class="text-center">
                    <v-btn href="/shop"
                      class="ma-2"
                      outlined
                      color="info"
                    >
                      Découvrir
                    </v-btn>
                  </div>
                </v-card>
                </v-hover>
              </div>
              <div class="col-12 col-md-3 col-sm-6 col-xs-6 text-center" >
                <v-hover
                  v-slot:default="{ hover }"
                  open-delay="200"
                >
                  <v-card
                    :elevation="hover ? 16 : 2"
                  >
                  <v-img
                    class="white--text align-end"
                    height="200px"
                    :src="require('../assets/img/home/kit.jpg')"
                  >
                
                  </v-img>

                  <v-card-text class="text--primary text-center">
                    <div>Réduction de 60%</div>
                    <div><strong>Kit de nettoyage</strong></div>
                    <div><del>80,00 € </del>60,00 €</div>
                  </v-card-text>

                  <div class="text-center">
                    <v-btn href="/shop"
                      class="ma-2"
                      outlined
                      color="info"
                    >
                      Découvrir
                    </v-btn>
                  </div>
                </v-card>
                </v-hover>
              </div>
              <div class="col-12 col-md-3 col-sm-6 col-xs-6 text-center" >
                <v-hover
                  v-slot:default="{ hover }"
                  open-delay="200"
                >
                  <v-card
                    :elevation="hover ? 16 : 2"
                  >
                  <v-img
                    class="white--text align-end"
                    height="200px"
                    :src="require('../assets/img/home/adp.jpg')"
                  >
                  </v-img>

                  <v-card-text class="text--primary text-center">
                    <div>Réduction de 60%</div>
                    <div><strong>Arme de poing</strong></div>
                    <div><del>290,00 € </del>230,00 €</div>
                  </v-card-text>

                  <div class="text-center">
                    <v-btn href="/shop"
                      class="ma-2"
                      outlined
                      color="info"
                    >
                      Découvrir
                    </v-btn>
                  </div>
                </v-card>
                </v-hover>
              </div>
            </div>
          </v-card-text>
        </v-col>
      </v-row>
    </v-container>
    <v-card  class="accent" >
      <v-container>
        <v-row no-gutters>
          <v-col class="col-12 col-md-4 col-sm-12">
            <v-row >
              <v-col class="col-12 col-sm-3 pr-4" align="right">
                <v-icon class="display-2">mdi-truck</v-icon>
              </v-col>
              <v-col class="col-12 col-sm-9 pr-4">
                <h3 class="font-weight-light">LIVRAISON & RETOUR GRATUIT</h3>
                              <p class="font-weight-thin">Livraison gratuite à partir de 300€</p>
              </v-col>
            </v-row>
          </v-col>
          <v-col class="col-12 col-md-4 col-sm-12">
            <v-row >
              <v-col class="col-12 col-sm-3 pr-4" align="right">
                <v-icon class="display-2">mdi-cash-usd</v-icon>
              </v-col>
              <v-col  class="col-12 col-sm-9 pr-4">
                <h3 class="font-weight-light">REMBOURSER A 100%</h3>
                <p class="font-weight-thin">Garantie de remboursement en 30 jours maximum</p>
              </v-col>
            </v-row>
          </v-col>
          <v-col class="col-12 col-md-4 col-sm-12">
            <v-row>
              <v-col class="col-12 col-sm-3 pr-4" align="right">
                <v-icon class="display-2">mdi-headset</v-icon>
              </v-col>
              <v-col  class="col-12 col-sm-9 pr-4">
                <h3 class="font-weight-light">07 69 03 59 05</h3>
                <p class="font-weight-thin">Support disponible 24/7</p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
    export default {
        data () {
            return {
                items: [
                    { title: 'Click Me' },
                    { title: 'Click Me' },
                    { title: 'Click Me' },
                    { title: 'Click Me 2' },
                ],
                activeBtn: 1,
                colors: [
                    'noir',
                    'blanc',
                    'vert',
                    'rouge',
                    'bleu',
                ],
                slides: [
                    'Première',
                    'Deuxième',
                    'Troisième',
                    'Quatrième',
                    'Cinquième',
                ],
            }
        },
    }
</script>
<style>
  .v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: .5;
    position: absolute;
    width: 100%;
  }
</style>

