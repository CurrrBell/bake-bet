<template>
   <button class="bet-button"
            @click="openBetSlip">
        Bet
    </button>
</template>
<script setup lang="ts">
import BetSlipView from '../views/BetSlipView.vue';
import { useIsModalOpen } from '../composables/isModalOpen';
import { useRoute, useRouter } from 'vue-router';

const { marketId } = defineProps<{ marketId: string }>();

const { isModalOpen } = useIsModalOpen();

const router = useRouter();
const route = useRoute();

function openBetSlip() {
    router.push({
        name: 'BetSlip',
        params: { marketId },
        state: {
            background: route.fullPath,
        },
    })
}
</script>