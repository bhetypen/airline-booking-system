import { createRouter, createWebHistory } from 'vue-router'

const LandingPage = () => import('../pages/LandingPage.vue')

//Feature Pages
const LoginPage = () => import('../features/auth/LoginPage.vue')

const BookingPage = () => import('../features/bookings/BookingPage.vue')
const ManageBooking = () => import('../features/bookings/ManageBookingPage.vue')


// 404
const NotFound      = { template: '<div class="p-8">Page not found</div>' }

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: LandingPage },
        { path: '/login', component: LoginPage },
        { path: '/manage', component: ManageBooking },
        { path: '/booking', component: BookingPage },
        { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
    ],
    scrollBehavior() { return { top: 0 } },
})

export default router