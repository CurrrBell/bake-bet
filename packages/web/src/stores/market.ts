import { defineStore } from "pinia";
import { markets } from "../mocks/Markets";
import { ref } from "vue";
import type { Market } from "../models/Market";

export const useMarketStore = defineStore(('market'), () => {
    const allMarkets = ref<Market[]>([]);

    async function getMarkets() {
        return Promise.resolve()
            .then(() => allMarkets.value = markets)
    }

    return {
        allMarkets,
        getMarkets
    }
})