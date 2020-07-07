import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './containers/courses.component';
import { AllComponent } from './components/all/all.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';



@NgModule({
  declarations: [CoursesComponent, AllComponent, CourseDetailsComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FontAwesomeModule
  ]
})
export class CoursesModule { }
