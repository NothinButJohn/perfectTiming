import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EventService } from '../event.service';


@Component({
  selector: 'app-plan-creator',
  templateUrl: './plan-creator.component.html',
  styleUrls: ['./plan-creator.component.css']
})
export class PlanCreatorComponent implements OnInit {
  flightForm: FormGroup;
  hotelForm: FormGroup;
  customEventForm: FormGroup;
  plan;


  constructor(private EventService: EventService) { }

  ngOnInit(): void {
    this.plan = this.EventService.getPlan();
    this.initForms();
  }

  private initForms() {
    let airline = '';
    let departure = '';
    let ret = '';
    let hotel = '';
    let hotelAddress = '';
    let checkIn = '';
    let customEventName = '';
    let ceAddress = '';
    let ceDate = '';
    
    this.flightForm = new FormGroup({
      'airline': new FormControl(airline),
      'departure': new FormControl(departure),
      'ret': new FormControl(ret),
    })
    this.hotelForm = new FormGroup({
      'hotel': new FormControl(hotel),
      'hotelAddress': new FormControl(hotelAddress),
      'checkIn': new FormControl(checkIn),
    })
    this.customEventForm = new FormGroup({
      'customEventName': new FormControl(customEventName),
      'ceAddress': new FormControl(ceAddress),
      'ceDate': new FormControl(ceDate),
    })
  }

  addFlight(){
    this.EventService.addFlight(this.flightForm.value['airline'], this.flightForm.value['depart'], this.flightForm.value['ret'])
  }

  addHotel(){
    this.EventService.addHotel(this.hotelForm.value['hotel'],this.hotelForm.value['address'] ,this.hotelForm.value['checkIn'])
  }

  addCustomEvent(){
    this.EventService.addCustomEvent(this.customEventForm.value['customEventName'], this.customEventForm.value['ceAddress'], this.customEventForm.value['ceDate'])
  }



}
