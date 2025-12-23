<template>
   <button class="bet-button primary"
            @click="openBetSlip">
        Bet
    </button>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';

const { marketId } = defineProps<{ marketId: string }>();

const router = useRouter();

function openBetSlip() {
    router.push({
        name: 'BetSlip',
        params: { marketId },
    });
}
</script>