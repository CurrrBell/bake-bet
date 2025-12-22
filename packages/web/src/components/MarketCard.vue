<template>
    <article class="market-card"
            :class="`market-card--${market.status}`">
        <header class="market-card__header">
            <h3 class="market-card__title">
               {{ market.contestant?.name ?? market.name }}
           </h3>
        </header>

        <div class="market-card__body">
           <p class="market-card__selection">
                {{ market.contestant?.name }}
            </p>

          <div class="market-card__odds">
                <span class="market-card__odds-value">
                    {{ formatOdds(market.decimalOdds) }}
                </span>
            </div>
        </div>

        <footer class="market-card__footer">
           <market-status :status="market.status" />

          <button v-if="market.status === 'open'">
                Bet
            </button>
        </footer>
    </article>
</template>
<script setup lang="ts">
import { type Market } from '../models/Market';
import MarketStatus from './MarketStatus.vue';

defineProps<{
    market: Market
}>();

function formatOdds(odds: number): string {
    if (odds <= 1) {
        return '—';
    }

    const numerator = Math.round(odds - 1);
    return `${numerator}:1`;
}

</script>
<style scoped>
.market-card {
    background-color: var(--color-surface);
    border-radius: var(--radius-md);
    padding: var(--space-md);

    display: flex;
    flex-direction: column;
    gap: var(--space-sm);

    box-shadow: var(--shadow-sm);
    cursor: pointer;

    transition: background-color var(--transition-hover);
}

.market-card:hover {
    background-color: var(--color-primary-soft);
}

.market-card__header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: var(--space-sm);
}

.market-card__title {
    font-size: 1rem;
    font-weight: 600;
    color: var(--color-text);
    margin: 0;
}

.market-card__body {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: var(--space-md);
}

.market-card__selection {
    font-weight: 500;
    color: var(--color-text);
}

.market-card__odds {
    text-align: right;
}

.market-card__odds-label {
    display: block;
    font-size: 0.7rem;
    color: var(--color-text-muted);
}

.market-card__odds-value {
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--color-primary);
}

.market-card__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: auto;
}

</style>