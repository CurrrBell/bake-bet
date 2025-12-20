import type { Contestant } from "./Contestant";

export interface Market {
    id: string;
    name: string;
    type: MarketType;
    contestant?: Contestant;
    decimalOdds: number;
}

export type MarketType = 'weekly' | 'future' | 'prop';