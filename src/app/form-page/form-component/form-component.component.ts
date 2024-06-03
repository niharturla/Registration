import { Component, Inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AppComponent } from '../../app.component';
import {Router} from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-component',
  standalone: true,
  imports: [CommonModule,AppComponent, ReactiveFormsModule],
  templateUrl: './form-component.component.html',
  styleUrl: './form-component.component.css'
})
export class FormComponentComponent{
  isSubmitted:boolean=false;
  constructor(private router: Router){

  } // use the router to connect the event 
  ngOnInit(): void {}
  goToPage(pageName:string) {
    this.router.navigate([pageName]);
  }
   fb=Inject(NonNullableFormBuilder);
   form=this.fb.group({
      orgLicenseNum: this.fb.control('', {validators: [Validators.required]}),
      orgTitle: this.fb.control('', {validators: [Validators.required]}),
      firstName: this.fb.control('', {validators: [Validators.required]}),
      lastName: this.fb.control('', {validators: [Validators.required]}),
      phone: this.fb.control('', {validators: [Validators.required, Validators.pattern("[0-9 ]{11}")]}),
      email: this.fb.control('', {validators: [Validators.required, Validators.email]}),
      attendees: this.fb.control('', {validators: [Validators.required, Validators.min(1)]})
      // when attendees is valid, have a new text box appear below to enter the names
    })
  onSubmit() {
    if(!this.form.invalid) {
      // add the user to the array if valid, else return error
      // AFTER THE USER SUBMITS THE INFORMATION, AND THE INFO IS VALID
      this.isSubmitted=true;
      this.router.navigate(['/thank-you']);

    } else {
      this.form.markAllAsTouched(); // if a field is invalid then mark all red
    }
  }

  onReturn() {
    this.router.navigate(['/']);
  }
}
