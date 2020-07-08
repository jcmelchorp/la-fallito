import { Component, OnInit, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { Course } from '../../../courses/models/course.model';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesListComponent implements OnInit {
  @Input() courses: Course[];
  @Input() editable = true;
  @Output() courseDeleted = new EventEmitter<Course>();
  @Output() courseEdited = new EventEmitter<Course>();

  constructor() {

  }

  ngOnInit() {
  }

  onCourseDelete(course: Course) {
    this.courseDeleted.emit(course);
  }

  onCourseEdit(course: Course) {
    this.courseEdited.emit(course);
  }

  trackByFunction(index: any) {
    return index;
  }

}
