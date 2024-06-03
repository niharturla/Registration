import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BrowseComponentComponent } from './registration-page/browse-component/browse-component.component';
import { FormComponentComponent } from './form-page/form-component/form-component.component';
import { ScheduleOfClassesComponent } from './registration-page/schedule-of-classes/schedule-of-classes.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = [

{path: '', component: HomeComponent},
{path: 'browse-component', component: BrowseComponentComponent},
{path: 'form-component', component: FormComponentComponent},
{path: 'schedule-component', component: ScheduleOfClassesComponent},
{ path: 'thank-you', component: ThankYouComponent },
{path: 'error', component: ErrorComponent},
];

