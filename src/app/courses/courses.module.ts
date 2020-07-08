import { FormsModule } from '@angular/forms';
import { CoursesService } from './services/courses.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './containers/courses.component';
import { AllComponent } from './components/all/all.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from '../shared/shared.module';
import * as fromCourses from './store/courses.reducer';
import { CoursesEffects } from './store/courses.effects';
@NgModule({
  declarations: [CoursesComponent, AllComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FontAwesomeModule,
    SharedModule,
    FormsModule,
    StoreModule.forFeature('courses', fromCourses.coursesReducer),
    EffectsModule.forFeature([CoursesEffects])
  ],
  providers: [CoursesService]
})
export class CoursesModule { }
