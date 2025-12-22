import { BetSlip } from '../models/BetSlip';
import { markets } from './Markets';

export const betSlips = {
  futureWinner: new BetSlip(markets[0]!, 100),
  weeklyStarBaker: new BetSlip(markets[2]!, 50),
  propBet: new BetSlip(markets[3]!, 200),
};
