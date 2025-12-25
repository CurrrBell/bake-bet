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
            render: (value, row) => row.market.contestant?.name ?? '-'
        },
        {
            key: 'market',
            label: 'Market',
            render: (value, row) => row.market.name
        },

        {
            key: 'stake',
            label: 'Stake',
            render: (value, row) => `🤝 ${row.stake}`
        },
        {
            key: 'profit',
            label: 'Profit',
            render: (value, row) => {
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