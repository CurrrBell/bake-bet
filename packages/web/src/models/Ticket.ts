import { BetSlip } from "./BetSlip";

export class Ticket extends BetSlip {
    status: TicketStatus

    constructor(b: BetSlip, s: TicketStatus) {
        super(b.market, b.stake);
        this.status = s ?? 'pending';
    }

    get payout() {
        switch (this.status) {
            case 'pending':
                return -1
            case 'win':
                return this.potentialPayout;
            case 'loss':
                return 0;
            case 'push':
            case 'void':
                return this.stake;
        }
    }
}

export type TicketStatus = 'pending' | 'win' | 'loss' | 'push' | 'void';
