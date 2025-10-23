import { createApp } from 'vue'
import App from './App.vue'

//tailwind global v4 global css
import './style.css'

//vuetify
import "vuetify/styles"
import { createVuetify } from "vuetify"
import { aliases, mdi } from "vuetify/iconsets/mdi"
import "@mdi/font/css/materialdesignicons.css"

// State & Data layer
import { createPinia } from 'pinia'
import { VueQueryPlugin } from '@tanstack/vue-query'

// Router
import router from './router'

import 'vue3-toastify/dist/index.css'

import VueApexCharts from "vue3-apexcharts";


const vuetify = createVuetify({
    icons: { defaultSet: "mdi", aliases, sets: { mdi } },
    theme: {
        defaultTheme: "custom",
        themes: {
            custom: {
                dark: false,
                colors: {
                    primary: "#0194F3",
                    accent: "#ffb100",
                    surface: "#ffffff",
                },
            },
        },
    },
})

createApp(App)
    .use(createPinia())
    .use(VueQueryPlugin, {
        queryClientConfig: {
            defaultOptions: {
                queries: { retry: false, refetchOnWindowFocus: false },
            },
        },
    })
    .use(router)
    .use(vuetify)
    .use(VueApexCharts)
    .mount('#app')
