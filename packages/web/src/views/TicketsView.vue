<template>
    <section class="tickets">
        <header>
            <h1>Tickets</h1>
           <SegmentedButton v-model="selectedFilter"
                             :options="filters" />
        </header>

      <bake-bet-table :rows="visibleTickets"
                        :columns="columns" />
    </section>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue';
import SegmentedButton from '../components/SegmentedButton.vue';
import { useTicketStore } from '../stores/ticket';
import type { Ticket, TicketStatus } from '../models/Ticket';
import { storeToRefs } from 'pinia';
import BakeBetTable, { type Column } from '../components/BakeBetTable.vue';

const ticketStore = useTicketStore();
const { allTickets } = storeToRefs(ticketStore);

const filters = ref<(TicketStatus | 'all')[]>(['all', 'pending', 'win', 'loss', 'push', 'void']);
const selectedFilter = ref<TicketStatus | 'all'>('all');

ticketStore.getTickets();

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
])

const visibleTickets = computed(() => {
    if (selectedFilter.value === 'all') {
        return allTickets.value;
    }

    return allTickets.value.filter((ticket) => ticket.status == selectedFilter.value);
})

</script>
<style scoped>
header {
    display: flex;
    gap: var(--space-xl);
    margin-bottom: var(--space-xl);
}

:deep(.column--Status),
:deep(.column--Stake) {
    width: 100px;
}

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