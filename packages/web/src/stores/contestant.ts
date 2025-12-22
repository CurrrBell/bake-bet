import { defineStore } from "pinia";
import { contestants } from "../mocks/Contestants";
import { ref } from "vue";
import type { Contestant } from "../models/Contestant";

export const useContestantStore = defineStore(('contestant'), () => {
    const allContestants = ref<Contestant[]>([]);

    async function getContestants() {
        return Promise.resolve()
            .then(() => allContestants.value = contestants)
    }

    return {
        allContestants,
        getContestants,
    }
})