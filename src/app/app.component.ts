import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


import { Plan } from './plan.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ttables';
  showForm:boolean = false;
  current=false;

  workHistory = [1]

  public formGroup: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    middleInitial: new FormControl(''),
    lastName: new FormControl(''),
    emailAddress: new FormControl(''),
    phoneNumber: new FormControl(''),
  })

  addWork(){
    let prev = this.workHistory[this.workHistory.length-1]
    this.workHistory.push(prev+1)
  }

  removeWork(index: number) {
    this.workHistory.splice(index, 1);
  }

  
}
