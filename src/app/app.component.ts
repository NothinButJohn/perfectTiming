import { Component, ElementRef, ViewChild } from '@angular/core';


import { Plan } from './plan.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ttables';
  showForm:boolean = false;
  
}
