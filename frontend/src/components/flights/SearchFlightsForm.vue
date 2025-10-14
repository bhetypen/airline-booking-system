<script setup>
/* UI-only; no functionality yet */
</script>

<template>
  <section class="bg-[#f4f9ff] py-16">
    <div class="max-w-5xl mx-auto px-4">
      <v-card class="rounded-xl shadow-2xl pa-10">
        <div class="p-8 md:p-12 space-y-8">

          <h2 class="text-3xl md:text-4xl font-extrabold text-[#1e68ff] mb-2">
            Search Flights
          </h2>

          <div class="mb-4">
            <div class="bg-gray-100 rounded-lg p-1 w-full md:w-[420px]">
              <div class="grid grid-cols-2 gap-1">
                <v-btn color="primary" class="rounded-lg !text-white !font-semibold" block>
                  Round-trip
                </v-btn>
                <v-btn variant="text" class="rounded-lg text-gray-600" block>
                  One-way
                </v-btn>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
            <div>
              <div class="text-sm text-gray-700 mb-2">From</div>
              <v-text-field
                  variant="outlined"
                  density="comfortable"
                  placeholder="Select departure City"
                  class="rounded-lg"
                  hide-details
                  prepend-inner-icon="mdi-map-marker-outline"
                  append-inner-icon="mdi-menu-down"
              />
            </div>

            <div class="hidden md:block absolute left-1/2 -translate-x-1/2 top-9 z-10">
              <div class="w-10 h-10 rounded-full bg-white border flex items-center justify-center shadow">
                <v-icon size="22">mdi-swap-horizontal</v-icon>
              </div>
            </div>

            <div>
              <div class="text-sm text-gray-700 mb-2">To</div>
              <v-text-field
                  variant="outlined"
                  density="comfortable"
                  placeholder="Select arrival City"
                  class="rounded-lg"
                  hide-details
                  prepend-inner-icon="mdi-map-marker-outline"
                  append-inner-icon="mdi-menu-down"
              />
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div class="text-sm text-gray-700 mb-2">Departure Date</div>
              <v-text-field
                  variant="outlined"
                  density="comfortable"
                  placeholder="MM/DD/YYYY"
                  class="rounded-lg"
                  hide-details
                  append-inner-icon="mdi-calendar-blank-outline"
              />
            </div>
            <div>
              <div class="text-sm text-gray-700 mb-2">Return Date</div>
              <v-text-field
                  variant="outlined"
                  density="comfortable"
                  placeholder="MM/DD/YYYY"
                  class="rounded-lg"
                  hide-details
                  append-inner-icon="mdi-calendar-blank-outline"
              />
            </div>
          </div>

          <div>
            <div class="text-sm text-gray-700 mb-2">Travellers</div>
            <v-text-field
                variant="outlined"
                density="comfortable"
                placeholder="1 Adult"
                class="rounded-lg"
                hide-details
                prepend-inner-icon="mdi-account-group-outline"
                append-inner-icon="mdi-menu-down"
            />
          </div>

          <div class="pt-4">
            <v-btn
                color="primary"
                size="xlarge"
                class="w-full md:w-[420px] font-semibold rounded-lg py-4"
            >
              <span class="flex items-center justify-center w-full h-full">
      Search Manila Airways Flight
      <v-icon end>mdi-arrow-right</v-icon>
    </span>
            </v-btn>
          </div>

          <p class="text-center text-xs text-gray-500 pt-1">
            Please complete all required fields to search
          </p>
        </div>
      </v-card>
    </div>
  </section>
</template>

<style scoped>
/* Vuetify field outline styling remains the same */
.v-field--variant-outlined .v-field__outline {
  border-radius: 12px !important;
}
</style>