<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useLogin } from "../../features/auth/useAuth";

// --- Login state (real) ---
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

// --- Find Booking modal (UI only) ---
const showFind = ref(false);
const bookingCode = ref("");
const lastName = ref("");
function openFind() {
  bookingCode.value = "";
  lastName.value = "";
  showFind.value = true;
}
</script>

<template>
  <div class="min-h-[90vh] bg-[#f4f9fd]">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 pt-10 pb-16">
      <!-- Title -->
      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold text-slate-900">Manage Your Booking</h1>
        <p class="text-slate-600 mt-2">
          Access your booking details using your account or booking confirmation code
        </p>
      </div>

      <!-- Two cards -->
      <div class="grid md:grid-cols-2 gap-6">
        <!-- Login card -->
        <v-card elevation="3" class="rounded-2xl">
          <v-card-text class="p-6 sm:p-7">
            <div class="flex flex-col items-center">
              <div class="h-12 w-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-3">
                <v-icon>mdi-account</v-icon>
              </div>
              <h3 class="text-lg font-semibold text-slate-800">Login to Your Account</h3>
              <p class="text-xs text-slate-500 text-center mt-1 mb-5">
                Access all your bookings and manage your account
              </p>
            </div>

            <v-text-field
                v-model="email"
                type="email"
                label="E-mail"
                placeholder="example@email.com"
                variant="outlined"
                density="comfortable"
                prepend-inner-icon="mdi-email-outline"
                hide-details="auto"
                class="mb-3"
            />
            <v-text-field
                v-model="password"
                type="password"
                label="Password"
                placeholder="************"
                variant="outlined"
                density="comfortable"
                prepend-inner-icon="mdi-lock-outline"
                append-inner-icon="mdi-eye-off-outline"
                hide-details="auto"
                class="mb-3"
            />

            <label class="inline-flex items-center gap-2 text-[13px] text-slate-700 mb-4 select-none">
              <input type="checkbox" checked class="h-4 w-4 rounded border-slate-300 accent-sky-600" />
              Keep me signed in
            </label>

            <v-btn
                color="primary"
                block
                class="rounded-full py-3"
                :loading="login.isLoading"
                :disabled="login.isLoading"
                @click="submit"
            >
              {{ login.isLoading ? "Signing in..." : "Login to Account" }}
            </v-btn>

            <!-- Divider -->
            <div class="flex items-center gap-3 my-4">
              <div class="h-px bg-slate-200 flex-1"></div>
              <span class="text-xs text-slate-400">or</span>
              <div class="h-px bg-slate-200 flex-1"></div>
            </div>

            <!-- Google disabled -->
            <v-btn block variant="outlined" class="bg-white text-slate-700 border-slate-300 py-3" disabled>
              <img
                  src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                  alt=""
                  class="h-5 w-5 mr-2"
              />
              Continue with Google
            </v-btn>

            <p class="text-center text-xs text-slate-500 mt-4">
              Don’t have an account?
              <router-link to="/register" class="text-sky-600 hover:underline">Create account</router-link>
            </p>
          </v-card-text>
        </v-card>

        <!-- Find booking card -->
        <v-card elevation="3" class="rounded-2xl">
          <v-card-text class="p-6 sm:p-7">
            <div class="flex flex-col items-center">
              <div class="h-12 w-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-3">
                <v-icon>mdi-airplane</v-icon>
              </div>
              <h3 class="text-lg font-semibold text-slate-800">Find Your Booking</h3>
              <p class="text-xs text-slate-500 text-center mt-1 mb-5">
                Access a specific booking using your confirmation code
              </p>
            </div>

            <p class="text-[13px] text-slate-600 mb-3">
              Enter your booking confirmation code and last name to access the booking details
            </p>

            <v-btn color="primary" block class="rounded-full py-3" @click="openFind">
              Enter booking code
            </v-btn>

            <p class="text-[11px] text-slate-400 mt-4 text-center">
              Your booking confirmation code was sent to your email after purchase
            </p>
          </v-card-text>
        </v-card>
      </div>
    </div>

    <!-- Find Booking Modal (UI only) -->
    <v-dialog v-model="showFind" max-width="520">
      <v-card class="rounded-2xl">
        <v-card-text class="p-6 sm:p-7">
          <div class="flex items-center justify-center gap-2 mb-4">
            <v-icon>mdi-magnify</v-icon>
            <h3 class="text-lg font-semibold text-slate-800">Find Your Booking</h3>
          </div>

          <div class="space-y-4">
            <v-text-field
                v-model="bookingCode"
                label="Booking confirmation Code"
                placeholder="ex. FX563B"
                variant="outlined"
                density="comfortable"
                prepend-inner-icon="mdi-form-textbox"
                hide-details="auto"
            />
            <v-text-field
                v-model="lastName"
                label="Last name"
                placeholder="Enter Last Name"
                variant="outlined"
                density="comfortable"
                prepend-inner-icon="mdi-account"
                hide-details="auto"
            />
          </div>

          <v-btn color="primary" block class="rounded-full py-3 mt-5" @click="showFind = false">
            Find Booking
          </v-btn>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<style scoped>
:deep(.v-field) { border-radius: 0.75rem; } /* match rounded inputs from figma */
</style>
