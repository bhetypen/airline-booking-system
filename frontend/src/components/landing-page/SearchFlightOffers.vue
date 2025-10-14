<template>
  <div class="flight-offers-component py-16 px-4 md:px-8 max-w-full lg:max-w-[80vw] mx-auto">
    <div class="flex flex-col md:flex-row md:items-center justify-center md:space-x-4 mb-10 ga-2">
      <h1 class="text-3xl md:text-4xl font-extrabold text-[#1e68ff]">
        Flight Offers
      </h1>

      <div class="flex items-center space-x-2 ga-2">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
                text
                v-bind="attrs"
                v-on="on"
                class="capitalize text-lg font-medium tracking-normal"
            >
              <v-icon left>mdi-airplane-takeoff</v-icon>
              Round Trip
              <v-icon right>mdi-chevron-down</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item>
              <v-list-item-title>One Way</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <span class="text-lg text-gray-500">from</span>

        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
                text
                v-bind="attrs"
                v-on="on"
                class="capitalize text-lg font-medium tracking-normal"
            >
              Vienna
              <v-icon right>mdi-chevron-down</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item>
              <v-list-item-title>London</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <template v-for="(item, index) in 3" :key="index">
        <v-card
            class="rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out overflow-hidden"
            height="300"
        >
          <div
              class="h-full bg-cover bg-center"
              :style="{ backgroundImage: 'url(\'https://picsum.photos/id/' + (200 + index) + '/600/400\')' }"
          >
            <div class="flex flex-col justify-end h-full p-4 bg-gradient-to-t from-black/70 to-transparent">
              <div class="text-white pa-3">
                <p class="text-xl font-bold mb-1">
                  <v-icon left color="white" small>mdi-map-marker</v-icon>
                  London
                </p>
                <p class="text-sm font-light opacity-80">
                  Roundtrip from <span class="text-lg font-semibold">148 €</span>
                </p>
              </div>
            </div>
          </div>
        </v-card>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FlightOffers',
}
</script>

<style scoped>
/* Vuetify button styling adjustment */
.v-btn.capitalize {
  text-transform: capitalize !important;
}
</style>