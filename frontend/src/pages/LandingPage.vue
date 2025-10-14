<script setup>
// This component displays the main promotional hero section.
import SearchFlightsForm from "../components/flights/SearchFlightsForm.vue";
import SearchFlightOffers from "../components/landing-page/SearchFlightOffers.vue";
import Newsletter from "../components/landing-page/Newsletter.vue";
import StatsBand from "../components/landing-page/StatsBand.vue";
import DiscoverSection from "../components/landing-page/DiscoverSection.vue";
</script>

<template>
  <div id="hero-section"
       class="relative flex items-center justify-center text-center p-4 h-[85vh] bg-cover bg-center"
       style="background-image: url('/hero.png');">

    <!-- Overlay to make text readable -->
    <div class="absolute inset-0 bg-black/30"></div>

    <div class="z-10 text-white max-w-4xl mx-auto">
      <h1 class="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight leading-tight">
        Fly Beyond Expectations
      </h1>
      <p class="text-lg md:text-xl font-light mb-8 max-w-2xl mx-auto">
        Experience premium air travel with Manila Airways. Book your next with confidence and comfort.
      </p>

      <!-- Book Flight CTA Button -->
      <v-btn
          color="primary"
          class="px-8 py-3 rounded-lg shadow-xl font-semibold text-lg transition-all"
          elevation="10"
          append-icon="mdi-arrow-right"
          size="large"
          style="font-size: 16px; font-weight: 600;"
      >
        Book your flight
      </v-btn>
    </div>
  </div>
  <SearchFlightsForm/>
  <SearchFlightOffers/>
  <Newsletter/>
  <StatsBand/>
  <DiscoverSection/>
</template>
