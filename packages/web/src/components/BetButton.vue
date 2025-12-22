<template>
   <button class="bet-button"
            @click="openBetSlip">
        Bet
    </button>
</template>
<script setup lang="ts">
import BetSlipView from '../views/BetSlipView.vue';
import { useIsModalOpen } from '../composables/isModalOpen';

const { marketId } = defineProps<{ marketId: string }>();

const { isModalOpen } = useIsModalOpen();

function openBetSlip() {
    if (isModalOpen.value) return;

    isModalOpen.value = true;
}
</script>