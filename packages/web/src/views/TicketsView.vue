<template>
    <section class="tickets">
        <header>
            <h1>Tickets</h1>
           <SegmentedButton v-model="selectedFilter"
                             :options="filters" />
        </header>
        <ticket-table :tickets="visibleTickets" />
    </section>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue';
import SegmentedButton from '../components/SegmentedButton.vue';
import { useTicketStore } from '../stores/ticket';
    import type { TicketStatus } from '../models/Ticket';
import { storeToRefs } from 'pinia';
    import TicketTable from '../components/TicketTable.vue';

const ticketStore = useTicketStore();
const { allTickets } = storeToRefs(ticketStore);

const filters = ref<(TicketStatus | 'all')[]>(['all', 'pending', 'win', 'loss', 'push', 'void']);
const selectedFilter = ref<TicketStatus | 'all'>('all');

ticketStore.getTickets();

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