<script setup>
import { computed } from "vue";
import { useMe } from "../auth/useAuth.js";

import UserProfile from "../users/UserProfile.vue";
import AdminDashboard from "../admin/AdminDashboard.vue";

const { data: me, isLoading, isError, error } = useMe();
const isAdmin = computed(() => !!me?.value?.isAdmin);
</script>

<template>
  <div class="min-h-screen">
    <div v-if="isLoading" class="flex items-center justify-center h-[60vh]">
      <v-progress-circular indeterminate size="36" />
    </div>

    <div v-else-if="isError" class="max-w-lg mx-auto mt-10 p-4 bg-rose-50 text-rose-700 rounded-xl">
      Error loading account: {{ error?.message || "Unknown error" }}
    </div>

    <component v-else :is="isAdmin ? AdminDashboard : UserProfile" />
  </div>
</template>
