<template>
    <section class="bet-list">
        <header>
            <h1>Live Bets</h1>
        </header>

        <section class="bets-container">
            <market-card v-for="market in marketStore.allMarkets"
                         :market="market" />
        </section>
    </section>
</template>

<script setup lang="ts">
import { useMarketStore } from '../stores/market';
import MarketCard from '../components/MarketCard.vue';

const marketStore = useMarketStore();

marketStore.getMarkets();

</script>
<style scoped>
.bet-list {
    margin: var(--space-lg);

}

.bets-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: var(--space-lg);
}
</style>