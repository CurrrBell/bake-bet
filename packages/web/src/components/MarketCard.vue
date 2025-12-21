<template>
    <article class="market-card"
             :class="`market-card--${market.status}`"
             tabindex="0">
        <header class="market-card__header">
            <h3 class="market-card__title">
                {{ market.name }}
            </h3>

            <span class="market-card__type">
                {{ market.type }}
            </span>
        </header>

        <div class="market-card__body">
            <p v-if="market.contestant"
               class="market-card__selection">
                {{ market.contestant.name }}
            </p>

            <div class="market-card__odds">
                <span class="market-card__odds-label">Odds</span>
                <span class="market-card__odds-value">
                    {{ formatOdds(market.decimalOdds) }}
                </span>
            </div>
        </div>

        <footer class="market-card__footer">
            <span class="market-card__status">
                {{ market.status }}
            </span>

            <button v-if="market.status === 'open'"
                    class="button button--primary">
                Bet
            </button>
        </footer>
    </article>
</template>
<script setup lang="ts">
import { type Market } from '../models/Market';

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

    transition:
        background-color var(--transition-hover),
        box-shadow var(--transition-hover),
        transform var(--transition-active);
}

.market-card:hover {
    background-color: var(--color-primary-soft);
    box-shadow: var(--shadow-md);
}

.market-card:active {
    transform: translateY(1px);
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

.market-card__type {
    font-size: 0.75rem;
    text-transform: uppercase;
    color: var(--color-text-muted);
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

.market-card__status {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--color-text-muted);
}

.market-card--open .market-card__status {
    color: var(--color-success);
}

.market-card--closed {
    opacity: 0.75;
}

.market-card--settled {
    background-color: var(--color-bg);
}

.market-card--void {
    opacity: 0.5;
    text-decoration: line-through;
}

</style>