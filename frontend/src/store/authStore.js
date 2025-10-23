import { defineStore } from "pinia";
import {authService} from "../services/authService.js";
import {userService} from "../services/userService.js";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        token: localStorage.getItem("access"),
        user: null, // optional cache of /users/details
    }),
    getters: {
        isAuthenticated: (s) => !!s.token,
        isAdmin: (s) => !!s.user?.isAdmin,
    },
    actions: {
        setToken(t) {
            this.token = t;
            if (t) localStorage.setItem("access", t);
            else localStorage.removeItem("access");
        },
        setUser(u) { this.user = u; },

        async login(email, password) {
            this.loading = true;
            this.error = null;
            try {
                const data = await authService.login(email, password); // { access: "..." }
                this.setToken(data.access);

                // optionally fetch user details
                try {
                    this.user = await userService.me();
                } catch (e) {
                    console.warn("Could not fetch user details", e);
                }

                return data; // resolve mutation
            } catch (e) {
                this.error = e?.response?.data?.error || e.message || "Login failed";
                throw e; // mutation reject on error
            } finally {
                this.loading = false;
            }
        },

        logout() {
            this.setToken(null);
            this.user = null;
            this.error = null;
        },
    },
});
