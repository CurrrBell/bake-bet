import { BetSlip } from '../models/BetSlip';
import { Ticket } from '../models/Ticket';
import { betSlips } from './BetSlips';
import { markets } from './Markets';

export const tickets = [
    new Ticket(betSlips.futureWinner, 'pending'),
    new Ticket(betSlips.weeklyStarBaker, 'win'),
    new Ticket(betSlips.propBet, 'loss'),
    new Ticket(new BetSlip(betSlips.propBet.market, 100), 'push'),
    new Ticket(new BetSlip(betSlips.futureWinner.market, 75), 'void'),
    new Ticket(new BetSlip(markets[0]!, 100), 'pending'),
    new Ticket(new BetSlip(markets[2]!, 50), 'win'),
    new Ticket(new BetSlip(markets[4]!, 75), 'loss'),
    new Ticket(new BetSlip(markets[6]!, 20), 'push'),
    new Ticket(new BetSlip(markets[8]!, 150), 'void'),
    new Ticket(new BetSlip(markets[10]!, 200), 'win'),
    new Ticket(new BetSlip(markets[12]!, 25), 'loss'),
    new Ticket(new BetSlip(markets[14]!, 60), 'pending'),
];
