import { BetSlip } from '../models/BetSlip';
import { Ticket } from '../models/Ticket';
import { betSlips } from './BetSlips';

export const tickets = [
  new Ticket(betSlips.futureWinner, 'pending'),
  new Ticket(betSlips.weeklyStarBaker, 'win'),
  new Ticket(betSlips.propBet, 'loss'),
  new Ticket(new BetSlip(betSlips.propBet.market, 100), 'push'),
  new Ticket(new BetSlip(betSlips.futureWinner.market, 75), 'void'),
];
