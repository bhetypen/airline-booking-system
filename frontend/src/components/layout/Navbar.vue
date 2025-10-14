<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const drawer = ref(false)

const links = [
  { label: 'Book Flight', to: '/booking' },
  { label: 'Manage Booking', to: '/manage' },
]
</script>

<template>
  <v-app-bar flat color="white" class="shadow-sm px-6">
    <!-- Left: Logo + Brand -->
    <div class="mx-16 w-full flex items-center">
      <RouterLink to="/" class="flex items-center gap-3 mr-6">
        <v-img
            src="/logo.png"
            alt="Manila Airways"
            width="40"
            height="40"
            cover
            class="rounded-lg"
        />
        <div class="leading-tight ml-2">
          <div class="font-semibold text-gray-900 text-lg">Manila Airways</div>
          <div class="text-[11px] text-gray-500">Your Journey Begins here</div>
        </div>
      </RouterLink>

      <v-spacer/>

      <!-- Right: Nav Links + Login (DESKTOP ONLY) -->
      <div class="d-none d-md-flex items-center gap-2">
        <v-btn
            v-for="link in links"
            :key="link.to"
            :to="link.to"
            variant="text"
            class="text-gray-800 hover:text-blue-500 font-medium text-base px-4"
        >
          {{ link.label }}
        </v-btn>
        <v-btn
            to="/login"
            class="bg-primary font-semibold text-white px-4 bg-blue-500 hover:bg-blue-600 rounded-lg shadow-md ml-2 transition-transform transform hover:scale-105"
        >
          Login &amp; Registration
        </v-btn>
      </div>
    </div>

    <!-- Hamburger icon (MOBILE ONLY) -->
    <v-app-bar-nav-icon class="d-md-none" @click="drawer = true" />
  </v-app-bar>

  <!-- Mobile Drawer -->
  <v-navigation-drawer
      v-model="drawer"
      temporary
      location="right"
  >
    <v-list density="comfortable">
      <v-list-item
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          @click="drawer = false"
      >
        <v-list-item-title>{{ link.label }}</v-list-item-title>
      </v-list-item>

      <v-divider class="my-2" />

      <v-list-item to="/login" @click="drawer = false">
        <v-list-item-title class="font-medium text-blue-600">
          Login &amp; Registration
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
