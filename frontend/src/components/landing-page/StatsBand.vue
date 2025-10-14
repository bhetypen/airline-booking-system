<script setup>
const stats = [
  { value: '150+', label: 'Global Destinations' },
  { value: '2M+',  label: 'Happy Passengers' },
  { value: '96%',  label: 'On-Time Performance' },
  { value: '24/7', label: 'Customer Support' },
]
</script>

<template>
  <section
      class="bg-gradient-to-r from-blue-600 to-sky-500 text-white"
      aria-label="Airline performance statistics"
  >
    <div class="max-w-6xl mx-auto px-6 py-14">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-y-10 md:gap-8 text-center">
        <div v-for="s in stats" :key="s.label" class="space-y-2">
          <div class="text-4xl md:text-5xl font-extrabold leading-none">
            {{ s.value }}
          </div>
          <div class="text-white/90 text-base md:text-lg font-medium">
            {{ s.label }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
