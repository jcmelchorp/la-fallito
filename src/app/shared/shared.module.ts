import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';
import { CourseModalComponent } from './components/course-modal/course-modal.component';
import { CourseComponent } from './components/course/course.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
@NgModule({
  declarations: [
    ConfirmModalComponent,
    CourseModalComponent,
    CoursesListComponent,
    CourseComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    FontAwesomeModule
  ],
  exports: [CoursesListComponent, CourseComponent],
  providers: [],
  entryComponents: [
    ConfirmModalComponent,
    CourseModalComponent
  ]
})
export class SharedModule { }
