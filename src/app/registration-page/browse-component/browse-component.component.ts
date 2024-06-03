import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AppComponent } from '../../app.component';
import { FormComponentComponent } from '../../form-page/form-component/form-component.component';
interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-browse-component',
  standalone: true,
  imports: [FormComponentComponent,AppComponent, FormsModule, MatFormFieldModule, MatInputModule, MatSelectModule],
  templateUrl: './browse-component.component.html',
  styleUrl: './browse-component.component.css'
})

export class BrowseComponentComponent {
  constructor(){}
  pullSchedule() {
    // after we want to see the schedule of classes, we have to pull all available classes
    
  }
}
