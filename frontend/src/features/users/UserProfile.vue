<!-- src/pages/UserProfile.vue -->
<script setup>
import { ref, computed } from "vue";
import { useMe } from "../../features/auth/useAuth";

const { data: me, isLoading, isError, error } = useMe();

// dialog + preview-only form
const showEdit = ref(false);
const form = ref({ firstName: "", lastName: "", email: "", isAdmin: false });

const fullName = computed(() =>
    me?.value ? `${me.value.firstName} ${me.value.lastName}`.trim() : ""
);

function openEdit() {
  if (me?.value) {
    form.value = {
      firstName: me.value.firstName || "",
      lastName: me.value.lastName || "",
      email: me.value.email || "",
      isAdmin: !!me.value.isAdmin,
    };
  }
  showEdit.value = true;
}
</script>

<template>
  <div class="min-h-screen bg-slate-50">
    <!-- Top bar -->
    <header class="sticky top-0 z-10 bg-white/80 backdrop-blur border-b border-slate-200">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <h1 class="text-xl font-semibold text-slate-900">My Profile</h1>
        <v-btn color="primary" class="rounded-xl" prepend-icon="mdi-pencil" @click="openEdit" :disabled="isLoading || isError">
          Edit Profile
        </v-btn>
      </div>
    </header>

    <main class="max-w-5xl mx-auto px-4 sm:px-6 py-8">
      <v-card elevation="4" class="rounded-2xl overflow-hidden">
        <v-card-text class="p-6 sm:p-8">
          <!-- Loading / Error -->
          <div v-if="isLoading" class="animate-pulse space-y-4">
            <div class="h-24 w-24 bg-slate-200 rounded-full"></div>
            <div class="h-4 bg-slate-200 rounded w-1/3"></div>
            <div class="grid sm:grid-cols-2 gap-4 pt-2">
              <div class="h-12 bg-slate-200 rounded"></div>
              <div class="h-12 bg-slate-200 rounded"></div>
              <div class="h-12 bg-slate-200 rounded"></div>
              <div class="h-12 bg-slate-200 rounded"></div>
            </div>
          </div>

          <div v-else-if="isError" class="text-rose-600">
            Error: {{ error?.message || "Failed to load your profile." }}
          </div>

          <!-- Profile content -->
          <template v-else-if="me">
            <div class="flex items-center gap-4">
              <img
                  class="h-24 w-24 rounded-full border border-slate-200 object-cover"
                  src="https://i.pravatar.cc/160?img=13"
                  alt="Avatar"
              />
              <div>
                <p class="text-sm text-slate-500">Hello Traveler</p>
                <h2 class="text-2xl font-semibold text-slate-900">{{ fullName }}</h2>
                <p class="text-slate-600">{{ me.email }}</p>
              </div>
            </div>

            <div class="grid sm:grid-cols-2 gap-4 mt-8">
              <v-text-field
                  label="First name"
                  variant="outlined"
                  density="comfortable"
                  :model-value="me.firstName"
                  prepend-inner-icon="mdi-account"
                  readonly
              />
              <v-text-field
                  label="Last name"
                  variant="outlined"
                  density="comfortable"
                  :model-value="me.lastName"
                  prepend-inner-icon="mdi-account"
                  readonly
              />
              <v-text-field
                  label="Email"
                  variant="outlined"
                  density="comfortable"
                  :model-value="me.email"
                  prepend-inner-icon="mdi-email"
                  readonly
              />
              <v-text-field
                  label="Role"
                  variant="outlined"
                  density="comfortable"
                  :model-value="me.isAdmin ? 'Admin' : 'User'"
                  prepend-inner-icon="mdi-shield-account"
                  readonly
              />
            </div>

            <div class="flex justify-end mt-6">
              <v-btn color="primary" class="rounded-xl" prepend-icon="mdi-pencil" @click="openEdit">
                Edit Profile
              </v-btn>
            </div>
          </template>
        </v-card-text>
      </v-card>
    </main>

    <!-- Edit Profile Modal (design only) -->
    <v-dialog v-model="showEdit" max-width="540">
      <v-card class="rounded-2xl">
        <v-card-title class="px-6 py-4">
          <div class="flex items-center justify-between w-full">
            <span class="font-semibold">Edit Profile</span>
            <v-btn icon="mdi-close" variant="text" @click="showEdit = false" />
          </div>
        </v-card-title>

        <v-divider />

        <v-card-text class="px-6 py-5">
          <div class="flex items-center gap-4 mb-5">
            <img
                class="h-16 w-16 rounded-full border border-slate-200 object-cover"
                src="https://i.pravatar.cc/128?img=13"
                alt="Avatar"
            />
            <div class="text-xs text-slate-500">Profile photo uploads coming soon.</div>
          </div>

          <div class="grid sm:grid-cols-2 gap-4">
            <v-text-field
                v-model="form.firstName"
                label="First name"
                variant="outlined"
                density="comfortable"
                prepend-inner-icon="mdi-account"
            />
            <v-text-field
                v-model="form.lastName"
                label="Last name"
                variant="outlined"
                density="comfortable"
                prepend-inner-icon="mdi-account"
            />
            <v-text-field
                v-model="form.email"
                label="Email"
                type="email"
                variant="outlined"
                density="comfortable"
                prepend-inner-icon="mdi-email"
                class="sm:col-span-2"
            />
            <v-select
                v-model="form.isAdmin"
                :items="[{ title: 'User', value: false }, { title: 'Admin', value: true }]"
                label="Role"
                variant="outlined"
                density="comfortable"
                prepend-inner-icon="mdi-shield-account"
                class="sm:col-span-2"
            />
          </div>
        </v-card-text>

        <v-divider />

        <v-card-actions class="px-6 py-4">
          <v-spacer />
          <v-btn variant="text" class="rounded-xl" @click="showEdit = false">Cancel</v-btn>
          <!-- Design only; disabled -->
          <v-btn color="primary" class="rounded-xl" prepend-icon="mdi-content-save" disabled>
            Save (coming soon)
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<style scoped>
:deep(.v-field) { border-radius: 0.75rem; } /* rounded-xl on Vuetify inputs */
</style>
