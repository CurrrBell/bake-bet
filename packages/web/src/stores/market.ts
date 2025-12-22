import { defineStore } from "pinia";
import { markets } from "../mocks/Markets";
import { ref } from "vue";
import type { Market, MarketType } from "../models/Market";
import type { Contestant } from "../models/Contestant";

export const useMarketStore = defineStore(('market'), () => {
    const allMarkets = ref<Market[]>([]);

    async function getMarkets() {
        return Promise.resolve()
            .then(() => allMarkets.value = markets)
    }

    function marketsOfType(type: MarketType) {
        return allMarkets.value.filter((market) => market.type === type);
    }

    return {
        allMarkets,
        getMarkets,
        marketsOfType,
    }
})