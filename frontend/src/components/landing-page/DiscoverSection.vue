<script setup>
/* UI only */
const cards = [
  {
    img: '/image-one.png',
    title: 'Free  drink on order',
    text: 'Pre-order your tropical moment now and receive a complimentary drink on your next flight.',
  },
  {
    img: '/image-two.png',
    title: 'Travel Id',
    text: 'Unlimited access to Manila Airways services and Manila Miles rewards program',
  },
  {
    img: '/image-three.png',
    title: 'Benefits at Avix',
    text: 'Get up to 15% discount and triple miles on your car rental when you book through us.',
  },
  {
    img: '/image-four.png',
    title: 'Free messaging',
    text: 'Benefit from our SkyConnect portal with Travel ID and chat above the clouds',
  },
]
</script>

<template>
  <section class="bg-white py-10 md:py-14">
    <div class="max-w-6xl mx-auto px-6">

      <!-- Top 2 Feature Banners -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Banner 1 -->
        <div class="relative rounded-xl overflow-hidden shadow-[0_6px_20px_rgba(0,0,0,0.08)]">
          <img
              src="/discover-one.png"
              alt="Manila Premium"
              class="h-60 md:h-64 w-full object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/20 via-black/0 to-transparent"></div>
          <div class="absolute left-5 top-5 text-white">
            <h3 class="text-xl md:text-2xl font-semibold">Manila Premium</h3>
            <p class="text-white/90 text-sm">The innovative comfort experience</p>
          </div>
        </div>

        <!-- Banner 2 -->
        <div class="relative rounded-xl overflow-hidden shadow-[0_6px_20px_rgba(0,0,0,0.08)]">
          <img
              src="/discover-two.png"
              alt="Simply more for you"
              class="h-60 md:h-64 w-full object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/20 via-black/0 to-transparent"></div>
          <div class="absolute left-5 top-5 text-white">
            <h3 class="text-xl md:text-2xl font-semibold">Simply more for you</h3>
            <p class="text-white/90 text-sm">Add extras to your booking</p>
          </div>
        </div>
      </div>

      <!-- Heading -->
      <h2 class="text-3xl md:text-4xl font-extrabold text-[#1e68ff] mt-10 md:mt-12 mb-6">
        Discover further Topics
      </h2>

      <!-- Bottom 4 Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
            v-for="(c, i) in cards"
            :key="i"
            class="rounded-lg overflow-hidden bg-white shadow-[0_6px_20px_rgba(0,0,0,0.06)] pa-4"
        >
          <img :src="c.img" :alt="c.title" class="h-44 w-full object-cover rounded-lg" />
          <div class="p-5">
            <h3 class="text-[#0a65ff] font-semibold text-lg mb-2">
              {{ c.title }}
            </h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              {{ c.text }}
            </p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
