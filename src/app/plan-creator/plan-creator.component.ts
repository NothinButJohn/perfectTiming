import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
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


  constructor(private EventService: EventService) { }

  ngOnInit(): void {
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
    
  }



}
