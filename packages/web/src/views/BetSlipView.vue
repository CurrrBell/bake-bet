<template>
   <article class="bet-slip card">
        <header>
            <h1>{{ market?.name }}</h1>
            <h2>{{ market?.contestant?.name }}</h2>
           <button class="close-button"
                    aria-label="Close">
                <svg viewBox="0 0 24 24"
                     width="18"
                     height="18">
                    <path d="M18 6L6 18M6 6l12 12"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round" />
                </svg>
            </button>
        </header>
       <input v-model="stake"
               type="number" />

        <p>at {{ roundedFractionalOdds(market?.decimalOdds ?? 0) }} = {{ slip?.potentialPayout ?? 0 }}</p>
    </article>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useMarketStore } from '../stores/market';
import type { Market } from '../models/Market';
import { roundedFractionalOdds } from '../helpers/OddsFormats';
import { BetSlip } from '../models/BetSlip';

const { marketId } = defineProps<{
    marketId: string;
}>();

const marketStore = useMarketStore();
const market = ref<Market>();
const stake = ref(0);

marketStore.getMarket(marketId)
    .then((response) => market.value = response);

const slip = ref<BetSlip>();

watch(stake, () => slip.value = new BetSlip(market.value!, stake.value))

</script>
<style scoped>
.bet-slip {
    padding: var(--space-xl);
    max-width: 1000px;
    position: fixed;
    z-index: 999;
    top: 20%;
    left: 50%;
    width: 300px;
    margin-left: -150px;

}
</style>