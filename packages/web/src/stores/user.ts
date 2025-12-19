import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useUserStore = defineStore('user', () => {
    const id = ref('');
    const name = ref('');
    const balance = ref(0);

    const isLoggedIn = computed(() => !!id.value);

    async function login(newId: string, newName: string, newBalance: number) {
        Promise.resolve()
            .then(() => {
                id.value = newId;
                name.value = newName;
                balance.value = newBalance;
            });
    }

    async function logout() {
        Promise.resolve()
            .then(() => {
                id.value = '';
                name.value = '';
                balance.value = 0;
            });
    }

    return {
        isLoggedIn,
        login,
        logout
    }
});