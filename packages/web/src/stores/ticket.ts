import { defineStore } from "pinia";
import { Ticket } from "../models/Ticket";
import { ref } from "vue";

export const useTicketStore = defineStore('ticket', () => {
    const allTickets = ref<Ticket[]>([]);

    function submitTicket(t: Ticket) {
        return Promise.resolve()
            .then(() => allTickets.value.push(t))
    }

    return {
        allTickets,
        submitTicket
    }
})