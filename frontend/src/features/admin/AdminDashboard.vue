<script setup>
import AdminSidebar from "../../components/layout/AdminSidebar.vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../../store/authStore.js";

const router = useRouter();
const auth = useAuthStore();
function handleSignOut() {
  auth.logout();
  router.push("/login");
}

/* KPIs */
const kpis = [
  { title: "Total Bookings", value: "$1k", change: "+8% from yesterday", icon: "mdi-calendar-check", color: "bg-red-100 text-red-600" },
  { title: "Total Revenue", value: "$67,430", change: "+5% from yesterday", icon: "mdi-cash", color: "bg-orange-100 text-orange-600" },
  { title: "Active Flights", value: "80", change: "+1.2% from yesterday", icon: "mdi-airplane", color: "bg-green-100 text-green-600" },
  { title: "New Customers", value: "100", change: "0.5% from yesterday", icon: "mdi-account-plus", color: "bg-purple-100 text-purple-600" },
];

/* ApexCharts options */
const visitorOptions = {
  chart: { type: "line", height: 250, toolbar: { show: false } },
  stroke: { curve: "smooth", width: 3 },
  colors: ["#8b5cf6", "#ef4444", "#22c55e"],
  xaxis: { categories: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"] },
  legend: { position: "top" }
};
const visitorSeries = [
  { name: "Loyal Customers", data: [200,300,250,350,400,320,300,280,260,240,220,200] },
  { name: "New Customers", data: [150,180,200,220,300,350,400,380,360,300,280,250] },
  { name: "Unique Customers", data: [100,200,220,280,320,360,340,320,300,280,260,240] },
];

const revenueOptions = {
  chart: { type: "bar", height: 250, toolbar: { show: false } },
  plotOptions: { bar: { borderRadius: 4, columnWidth: "45%" } },
  colors: ["#3b82f6", "#10b981"],
  xaxis: { categories: ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"] },
};
const revenueSeries = [
  { name: "Online Sales", data: [10,15,25,12,14,18,20] },
  { name: "Offline Sales", data: [12,10,8,20,16,14,10] },
];

const destinations = [
  { name: "Manila Terminal 3", popularity: 45, color: "bg-blue-500" },
  { name: "VIE Vienna, Austria", popularity: 29, color: "bg-green-400" },
  { name: "Singapore, Singapore", popularity: 18, color: "bg-purple-400" },
  { name: "Seoul, South Korea", popularity: 25, color: "bg-orange-400" },
];
</script>

<template>
  <div class="min-h-screen bg-[#f6f9ff] flex">
    <!-- Sidebar -->
    <AdminSidebar @signout="handleSignOut" />

    <!-- Main Content -->
    <div class="flex-1">
      <!-- Top Bar -->
      <div class="h-[72px] bg-white border-b border-slate-200 px-6 flex items-center justify-between">
        <h1 class="text-2xl font-bold text-slate-900">Dashboard</h1>
        <div class="flex items-center gap-4">
          <v-text-field
              variant="solo"
              density="comfortable"
              class="w-[400px] rounded-full !bg-slate-50"
              prepend-inner-icon="mdi-magnify"
              placeholder="Search here..."
              hide-details
          />
          <v-btn icon class="bg-white rounded-full shadow">
            <v-icon>mdi-bell-outline</v-icon>
          </v-btn>
          <v-avatar size="40">
            <img src="https://i.pravatar.cc/100?img=12" alt="avatar" />
          </v-avatar>
        </div>
      </div>

      <!-- Body -->
      <div class="p-6 grid grid-cols-12 gap-6 pa-6">
        <!-- KPIs -->
        <div class="col-span-12 grid grid-cols-4 gap-6">
          <v-card
              v-for="kpi in kpis"
              :key="kpi.title"
              class="p-4 flex items-center gap-4"
          >
            <div :class="['pa-1', kpi.color]">
              <v-icon>{{ kpi.icon }}</v-icon>
            </div>
            <div class="pa-4">
              <div class="text-lg font-bold">{{ kpi.value }}</div>
              <div class="text-sm text-slate-500">{{ kpi.title }}</div>
              <div class="text-xs text-slate-400">{{ kpi.change }}</div>
            </div>
          </v-card>
        </div>

        <!-- Visitor Insights -->
        <div class="col-span-7">
          <v-card class="pa-4">
            <h2 class="font-semibold mb-3">Visitor Insights</h2>
            <apexchart type="line" height="260" :options="visitorOptions" :series="visitorSeries" />
          </v-card>
        </div>

        <!-- Revenue -->
        <div class="col-span-5">
          <v-card class="pa-4">
            <h2 class="font-semibold mb-3">Total Revenue</h2>
            <apexchart type="bar" height="260" :options="revenueOptions" :series="revenueSeries" />
          </v-card>
        </div>

        <!-- Top Destinations -->
        <div class="col-span-12">
          <v-card class="pa-4">
            <h2 class="font-semibold mb-3">Top Destinations</h2>
            <div class="space-y-3">
              <div
                  v-for="(d, i) in destinations"
                  :key="i"
                  class="flex items-center justify-between"
              >
                <div class="flex items-center gap-4">
                  <span class="w-6 text-slate-400">{{ String(i+1).padStart(2,'0') }}</span>
                  <span>{{ d.name }}</span>
                </div>
                <div class="flex-1 mx-4 bg-slate-100 rounded-full h-2">
                  <div :class="[d.color,'h-2 rounded-full']" :style="{ width: d.popularity+'%' }"></div>
                </div>
                <span class="text-slate-500">{{ d.popularity }}%</span>
              </div>
            </div>
          </v-card>
        </div>
      </div>
    </div>
  </div>
</template>
