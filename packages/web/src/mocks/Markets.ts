import type { Market } from '../models/Market';
import { contestants } from './Contestants';

export const markets: Market[] = [
    {
        id: 'm1',
        name: 'Season Winner',
        type: 'future',
        status: 'open',
        contestant: contestants[0],
        decimalOdds: 3.5,
    },
    {
        id: 'm2',
        name: 'Season Winner',
        type: 'future',
        status: 'open',
        contestant: contestants[1],
        decimalOdds: 2.2,
    },
    {
        id: 'm5',
        name: 'Season Winner',
        type: 'future',
        status: 'open',
        contestant: contestants[2],
        decimalOdds: 5.0,
    },
    {
        id: 'm3',
        name: 'Star Baker - Week 5',
        type: 'weekly',
        status: 'closed',
        contestant: contestants[2],
        decimalOdds: 4.0,
    },
    {
        id: 'm6',
        name: 'Eliminated - Week 5',
        type: 'weekly',
        status: 'closed',
        contestant: contestants[0],
        decimalOdds: 3.1,
    },
    {
        id: 'm4',
        name: 'Technical Challenge Includes Pastry',
        type: 'prop',
        status: 'settled',
        decimalOdds: 1.75,
    },
    {
        id: 'm7',
        name: 'Handshake Awarded - Week 4',
        type: 'prop',
        status: 'settled',
        decimalOdds: 2.4,
    },
    {
        id: 'm8',
        name: 'Star Baker - Week 4',
        type: 'weekly',
        status: 'settled',
        contestant: contestants[1],
        decimalOdds: 2.9,
    },
    {
        id: 'm9',
        name: 'Double Elimination - Week 3',
        type: 'prop',
        status: 'void',
        decimalOdds: 6.0,
    },
];
