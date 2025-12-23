import { describe, expect, it } from "vitest";
import type { Market } from "../Market";
import { BetSlip } from "../BetSlip";
import { Ticket, type TicketStatus } from "../Ticket";

describe('Ticket', () => {

    const market: Market = {
        id: '1',
        name: 'test',
        type: 'weekly',
        decimalOdds: 0.5,
        status: 'open'
    };
    const stake = 100;
    const slip = new BetSlip(market, stake);

    it.each([
        ['pending', null],
        ['win', slip.potentialPayout],
        ['loss', 0],
        ['push', stake],
        ['void', stake],
    ])('calculates the correct payout based on status', (status, expectedPayout) => {

            const ticket = new Ticket(slip, status as TicketStatus);

            expect(ticket.payout).toBe(expectedPayout);
        })
});