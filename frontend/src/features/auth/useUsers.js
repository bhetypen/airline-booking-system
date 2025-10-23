import { useMutation, useQuery, useQueryClient } from "@tanstack/vue-query";
import { userService } from "../../services/userService.js";

export const useUserSearch = (q, limit = 10) =>
    useQuery({
        queryKey: ["users", "search", q, limit],
        enabled: !!q,
        queryFn: () => userService.search(q, limit),
        staleTime: 60_000,
    });

export const useSetAdmin = () => {
    const qc = useQueryClient();
    return useMutation({
        mutationFn: ({ id, makeAdmin }) => userService.setAdmin(id, makeAdmin),
        onSuccess: () => qc.invalidateQueries({ queryKey: ["users"] }),
    });
};
