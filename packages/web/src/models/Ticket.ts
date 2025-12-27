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
                return null
            case 'win':
                return this.potentialPayout;
            case 'loss':
                return 0;
            case 'push':
            case 'void':
                return this.stake;
        }
    }

    get profit() {
        switch (this.status) {
            case 'pending':
                return null;
            case 'win':
                return this.payout! - this.stake;
            case 'loss':
                return -this.stake;
            case 'push':
            case 'void':
                return 0;
        }
    }

    get isSettled() {
        return this.status !== 'pending' && this.status !== 'void';
    }
}

export type TicketStatus = 'pending' | 'win' | 'loss' | 'push' | 'void';
