import type { Market } from "./Market";

export class BetSlip {
    market: Market;
    stake: number;

    constructor(m: Market, s: number) {
        this.market = m;
        this.stake = s;
    }

    get potentialPayout() {
        return this.market.decimalOdds * this.stake;
    }
}