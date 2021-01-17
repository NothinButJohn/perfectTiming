import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';


import { Plan } from './plan.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ttables';
  showForm:boolean = false;
  current=false;

  workSelected;
  edit = false;

  workHistory = []

  ngOnInit(){
    // this.workSelected.subscribe(this.workForm);
  }

  public formGroup: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    middleInitial: new FormControl(''),
    lastName: new FormControl(''),
    emailAddress: new FormControl(''),
    phoneNumber: new FormControl(''),
  })

  public workForm: FormGroup = new FormGroup({
    businessName: new FormControl(),
    title: new FormControl(),
    start: new FormControl(),
    end: new FormControl(),
  })
  public educationForm: FormGroup = new FormGroup({
    eduName: new FormControl(),
    degreeType: new FormControl(),
    major: new FormControl(),
    start: new FormControl(),
    end: new FormControl(),
  })

  addWork(){
    this.workHistory.push(
      this.workForm.value
    )
    console.log(this.workHistory)
    this.workForm.reset();
  }

  updateWork(){
    this.workHistory.splice(this.workSelected, 1, this.workForm.value);
    this.workForm.reset();
    this.edit = false;
  }

  removeWork(index: number) {
    this.workHistory.splice(index, 1);
  }

  onSelected(work, index){
    this.workForm.controls.businessName.setValue(work.businessName);
    this.workForm.controls.title.setValue(work.title);
    this.workForm.controls.start.setValue(work.start);
    this.workForm.controls.end.setValue(work.end);
    this.workSelected = index;
    this.edit = true;
  }

  addEdu(){}
  updateEdu(){}
}
