import { DashboardComponent } from './../core/components/dashboard/dashboard.component';
import { CoursesComponent } from './containers/courses.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllComponent } from './components/all/all.component';


const routes: Routes = [
  {
    path: '', component: CoursesComponent, children: [
      { path: 'all', component: AllComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesRoutingModule { }
