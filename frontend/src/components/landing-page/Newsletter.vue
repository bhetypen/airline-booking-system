<template>
  <section class="bg-[#f4f9ff] py-16">
    <div class="max-w-6xl mx-auto px-6">
      <v-card
          class="rounded-2xl shadow-lg overflow-hidden p-0 max-h-[80vh]"
      >
        <!-- Adjusted grid: 35% image / 65% form -->
        <div class="grid grid-cols-1 md:grid-cols-[35%_65%] h-full">

          <!-- Left: Photo -->
          <div class="relative">
            <v-img
                src="/newsletter-photo.png"
                alt="Tropical destination"
                cover
                class="h-full w-full object-cover"
            />
          </div>

          <!-- Right: Form -->
          <div class="p-8 md:p-12 overflow-y-auto flex flex-column justify-center pa-10">
            <h2 class="text-3xl md:text-4xl font-extrabold text-[#1e68ff]">
              Stay tuned!
            </h2>
            <p class="text-gray-600 mt-3 max-w-xl">
              Subscribe to our newsletter and be the first to know
              about new routes and special offers.
            </p>

            <!-- Inputs -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <v-text-field
                  variant="outlined"
                  density="comfortable"
                  placeholder="Name"
                  hide-details
                  class="rounded-xl"
              />
              <v-text-field
                  variant="outlined"
                  density="comfortable"
                  type="email"
                  placeholder="Email"
                  hide-details
                  class="rounded-xl"
              />
            </div>

            <!-- Checkbox -->
            <div class="mt-5">
              <v-checkbox hide-details>
                <template #label>
                  <span class="text-gray-600">
                    By clicking this checkbox, I accept receiving newsletter
                    and offers from Manila Airways. Details in
                    <RouterLink to="/privacy" class="text-[#1e68ff] hover:underline">
                      Privacy Notice
                    </RouterLink>.
                  </span>
                </template>
              </v-checkbox>
            </div>

            <!-- CTA -->
            <v-btn
                color="primary"
                class="mt-4 font-semibold rounded-lg px-6"
                size="large"
            >
              <v-icon start>mdi-email-outline</v-icon>
              Subscribe Now
            </v-btn>
          </div>
        </div>
      </v-card>
    </div>
  </section>
</template>
