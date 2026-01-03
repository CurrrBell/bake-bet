import { defineStore } from "pinia";
import { markets } from "../mocks/Markets";
import { ref } from "vue";
import type { Market, MarketType } from "../models/Market";

export const useMarketStore = defineStore(('market'), () => {
    const allMarkets = ref<Market[]>([]);

    async function getMarkets() {
        return Promise.resolve()
            .then(() => allMarkets.value = markets)
    }

    function marketsOfType(type: MarketType) {
        return allMarkets.value.filter((market) => market.type === type);
    }

    function getMarket(id: string) {
        return Promise.resolve()
            .then(() => markets.find((market) => market.id === id)!);
    }

    return {
        allMarkets,
        getMarkets,
        marketsOfType,
        getMarket,
    }
})