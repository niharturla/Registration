import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatMenuModule} from '@angular/material/menu';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import {MatFormFieldModule} from '@angular/material/form-field';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AppComponent,MatTabsModule, MatMenuModule, MatFormFieldModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router){}
  goRegister():void {
    this.router.navigate(['/browse-component']);
  }
}
