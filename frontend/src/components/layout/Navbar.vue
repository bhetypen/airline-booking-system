<script setup>
import { ref, computed } from "vue";
import { RouterLink, useRouter } from "vue-router";
import { useAuthStore } from "../../store/authStore.js";

const drawer = ref(false);
const router = useRouter();
const auth = useAuthStore();

const links = [
  { label: "Book Flight", to: "/booking" },
  { label: "Manage Booking", to: "/manage" },
];

// Computed auth state
const isLoggedIn = computed(() => auth.isAuthenticated);
const isAdmin = computed(() => auth.isAdmin);

// Logout handler
function handleLogout() {
  auth.logout(); // assuming your authStore has a logout() action
  router.push("/");
}
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

      <v-spacer />

      <!-- Right: Nav Links + Auth Buttons (DESKTOP ONLY) -->
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

        <!-- Show when NOT logged in -->
        <v-btn
            v-if="!isLoggedIn"
            to="/login"
            class="bg-primary font-semibold text-white px-4 bg-blue-500 hover:bg-blue-600 rounded-lg shadow-md ml-2 transition-transform transform hover:scale-105"
        >
          Login &amp; Registration
        </v-btn>

        <!-- Show when logged in -->
        <template v-else>
          <v-btn
              v-if="isAdmin"
              to="/admin"
              class="text-gray-800 hover:text-blue-500 font-medium text-base px-4"
          >
            Admin Dashboard
          </v-btn>

          <v-btn
              to="/account"
              class="text-gray-800 hover:text-blue-500 font-medium text-base px-4"
          >
            My Account
          </v-btn>

          <v-btn
              @click="handleLogout"
              class="bg-red-500 hover:bg-red-600 text-black font-semibold px-4 rounded-lg shadow-md ml-2 transition-transform transform hover:scale-105"
          >
            Logout
          </v-btn>
        </template>
      </div>
    </div>

    <!-- Hamburger icon (MOBILE ONLY) -->
    <v-app-bar-nav-icon class="d-md-none" @click="drawer = true" />
  </v-app-bar>

  <!-- Mobile Drawer -->
  <v-navigation-drawer v-model="drawer" temporary location="right">
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

      <!-- Mobile auth buttons -->
      <v-list-item
          v-if="!isLoggedIn"
          to="/login"
          @click="drawer = false"
      >
        <v-list-item-title class="font-medium text-blue-600">
          Login &amp; Registration
        </v-list-item-title>
      </v-list-item>

      <template v-else>
        <v-list-item
            v-if="isAdmin"
            to="/admin"
            @click="drawer = false"
        >
          <v-list-item-title>Admin Dashboard</v-list-item-title>
        </v-list-item>

        <v-list-item
            to="/account"
            @click="drawer = false"
        >
          <v-list-item-title>My Account</v-list-item-title>
        </v-list-item>

        <v-list-item
            @click="
            handleLogout();
            drawer = false;
          "
        >
          <v-list-item-title class="text-red-600 font-medium">Logout</v-list-item-title>
        </v-list-item>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>
