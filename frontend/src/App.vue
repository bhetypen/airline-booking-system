<script setup>
import Navbar from './components/layout/Navbar.vue'
</script>

<template>
  <v-app>
    <Navbar />
    <v-main>
      <router-view />
    </v-main>
    <v-footer app class="justify-center py-4 bg-primary">
      <span class="text-sm text-shades-white">© 2025 Manila Airways</span>
    </v-footer>
  </v-app>
</template>
