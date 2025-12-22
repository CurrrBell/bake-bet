<template>
    <button @click="openBetSlip">
        Bet
    </button>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter()

const { marketId } = defineProps<{ marketId: string }>();

function openBetSlip() {
    router.push(`/markets/${marketId}/bet`);
}
</script>