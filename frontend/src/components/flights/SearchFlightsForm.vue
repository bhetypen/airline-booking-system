<script setup>
import { ref, computed, watch } from "vue";

// --- State Management ---
let tripType = ref("round");
const from = ref(null);
const to = ref(null);
const departDate = ref("");
const returnDate = ref("");

// Passenger state
const passengerDialog = ref(false);
const adults = ref(1);
const children = ref(0);
// Array to store children's Date of Birth (DOB) as strings (YYYY-MM-DD)
const childrenDOB = ref(Array(0).fill(''));

// --- Computed & Watchers ---

const cityOptions = [
  { title: "Select departure City", value: null, disabled: true },
  { title: "Manila (MNL)", value: "MNL" },
  { title: "Cebu (CEB)", value: "CEB" },
  { title: "Davao (DVO)", value: "DVO" },
  { title: "Clark (CRK)", value: "CRK" },
  { title: "Iloilo (ILO)", value: "ILO" },
];

const totalTravellers = computed(() => adults.value + children.value);
const isRoundTrip = computed(() => tripType.value === "round");

// Display summary for the Travellers field
const travellerSummary = computed(() => {
  let summary = '';
  if (adults.value > 0) {
    summary += `${adults.value} Adult${adults.value > 1 ? 's' : ''}`;
  }
  if (children.value > 0) {
    if (summary) summary += ', ';
    summary += `${children.value} Child${children.value > 1 ? 'ren' : ''}`;
  }
  return summary || '1 Adult';
});

// Validation check
const isFormValid = computed(() => {
  // Check main fields
  if (!from.value || !to.value || !departDate.value) return false;
  // Check return date for round trip
  if (isRoundTrip.value && !returnDate.value) return false;
  // Check all children have a DOB
  if (children.value > 0 && childrenDOB.value.some(dob => !dob)) return false;

  return true;
});

// Sync children count with DOB array
watch(children, (newCount) => {
  const currentDOBCount = childrenDOB.value.length;

  if (newCount > currentDOBCount) {
    const diff = newCount - currentDOBCount;
    for (let i = 0; i < diff; i++) {
      childrenDOB.value.push('');
    }
  } else if (newCount < currentDOBCount) {
    childrenDOB.value.splice(newCount);
  }
});

// --- Functions ---
function swapCities() {
  const a = from.value;
  from.value = to.value;
  to.value = a;
}

function searchFlights() {
  // Simple console log for demonstration
  console.log('Search initiated with parameters:', {
    tripType: tripType.value,
    from: from.value,
    to: to.value,
    departDate: departDate.value,
    returnDate: returnDate.value,
    adults: adults.value,
    childrenDOB: childrenDOB.value
  });
}
</script>

<template>
  <!-- Main container background -->
  <section class="bg-[#f4f9ff] py-16">
    <div class="max-w-5xl mx-auto px-4">
      <!-- Search Card (12px radius) -->
      <v-card class="rounded-[12px] shadow-2xl pa-10">
        <div class="p-8 md:p-12 space-y-8">

          <h2 class="text-3xl md:text-4xl font-extrabold text-[#1e68ff] mb-2">
            Search Flights
          </h2>

          <!-- Trip Type Selector -->
          <div class="mb-4">
            <!-- Container radius 12px -->
            <div class="bg-gray-100 rounded-[12px] p-1 w-full md:w-[420px]">
              <div class="grid grid-cols-2 gap-1">
                <!-- Button radius 8px -->
                <v-btn
                    :color="isRoundTrip ? 'primary' : 'transparent'"
                    class="rounded-[8px] !font-semibold transition-colors"
                    :class="{ '!text-white': isRoundTrip, 'text-gray-600': !isRoundTrip }"
                    variant="flat"
                    block
                    @click="tripType = 'round'"
                >
                  Round-trip
                </v-btn>
                <!-- Button radius 8px -->
                <v-btn
                    :color="!isRoundTrip ? 'primary' : 'transparent'"
                    class="rounded-[8px] !font-semibold transition-colors"
                    :class="{ '!text-white': !isRoundTrip, 'text-gray-600': isRoundTrip }"
                    variant="flat"
                    block
                    @click="tripType = 'one'"
                >
                  One-way
                </v-btn>
              </div>
            </div>
          </div>

          <!-- From / To Fields -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
            <div>
              <div class="text-sm text-gray-700 mb-2">From</div>
              <!-- v-select used for city list functionality, with 8px field radius (via CSS) -->
              <v-select
                  v-model="from"
                  :items="cityOptions"
                  item-title="title"
                  item-value="value"
                  variant="outlined"
                  density="comfortable"
                  placeholder="Select departure City"
                  class="custom-field"
                  hide-details
                  prepend-inner-icon="mdi-map-marker-outline"
              />
            </div>

            <!-- Swap Button -->
            <div class="hidden md:block absolute left-1/2 -translate-x-1/2 top-9 z-10">
              <div
                  class="w-10 h-10 rounded-full bg-white border flex items-center justify-center shadow cursor-pointer"
                  @click="swapCities"
              >
                <v-icon size="22" color="#1e68ff">mdi-swap-horizontal</v-icon>
              </div>
            </div>

            <div>
              <div class="text-sm text-gray-700 mb-2">To</div>
              <!-- v-select used for city list functionality, with 8px field radius (via CSS) -->
              <v-select
                  v-model="to"
                  :items="cityOptions"
                  item-title="title"
                  item-value="value"
                  variant="outlined"
                  density="comfortable"
                  placeholder="Select arrival City"
                  class="custom-field"
                  hide-details
                  prepend-inner-icon="mdi-map-marker-outline"
              />
            </div>
          </div>

          <!-- Date Fields -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div class="text-sm text-gray-700 mb-2">Departure Date</div>
              <!-- 8px field radius (via CSS) -->
              <v-text-field
                  v-model="departDate"
                  type="date"
                  variant="outlined"
                  density="comfortable"
                  placeholder="MM/DD/YYYY"
                  class="custom-field"
                  hide-details
                  append-inner-icon="mdi-calendar-blank-outline"
              />
            </div>
            <div>
              <div class="text-sm text-gray-700 mb-2">Return Date</div>
              <!-- 8px field radius (via CSS) -->
              <v-text-field
                  v-model="returnDate"
                  :disabled="!isRoundTrip"
                  type="date"
                  variant="outlined"
                  density="comfortable"
                  placeholder="MM/DD/YYYY"
                  class="custom-field"
                  :class="{ 'field-disabled': !isRoundTrip }"
                  hide-details
                  append-inner-icon="mdi-calendar-blank-outline"
              />
            </div>
          </div>

          <!-- Travellers Field (Opens Dialog) -->
          <div>
            <div class="text-sm text-gray-700 mb-2">Travellers</div>
            <!-- 8px field radius (via CSS) -->
            <v-text-field
                :model-value="travellerSummary"
                variant="outlined"
                density="comfortable"
                placeholder="1 Adult"
                class="custom-field cursor-pointer"
                hide-details
                prepend-inner-icon="mdi-account-group-outline"
                append-inner-icon="mdi-menu-down"
                readonly
                @click="passengerDialog = true"
            />
          </div>

          <!-- CTA Button (8px radius) -->
          <div class="pt-4">
            <v-btn
                color="primary"
                size="xlarge"
                class="w-full md:w-[420px] font-semibold rounded-[8px] py-4"
                :disabled="!isFormValid"
                @click="searchFlights"
            >
              <span class="flex items-center justify-center w-full h-full">
                Search Manila Airways Flight
                <v-icon end>mdi-arrow-right</v-icon>
              </span>
            </v-btn>
          </div>

          <p class="text-center text-xs text-gray-500 pt-1">
            Please complete all required fields to search
          </p>
        </div>
      </v-card>
    </div>
  </section>

  <!-- Passenger Selection Dialog (12px radius) -->
  <v-dialog
      v-model="passengerDialog"
      max-width="450"
      transition="dialog-bottom-transition"
  >
    <v-card class="rounded-[12px]">
      <v-card-title class="text-h6 font-weight-bold pt-4 pb-2">
        Select Passengers
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text class="py-4">

        <!-- Adult Counter -->
        <div class="d-flex align-center justify-space-between mb-4">
          <div>
            <div class="font-weight-medium">Adults</div>
            <div class="text-caption text-grey-darken-1">Aged 12 and above</div>
          </div>
          <div class="d-flex align-center">
            <v-btn
                icon="mdi-minus"
                size="small"
                variant="outlined"
                :disabled="adults <= 1"
                @click="adults--"
            />
            <span class="mx-3 font-weight-bold text-h6" style="width: 24px; text-align: center;">{{ adults }}</span>
            <v-btn
                icon="mdi-plus"
                size="small"
                variant="outlined"
                :disabled="totalTravellers >= 9"
                @click="adults++"
            />
          </div>
        </div>

        <v-divider class="my-4"></v-divider>

        <!-- Children Counter -->
        <div class="d-flex align-center justify-space-between mb-4">
          <div>
            <div class="font-weight-medium">Children</div>
            <div class="text-caption text-grey-darken-1">Aged 2 to 11 (at time of travel)</div>
          </div>
          <div class="d-flex align-center">
            <v-btn
                icon="mdi-minus"
                size="small"
                variant="outlined"
                :disabled="children <= 0"
                @click="children--"
            />
            <span class="mx-3 font-weight-bold text-h6" style="width: 24px; text-align: center;">{{ children }}</span>
            <v-btn
                icon="mdi-plus"
                size="small"
                variant="outlined"
                :disabled="totalTravellers >= 9"
                @click="children++"
            />
          </div>
        </div>

        <!-- Children DOB Input -->
        <v-expand-transition>
          <div v-if="children > 0" class="mt-4 pt-2 border-t">
            <div class="font-weight-medium mb-3 mt-2">Children's Date of Birth (DOB)</div>

            <div v-for="n in children" :key="n" class="mb-4">
              <!-- Field uses 8px radius from custom CSS -->
              <v-text-field
                  v-model="childrenDOB[n - 1]"
                  type="date"
                  :label="`Child ${n} DOB`"
                  variant="outlined"
                  density="comfortable"
                  hide-details
                  :max="new Date().toISOString().split('T')[0]"
                  class="custom-field-dob"
              />
            </div>
          </div>
        </v-expand-transition>

      </v-card-text>
      <v-card-actions class="pb-4 pr-6">
        <v-spacer></v-spacer>
        <v-btn
            color="primary"
            variant="flat"
            class="rounded-[8px]"
            @click="passengerDialog = false"
        >
          Done
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style scoped>
/*
  Custom Styles to enforce 8px field radius (as requested) when using variant="outlined"
  and ensure the border line is visible with a faint grey color (gray-200).
*/

/* Enforce 8px radius on the field outline for all custom fields (including DOB) */
.custom-field :deep(.v-field--variant-outlined .v-field__outline),
.custom-field-dob :deep(.v-field--variant-outlined .v-field__outline) {
  /* 8px Radius */
  border-radius: 8px !important;

  /* Faint Grey Line: Enforce gray-200 for visibility */
  border-width: 1px !important;
  border-color: #e5e7eb !important; /* faint gray-200 */
}

/* Ensure inner field area also has the 8px radius and removes any conflicting shadow */
.custom-field :deep(.v-field),
.custom-field-dob :deep(.v-field) {
  border-radius: 8px !important;
  box-shadow: none !important;
}

/* Change focus state to use the primary color outline */
.custom-field :deep(.v-field--focused .v-field__outline),
.custom-field-dob :deep(.v-field--focused .v-field__outline) {
  border-color: #1e68ff !important; /* Primary blue on focus */
}

/* Ensure icons use the primary color (blue) for consistency with the design */
.custom-field :deep(.v-icon) {
  color: #1e68ff !important;
}

/* Style for disabled return date field */
.field-disabled :deep(.v-field) {
  background-color: #f9fafb !important; /* light gray bg for disabled */
  cursor: not-allowed;
  opacity: 0.8;
}
.field-disabled :deep(.v-field--variant-outlined .v-field__outline) {
  border-color: #e5e7eb !important; /* gray-200 border */
}
.field-disabled :deep(.v-field__input) {
  color: #94a3b8; /* gray-400 text color */
}
</style>
