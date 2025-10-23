<!-- src/components/layout/AdminSidebar.vue -->
<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const props = defineProps({
  links: {
    type: Array,
    default: () => [
      { label: "Dashboard",   to: "/admin",            icon: "mdi-view-dashboard" },
      { label: "Leaderboard", to: "/admin/leaderboard", icon: "mdi-trophy" },
      { label: "Flights",     to: "/admin/flights",     icon: "mdi-airplane" },
      { label: "Users",       to: "/admin/users",       icon: "mdi-account-multiple" },
      { label: "Bookings",    to: "/admin/bookings",    icon: "mdi-clipboard-text" },
      { label: "Settings",    to: "/admin/settings",    icon: "mdi-cog" },
    ],
  },
  signOutTo: { type: [String, Object], default: "/login" },
});

const emit = defineEmits(["signout"]);
const route = useRoute();
const isActive = (to) => route.matched.some((m) => m.path === to) || route.path === to;
</script>

<template>
  <v-navigation-drawer
      permanent
      width="260"
      class="!bg-[#eaf3ff] border-r border-slate-200"
  >
    <div class="px-4 py-5 flex items-center gap-3">
      <v-img src="/logo.png" width="40" height="40" class="rounded-lg" />
      <div class="leading-tight">
        <div class="font-semibold text-slate-900">Manila Airways</div>
        <div class="text-[11px] text-slate-600">Your Journey Begins here</div>
      </div>
    </div>

    <v-list density="comfortable" nav>
      <v-list-item
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          rounded="lg"
          class="mx-3 my-1"
          :class="isActive(link.to) ? 'bg-blue-50' : ''"
      >
        <template #prepend>
          <v-icon>{{ link.icon }}</v-icon>
        </template>
        <v-list-item-title class="font-medium">{{ link.label }}</v-list-item-title>
      </v-list-item>
    </v-list>

    <div class="mt-auto px-3 pb-4">
      <v-btn
          block
          variant="outlined"
          rounded="lg"
          @click="$emit('signout')"
      >
        <v-icon start>mdi-logout</v-icon> Sign Out
      </v-btn>
    </div>
  </v-navigation-drawer>
</template>

<style scoped>
:deep(.v-list-item--active) { background: #dbeafe !important; }
</style>
