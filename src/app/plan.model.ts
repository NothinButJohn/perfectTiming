export class Plan {
    destination: string;
    date: string;
    notes: string;

    constructor( dest, d, notes) {
        this.destination = dest;
        this.date = d;
        this.notes = notes;
    }
}

interface flight {
    airline: string;
    departTime: string;
    arrivalTime: string;
    departLocation: string;
    arrivalLocation: string;

}

interface hotel {
    name: string;
    checkin: string;
    checkout: string;
    address?: string;
}