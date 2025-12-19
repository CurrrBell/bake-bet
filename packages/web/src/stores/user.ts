import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useUserStore = defineStore('user', () => {
    const id = ref('');
    const name = ref('');
    const balance = ref(0);

    const isLoggedIn = computed(() => !!id.value);

    function login(newId: string, newName: string, newBalance: number) {
        return Promise.resolve()
            .then(() => {
                id.value = newId;
                name.value = newName;
                balance.value = newBalance
            })

    }

    return {
        isLoggedIn,
        login
    }
});