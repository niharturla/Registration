import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowseComponentComponent } from '../browse-component/browse-component.component';
import { PropertiesComponent } from '../../properties/properties.component';
import { FormComponentComponent } from '../../form-page/form-component/form-component.component';
import { Router } from '@angular/router';
import { SelectedClassService } from '../../SelectedClassService';

interface Class {
  name: string;
  instructor: string;
  schedule: string;
}

@Component({
  selector: 'app-schedule-of-classes',
  standalone: true,
  imports: [CommonModule, BrowseComponentComponent, FormComponentComponent],
  templateUrl: './schedule-of-classes.component.html',
  styleUrls: ['./schedule-of-classes.component.css']
})
export class ScheduleOfClassesComponent extends PropertiesComponent{
  classes: Class[] = [
    { name: 'Math 101', instructor: 'John Doe', schedule: 'Mon/Wed/Fri 9:00-10:00 AM' },
    { name: 'Science 201', instructor: 'Jane Smith', schedule: 'Tue/Thu 1:00-2:30 PM' },
    { name: 'History 101', instructor: 'James Brown', schedule: 'Mon/Wed/Fri 11:00-12:00 PM' }
  ];
  selectedClass:string=this.selectedClassService.selectedClass;
  // add classes to schedule
  constructor(private router: Router, private selectedClassService: SelectedClassService) {
    super();
    this.displayTable();
   }

  numOfStudents(limit: number, attendees: number): void { // use numOfStudents to calculate the students after filling out form
    if (limit < attendees) {
      console.log("The number of seats you are requesting for this class instance would exceed the limit. Please lower your number of attendees or register for another instance of this class.");
      return;
    }
    limit -= attendees;
  }

  selectClass(selectedClass: Class): void {
    alert(`You have selected ${selectedClass.name} taught by ${selectedClass.instructor}`);
  }

  register() {
    this.router.navigate(['/form']);
  }

  displayTable() {
    
  }
}


