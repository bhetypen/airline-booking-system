// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "../store/authStore.js";

import RegisterPage from "../features/auth/RegisterPage.vue";

// Lazy imports
const LandingPage    = () => import("../pages/LandingPage.vue");
const LoginPage      = () => import("../features/auth/LoginPage.vue");
const BookingPage    = () => import("../features/bookings/BookingPage.vue");
const ManageBooking  = () => import("../features/bookings/ManageBookingPage.vue");

// Conditional wrapper (decides UserProfile or AdminDashboard)
const AccountWrapper = () => import("../features/wrapper/AccountWrapper.vue");

// Admin dashboard
const AdminDashboard = () => import("../features/admin/AdminDashboard.vue");

// 404 fallback
const NotFound = { template: '<div class="p-8">Page not found</div>' };

// -------------------- ROUTE GROUPS -------------------- //

// Public routes (no auth required)
const publicRoutes = [
    { path: "/", name: "home", component: LandingPage },
    { path: "/login", name: "login", component: LoginPage },
    { path: "/register", name: "register", component: RegisterPage },
    { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
    { path: "/booking", name: "booking", component: BookingPage },
    { path: "/manage", name: "manageBooking", component: ManageBooking },
];

// User routes (requires login)
const userRoutes = [
    { path: "/account", name: "account", component: AccountWrapper, meta: { requiresAuth: true } },

];

// Admin routes (requires login + admin)
const adminRoutes = [
    { path: "/admin", name: "admin.dashboard", component: AdminDashboard, meta: { requiresAuth: true, requiresAdmin: true } },
];

// -------------------- ROUTER INIT -------------------- //

const router = createRouter({
    history: createWebHistory(),
    routes: [...publicRoutes, ...userRoutes, ...adminRoutes],
    scrollBehavior() {
        return { top: 0 };
    },
});

// -------------------- NAVIGATION GUARDS -------------------- //

router.beforeEach((to) => {
    const auth = useAuthStore();

    // Require authentication
    if (to.meta.requiresAuth && !auth.isAuthenticated) {
        return { name: "login", query: { redirect: to.fullPath } };
    }

    // Require admin privileges
    if (to.meta.requiresAdmin && !auth.isAdmin) {
        return { name: "home" };
    }
});

export default router;
