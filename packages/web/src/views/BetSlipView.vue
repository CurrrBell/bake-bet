<template>
   <article class="bet-slip card">
       <button class="close-button"
               aria-label="Close"
                @click="cancel">
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
       <header>
            <h1>{{ market?.name }}</h1>
            <h2>{{ market?.contestant?.name }}</h2>
        </header>
       <input v-model="stake"
              type="number"
               min="1"
               step="1"
               inputmode="numeric" />

      <p>at {{ fractionalOdds(market?.decimalOdds ?? 0) }} = {{ slip?.potentialPayout ?? 0 }} <currency-icon /></p>
        <footer>
            <button @click="cancel">Cancel</button>
            <button class="primary"
                    @click="submitBet">Submit</button>
        </footer>
    </article>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useMarketStore } from '../stores/market';
import type { Market } from '../models/Market';
import { fractionalOdds } from '../helpers/OddsFormats';
import { BetSlip } from '../models/BetSlip';
import { useRouter } from 'vuetify/lib/composables/router.mjs';
import CurrencyIcon from '../components/CurrencyIcon.vue';
import { useTicketStore } from '../stores/ticket';
import { Ticket } from '../models/Ticket';

const { marketId } = defineProps<{
    marketId: string;
}>();

const marketStore = useMarketStore();
const ticketStore = useTicketStore();
const market = ref<Market>();
const stake = ref(1);
const router = useRouter();

marketStore.getMarket(marketId)
    .then((response) => market.value = response);

const slip = ref<BetSlip>();

watch([stake, market], () => slip.value = new BetSlip(market.value!, stake.value));

function cancel() {
    router?.back();
}

function submitBet() {
    ticketStore.submitTicket(new Ticket(slip.value!, 'pending'))
        .then(() => cancel());
}

</script>
<style scoped>
.bet-slip {
    position: relative;
        display: flex;
        flex-direction: column;
        gap: var(--space-lg);
    padding: var(--space-xl);
    max-width: 1000px;
    position: fixed;
    z-index: 999;
    top: 20%;
    left: 50%;
    width: 300px;
    margin-left: -150px;

}
.close-button {
    position: absolute;
    top: var(--space-xl);
    right: var(--space-xl);
    padding: var(--space-sm);
}

footer {
    display: flex;
    justify-content: space-between;
}
</style>