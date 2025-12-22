import { useStorage } from "@vueuse/core";
import { defineStore } from "pinia";
import { computed } from "vue";

export const useUserStore = defineStore('user', () => {
    const userId = useStorage('userId', '');
    const userName = useStorage('userName', '');
    const balance = useStorage('balance', 0);

    const isLoggedIn = computed(() => !!userId.value);

    async function login(newId: string, newName: string, newBalance: number) {
        Promise.resolve()
            .then(() => {
                userId.value = newId;
                userName.value = newName;
                balance.value = newBalance;
            });
    }

    async function logout() {
        Promise.resolve()
            .then(() => {
                userId.value = '';
                userName.value = '';
                balance.value = 0;
            });
    }

    return {
        isLoggedIn,
        login,
        logout
    }
});