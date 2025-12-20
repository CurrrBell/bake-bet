import type { Market } from '../models/Market';
import { contestants } from './Contestants';

export const markets: Market[] = [
  {
    id: 'm1',
    name: 'Season Winner',
    type: 'future',
    contestant: contestants[0],
    decimalOdds: 3.5,
  },
  {
    id: 'm2',
    name: 'Season Winner',
    type: 'future',
    contestant: contestants[1],
    decimalOdds: 2.2,
  },
  {
    id: 'm3',
    name: 'Star Baker – Week 5',
    type: 'weekly',
    contestant: contestants[2],
    decimalOdds: 4.0,
  },
  {
    id: 'm4',
    name: 'Technical Challenge Includes Pastry',
    type: 'prop',
    decimalOdds: 1.75,
  },
];
