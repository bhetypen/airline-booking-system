import api from "./apiClient";

export const userService = {
    me: () => api.get("/users/details").then(r => r.data.user),
    // admin-only examples:
    setAdmin: (id, makeAdmin = true) => api.patch(`/users/${id}/set-as-admin`, { makeAdmin }).then(r => r.data),
    search: (q, limit = 10) => api.get("/users/search", { params: { q, limit } }).then(r => r.data),
};
