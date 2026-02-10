import {defineStore} from "pinia";
import {ref} from "vue";
import type {User} from "@interfaces/user.ts";
import {useRouter} from "vue-router";
import {useFetch} from "@composable/useFetch.ts";

export const useUserStore = defineStore("userStore", () => {
    const user = ref<User | null>(null);
    const id = ref<number>(0)
    const router = useRouter();

    const setUser = (u: User | null) => {
        if (u) {
            user.value = u;
            id.value = u.id;
        } else {
            user.value = null;
            id.value = 0;
        }
    }

    const getUserFromApi = async () => {
        try {
            const userData = await useFetch<User>("/users/me");
            if (userData) {
                setUser(userData as User);
            }
        } catch (error) {
            const err = JSON.parse((error as Error).message);
            if (err.code === 401) {
                setUser(null);
                await router.push("/login");
            }
        }
    };

    // const logoutUser = async () => {
        // TODO: make logout endpoint for delete cookie ?
    // };

    return {
        user,
        id,
        setUser,
        getUserFromApi,
    }
}, {persist: true})