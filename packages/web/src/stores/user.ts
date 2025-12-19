import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useUserStore = defineStore('user', () => {
    const id = ref(null);
    const name = ref('');
    const balance = ref(0);

    const isLoggedIn = computed(() => !!id.value);

    return {
        isLoggedIn
    }
});