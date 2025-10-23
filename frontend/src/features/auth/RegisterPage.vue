<script setup>
import { ref } from "vue";
import { useRegister } from "./useAuth";


const firstName = ref("");
const lastName = ref("");
const email = ref("");
const mobileNo = ref("");
const password = ref("");

const reg = useRegister();
async function submit() {
  try {
    await reg.mutateAsync({
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      mobileNo: mobileNo.value,
      password: password.value
    });
    alert("Registered Successfully. Please log in.");
  } catch (e) {
    alert(e?.response?.data?.error || e.message || "Register failed");
  }
}
</script>

<template>
  <!-- Background -->
  <div
      class="min-h-screen relative bg-cover bg-center flex items-center justify-center"
      :style="{ backgroundImage: `url('/images/bg-register.png')` }"
  >
    <div class="absolute inset-0 bg-black/35"></div>

    <!-- Card -->
    <div class="relative z-10 w-[92%] max-w-md">
      <v-card elevation="8" class="rounded-2xl overflow-hidden bg-white/95 backdrop-blur">
        <v-card-text class="px-6 sm:px-8 py-7">
          <div class="text-center mb-5">
            <h1 class="text-2xl font-bold text-slate-900">Create Account</h1>
            <p class="text-slate-500 mt-1">Join Manila Airways today!</p>
          </div>

          <!-- First name -->
          <v-text-field
              v-model="firstName"
              label="First Name"
              placeholder="Juan"
              variant="outlined"
              density="comfortable"
              prepend-inner-icon="mdi-account"
              hide-details="auto"
              class="mb-3"
          />

          <!-- Last name -->
          <v-text-field
              v-model="lastName"
              label="Last Name"
              placeholder="Dela Cruz"
              variant="outlined"
              density="comfortable"
              prepend-inner-icon="mdi-account"
              hide-details="auto"
              class="mb-3"
          />

          <!-- Email -->
          <v-text-field
              v-model="email"
              type="email"
              label="Email Address"
              placeholder="hello@example.com"
              variant="outlined"
              density="comfortable"
              prepend-inner-icon="mdi-email"
              hide-details="auto"
              class="mb-3"
          />

          <!-- Mobile -->
          <v-text-field
              v-model="mobileNo"
              label="Mobile Number"
              placeholder="09xxxxxxxxx"
              variant="outlined"
              density="comfortable"
              prepend-inner-icon="mdi-phone"
              hide-details="auto"
              class="mb-3"
          />

          <!-- Password -->
          <v-text-field
              v-model="password"
              type="password"
              label="Password"
              placeholder="Minimum 8 characters"
              variant="outlined"
              density="comfortable"
              prepend-inner-icon="mdi-lock"
              hide-details="auto"
              class="mb-5"
          />

          <!-- Submit -->
          <v-btn
              color="success"
              block
              class="py-3 mb-6"
              :loading="reg.status === 'pending'"
              :disabled="reg.status === 'pending'"
              @click="submit"
          >
            {{ reg.status === 'pending' ? "Creating..." : "Register" }}
          </v-btn>

          <!-- Divider -->
          <div class="flex items-center gap-3 my-4">
            <div class="h-px bg-slate-200 flex-1"></div>
            <span class="text-xs text-slate-400">or</span>
            <div class="h-px bg-slate-200 flex-1"></div>
          </div>

          <!-- Already have account -->
          <p class="text-center text-sm text-slate-500 mt-4">
            Already have an account?
            <router-link to="/login" class="text-sky-600 hover:underline">
              Sign in here
            </router-link>
          </p>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>
