import api from "./apiClient";

export const authService = {
    login: (email, password) => api.post("/users/login", { email, password }).then(r => r.data),
    register: (payload) => api.post("/users/register", payload).then(r => r.data),
};
