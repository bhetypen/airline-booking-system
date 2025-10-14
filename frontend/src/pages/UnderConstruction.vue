<template>
  <v-app class="under-construction-page">
    <v-container
        fluid
        class="fill-height d-flex flex-column justify-center align-center text-center px-6"
    >
      <v-icon size="96" color="primary" class="mb-6">mdi-tools</v-icon>
      <h1 class="display-1 font-weight-bold mb-4">Under Construction</h1>
      <p class="subtitle-1 mb-6">
        We are currently working on this page. Please check back soon!
      </p>
      <v-btn
          color="primary"
          large
          class="bg-primary font-semibold text-white px-4 bg-blue-500 hover:bg-blue-600 rounded-lg shadow-md ml-2 transition-transform transform hover:scale-105"
          @click="$router.push('/')"
      >
        Go to Home
      </v-btn>
    </v-container>
  </v-app>
</template>

<script setup>
</script>

<style scoped>
.under-construction-page {
  background: linear-gradient(135deg, #e3f2fd, #bbdefb);
  height: 100vh;
  min-height: 500px;
  font-family: 'Montserrat', sans-serif;
}
</style>
