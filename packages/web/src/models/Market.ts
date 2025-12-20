import type { Contestant } from "./Contestant";

export interface Market {
    id: string;
    name: string;
    type: MarketType;
    status: MarketStatus;
    contestant?: Contestant;
    decimalOdds: number;
}

export type MarketType = 'weekly' | 'future' | 'prop';
export type MarketStatus = 'open' | 'closed' | 'settled' | 'void';