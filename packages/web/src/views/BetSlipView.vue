<template>
    <article class="bet-slip">
        <header>
            <h1>{{ market?.name }}</h1>
            <h2>{{ market?.contestant?.name }}</h2>
        </header>
    </article>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useMarketStore } from '../stores/market';
import type { Market } from '../models/Market';

const { marketId } = defineProps<{
    marketId: string;
}>();

const marketStore = useMarketStore();
const market = ref<Market>();

marketStore.getMarket(marketId)
    .then((response) => market.value = response);

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