<template>
    <header>
        <h1>{{ user?.userName }}</h1>
        <h4>Joined {{ user?.createdAt }}</h4>
    </header>

    <h1><currency-icon /> {{ user?.balance }}</h1>

    <section>
        <h1>Stats</h1>
        <p>Tickets: {{ ticketStore.allTickets.length }}</p>
        <p>Win rate: {{ winRate }}%</p>
        <p>Net: \\todo//</p>
    </section>

    <section>
        <h1>Recent Tickets</h1>
        <ticket-table :tickets="recentTickets" />
    </section>

    <section>
        <h1>Preferences</h1>
        <p>Odds format: Fractional</p>

    </section>

</template>

<script setup lang="ts">
    import { storeToRefs } from 'pinia';
    import { useUserStore } from '../stores/user';
    import CurrencyIcon from '../components/CurrencyIcon.vue';
    import { useTicketStore } from '../stores/ticket';
    import { computed } from 'vue';
    import TicketTable from '../components/TicketTable.vue';

    const { user } = storeToRefs(useUserStore());

    const ticketStore = useTicketStore();
    ticketStore.getTickets();

    const settledTickets = computed(() => ticketStore.allTickets.filter((ticket) => ticket.isSettled));
    const winRate = computed(() => (ticketStore.allTickets.filter((ticket) => ticket.status == 'win').length / settledTickets.value.length) * 100)

    const recentTickets = computed(() => ticketStore.allTickets.slice(0, 5));
</script>