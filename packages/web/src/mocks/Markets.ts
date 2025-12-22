import type { Market } from '../models/Market';
import { contestants } from './Contestants';

const weeklyMarkets: Market[] = contestants.flatMap((contestant, index) => {
    const base = 2.2 + index * 0.25;

    return [
        {
            id: `w1-${contestant.id}-advance`,
            name: 'Advances',
            type: 'weekly',
            status: 'open',
            contestant,
            decimalOdds: Number((base + 0.5).toFixed(2)),
        },
        {
            id: `w1-${contestant.id}-star`,
            name: 'Star Baker',
            type: 'weekly',
            status: 'open',
            contestant,
            decimalOdds: Number((base + 1.5).toFixed(2)),
        },
        {
            id: `w1-${contestant.id}-elim`,
            name: 'Eliminated',
            type: 'weekly',
            status: 'open',
            contestant,
            decimalOdds: Number((base + 3.0).toFixed(2)),
        },
        {
            id: `w1-${contestant.id}-handshake`,
            name: 'Handshake',
            type: 'weekly',
            status: 'open',
            contestant,
            decimalOdds: Number((base + 0.8).toFixed(2)),
        },
        {
            id: `w1-${contestant.id}-technical`,
            name: 'Wins Technical',
            type: 'weekly',
            status: 'open',
            contestant,
            decimalOdds: Number((base + 1.2).toFixed(2)),
        },
    ];
});

const futureMarkets: Market[] = contestants.map((contestant, index) => ({
    id: `season-winner-${contestant.id}`,
    name: 'Season Winner',
    type: 'future',
    status: 'open',
    contestant,
    decimalOdds: Number((2.5 + index * 0.4).toFixed(2)),
}));

const propMarkets: Market[] = [
    {
        id: 'prop-week1-double-handshake',
        name: 'Two or More Handshakes – Week 1',
        type: 'prop',
        status: 'open',
        decimalOdds: 3.8,
    },
    {
        id: 'prop-week1-no-elim',
        name: 'No Elimination – Week 1',
        type: 'prop',
        status: 'open',
        decimalOdds: 6.5,
    },
    {
        id: 'prop-season-multiple-winners',
        name: 'Multiple Star Bakers in Finale',
        type: 'prop',
        status: 'open',
        decimalOdds: 4.2,
    },
];

export const markets: Market[] = [
    ...weeklyMarkets,
    ...futureMarkets,
    ...propMarkets,
];
