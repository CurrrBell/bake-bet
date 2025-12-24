<template>
    <article class="contestant-market-card">
        <header>
            <h2>{{ contestantName }}</h2>
        </header>

        <div class="market-card__body">
           <div class="contestant-market"
                 v-for="market in markets">

                <p class="market-card__selection">
                    {{ market.name }}
                </p>

              <div class="market-card__odds">
                    <bet-button :market-id="market.id" />
                    <span class="market-card__odds-value">
                        {{ fractionalOdds(market.decimalOdds) }}
                    </span>
                </div>
            </div>
        </div>
    </article>
</template>
<script setup lang="ts">
import BetButton from './BetButton.vue';
import { type Market } from '../models/Market';
import { fractionalOdds } from '../helpers/OddsFormats';

defineProps<{
    contestantName: string,
    markets: Market[]
}>();

</script>
<style scoped>
.contestant-market-card {
    background-color: var(--color-surface);
    border-radius: var(--radius-md);
    padding: var(--space-md);

    display: flex;
    flex-direction: column;
    gap: var(--space-sm);

    box-shadow: var(--shadow-sm);
}

.market-card__body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: var(--space-md);
}

.contestant-market {
    display: flex;
    align-items: center;
    padding: var(--space-md);
    justify-content: space-between;
    background-color: transparent;
    border-radius: var(--radius-md);
    transition: background-color var(--transition-hover);
}

.contestant-market:hover {
    background-color: var(--color-primary-soft);
}

.market-card__selection {
    font-weight: 500;
    color: var(--color-text);
}

.market-card__odds {
    display: flex;
    gap: var(--space-sm);
    align-items: center;
    }

.bet-button {
    opacity: 0;
    visibility: hidden;
    transition: opacity var(--transition-hover);
}

.contestant-market:hover .bet-button {
    opacity: 1;
    visibility: visible;
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