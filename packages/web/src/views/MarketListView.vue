<template>
   <section class="market-list">
        <header>
            <h1>Live Bets</h1>
           <segmented-button v-model="selectedOption"
                              :options="options" />
        </header>

      <section class="markets-container">
            <template v-if="selectedOption === 'weekly'">
                <contestant-market-card v-for="contestant in contestantStore.allContestants"
                                        :contestant-name="contestant.name"
                                        :markets="marketsForContestant(contestant)" />
            </template>

            <template v-else>
                <market-card v-for="market in visibleMarkets"
                             :market="market" />
           </template>
        </section>
    </section>
</template>

<script setup lang="ts">
import { useMarketStore } from '../stores/market';
import MarketCard from '../components/MarketCard.vue';
import ContestantMarketCard from '../components/ContestantMarketCard.vue';
import SegmentedButton from '../components/SegmentedButton.vue';
import type { MarketType } from '../models/Market';
import { computed, ref } from 'vue';
import { useContestantStore } from '../stores/contestant';
import type { Contestant } from '../models/Contestant';

const marketStore = useMarketStore();
marketStore.getMarkets();

const contestantStore = useContestantStore();
contestantStore.getContestants();

const visibleMarkets = computed(() => marketStore.marketsOfType(selectedOption.value));

const selectedOption = ref<MarketType>('weekly')
const options = ref<MarketType[]>(['weekly', 'future', 'prop'])

function marketsForContestant(contestant: Contestant) {
    return visibleMarkets.value.filter((market) => market.contestant == contestant);
}

</script>
<style scoped>
header {
    display: flex;
    gap: var(--space-xl);
    margin-bottom: var(--space-xl);
}

.markets-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: var(--space-lg);
}
</style>