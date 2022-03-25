<template>
  <div>
    <v-container>
      <p class="display-3 font-weight-light	text-center pa-4">Nous contacter</p>
        <div class="row">
          <div class="col-md-4 col-sm-4 col-xs-12">
            <v-card
              class="mx-auto"
              max-width="400"
              outlined
              tile
              href=""
            >
              <v-img
                class="white--text align-end"
                height="400px"
                :src="require('../assets/img/home/slider2.jpg')"
              >
                <v-card-title>E-mail</v-card-title>
              </v-img>

              <v-card-subtitle class="pb-0">Ammu-nation@NASA.com</v-card-subtitle>

              <v-card-text class="text--primary">

                <div>Utilisez notre mail pour toute collaboration.

                </div>
              </v-card-text>

              <v-card-actions>

              </v-card-actions>
            </v-card>
          </div>
          <div class="col-md-4 col-sm-3 col-xs-12">
            <v-card
              class="mx-auto"
              max-width="400"
              outlined
              tile
              href=""
            >
              <v-img
                class="white--text align-end"
                height="400px"
                :src="require('../assets/img/home/slider3.jpg')"
              >
                <v-card-title>Téléphone</v-card-title>
              </v-img>

              <v-card-subtitle class="pb-0">07 06 05 04 03</v-card-subtitle>

              <v-card-text class="text--primary">

                <div>Contactez nous par téléphone pour toute demande 

                </div>
              </v-card-text>

              <v-card-actions>
              </v-card-actions>
            </v-card>
          </div>
          <div class="col-md-4 col-sm-3 col-xs-12">
            <v-card
              class="mx-auto"
              max-width="400"
              outlined
              tile
              href=""
            >
              <v-img
                class="white--text align-end"
                height="400px"
                :src="require('../assets/img/home/slider4.jpg')"
              >
                <v-card-title>Fax</v-card-title>
              </v-img>

              <v-card-subtitle class="pb-0">Ammu-nation@faxexpert.com</v-card-subtitle>

              <v-card-text class="text--primary">

                <div>Envoyer nous un fax pour toute demande d'achat ou retour.

                </div>
              </v-card-text>

              <v-card-actions>
              </v-card-actions>
            </v-card>
          </div>
        </div>
    </v-container>
  </div>
</template>
