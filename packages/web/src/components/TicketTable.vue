<template>
    <bake-bet-table :rows="tickets"
                    :columns="columns" />
</template>
<script setup lang="ts">
    import { ref } from 'vue';
    import BakeBetTable, { type Column } from './BakeBetTable.vue';
    import type { Ticket } from '../models/Ticket';

    defineProps<{ tickets: Ticket[] }>();

    const columns = ref<Column<Ticket>[]>([
        {
            key: 'market',
            label: 'Contestant',
            render: (_, row) => row.market.contestant?.name ?? '-'
        },
        {
            key: 'market',
            label: 'Market',
            render: (_, row) => row.market.name
        },

        {
            key: 'stake',
            label: 'Stake',
            render: (_, row) => `🤝 ${row.stake}`
        },
        {
            key: 'profit',
            label: 'Profit',
            render: (_, row) => {
                const profit = row.profit;

                if (row.status === 'pending') {
                    return `<span class=status--${row.status}>pending</span>`
                }

                if (!profit) {
                    return `<span class=status--${row.status}>--</span>`;
                }

                if (profit > 0) {
                    return `<span class=status--${row.status}>🤝 +${profit}</span>`;
                } else {
                    return `<span class=status--${row.status}>🤝 ${profit}</span>`;
                }
            }
        },
    ]);
</script>
<style scoped>

    :deep(.status--pending) {
        color: var(--color-warning);
    }

    :deep(.status--win) {
        color: var(--color-success);
    }

    :deep(.status--loss) {
        color: var(--color-error);
    }

    :deep(.status--push) {
        color: var(--color-text-muted);
    }

    :deep(.status--void) {
        color: var(--color-text-subtle);
    }
</style>