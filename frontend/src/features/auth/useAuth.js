import { useMutation, useQuery, useQueryClient } from "@tanstack/vue-query";
import { authService } from "../../services/authService.js";
import { userService } from "../../services/userService.js";
import { useAuthStore } from "../../store/authStore.js";
import { useRouter } from "vue-router";

export function useLogin() {
    const qc = useQueryClient();
    const auth = useAuthStore();
    return useMutation({
        mutationFn: ({ email, password }) => auth.login(email, password),
        onSuccess: async () => {
            await qc.invalidateQueries({ queryKey: ["me"] });
        },
    });
}

export function useRegister() {
    const router = useRouter();

    return useMutation({
        mutationFn: (payload) => authService.register(payload),
        onSuccess: async () => {
            await router.push("/login");
        },
    });
}

export function useMe() {
    const auth = useAuthStore();
    return useQuery({
        queryKey: ["me"],
        enabled: !!auth.token,
        queryFn: () => userService.me(),
        onSuccess: (user) => auth.setUser(user),
    });
}
