import { defineStore } from "pinia";
import { Ticket } from "../models/Ticket";
import { ref } from "vue";
import { tickets } from "../mocks/Tickets";

export const useTicketStore = defineStore('ticket', () => {
    const allTickets = ref<Ticket[]>([]);

    async function getTickets() {
        return Promise.resolve()
            .then(() => allTickets.value.push(...tickets));
    }

    async function submitTicket(t: Ticket) {
        return Promise.resolve()
            .then(() => allTickets.value.push(t));
    }

    return {
        allTickets,
        submitTicket,
        getTickets,
    }
})