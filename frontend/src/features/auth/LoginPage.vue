<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useLogin } from "./useAuth";

const email = ref("");
const password = ref("");
const login = useLogin();
const router = useRouter();
const route = useRoute();

async function submit() {
  try {
    const res = await login.mutateAsync({ email: email.value, password: password.value });
    console.log("Login success:", res);
    await router.push(route.query.redirect || "/account");
  } catch (e) {
    alert(e?.response?.data?.error || e.message || "Login failed");
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
            <h1 class="text-2xl font-bold text-slate-900">Login</h1>
            <p class="text-slate-500 mt-1">Welcome back!</p>
          </div>

          <!-- Email -->
          <v-text-field
              v-model="email"
              label="Email Address"
              placeholder="hello@example.com"
              type="email"
              variant="outlined"
              density="comfortable"
              prepend-inner-icon="mdi-email"
              hide-details="auto"
              class="mb-3"
          />

          <!-- Password + forgot -->
          <div class="flex items-center justify-between -mb-1">
            <span class="text-[13px] text-slate-700">Password</span>
            <router-link to="#" class="text-[13px] text-sky-600 hover:underline">
              Forgot Password?
            </router-link>
          </div>
          <v-text-field
              v-model="password"
              type="password"
              placeholder="••••••••"
              variant="outlined"
              density="comfortable"
              prepend-inner-icon="mdi-lock"
              hide-details="auto"
              class="mt-1 mb-2"
          />

          <!-- Keep signed in -->
          <label class="inline-flex items-center gap-2 text-[13px] text-slate-700 mb-4 select-none">
            <input type="checkbox" checked
                   class="h-4 w-4 rounded border-slate-300 accent-sky-600" />
            Keep me signed in
          </label>

          <!-- Submit -->
          <v-btn
              color="primary"
              block
              class="py-3 mb-6"
              :loading="login.isLoading"
              :disabled="login.isLoading"
              @click="submit"
          >
            {{ login.isLoading ? "Signing in..." : "Login" }}
          </v-btn>


          <!-- Divider -->
          <div class="flex items-center gap-3 my-4">
            <div class="h-px bg-slate-200 flex-1"></div>
            <span class="text-xs text-slate-400">or sign in with</span>
            <div class="h-px bg-slate-200 flex-1"></div>
          </div>

          <!-- Google (disabled for now) -->
          <v-btn
              block
              variant="outlined"
              class="bg-white text-slate-700 border-slate-300 py-3"
              disabled
              title="Google sign-in will be added later"
          >
            <img
                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                alt=""
                class="h-5 w-5 mr-2"
            />
            Continue with Google
          </v-btn>

          <!-- Register link -->
          <p class="text-center text-sm text-slate-500 mt-6">
            Don't have an account?
            <router-link to="/register" class="text-sky-600 hover:underline">
              Sign up here
            </router-link>
          </p>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

