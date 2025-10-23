import axios from "axios";
import router from "../router";
import { useAuthStore } from "../store/authStore";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: { "Content-Type": "application/json" },
});

// attach token
api.interceptors.request.use((cfg) => {
    const token = localStorage.getItem("access");
    if (token) cfg.headers.Authorization = `Bearer ${token}`;
    return cfg;
});

// global 401 → logout & redirect to login
api.interceptors.response.use(
    (res) => res,
    (err) => {
        const status = err?.response?.status;
        if (status === 401) {
            try { useAuthStore().logout(); } catch {}
            if (router.currentRoute.value.name !== "login") {
                router.push({ name: "login", query: { redirect: router.currentRoute.value.fullPath } });
            }
        }
        return Promise.reject(err);
    }
);

export default api;
