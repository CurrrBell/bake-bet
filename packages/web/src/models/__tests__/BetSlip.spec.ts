import { describe, expect, it } from "vitest";
import type { Market } from '../Market';
import { BetSlip } from "../BetSlip";

describe('BetSlip', () => {
    it('calculates the proper payout', () => {
        const market: Market = {
            id: '1',
            name: 'test',
            type: 'weekly',
            decimalOdds: 0.5,
            status: 'closed'
        };

        const stake = 100;

        const slip = new BetSlip(market, stake);

        expect(slip.potentialPayout).toBe(stake * market.decimalOdds);
    })
})