<template>
    <span class="market-status">{{ status }}</span>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import type { MarketStatus } from '../models/Market';

const { status } = defineProps<{ status: MarketStatus }>();

const statusColor = computed(() => {
    switch (status) {
        case 'open':
            return 'var(--color-success)'
        case 'closed':
        case 'settled':
            return 'var(--color-text-muted)'
        case 'void':
            return 'var(--color-error)'
        default:
            break;
    }
})

</script>
<style scoped>
.market-status {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: v-bind(statusColor);
}
</style>