import { Injectable } from "@angular/core";

@Injectable()
export class EventService {
    private plan = {
        name: '',
        start: '',
        end: '',
        events: []
    }


    createPlan(name: string, start, end){
        this.plan.name = name;
        this.plan.start = start;
        this.plan.end = end;
    }

    addFlight(airline: string, depart, ret) {
        this.plan.events.push({
             type: 'flight',
             data: [
                 airline,
                 depart,
                 ret
             ]
        })
    }

    addHotel(hotel: string, address: string, checkin){
        this.plan.events.push({
            type: 'hotel',
            data: [
                hotel,
                address,
                checkin
            ]
        })
    }

    addCustomEvent(name: string, date:string, address?: string){
        this.plan.events.push({
            type: 'custom',
            data: [
                name,
                date,
                address
            ]
        })
    }
}

