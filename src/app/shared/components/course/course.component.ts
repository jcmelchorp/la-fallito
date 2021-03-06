import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Course } from '../../../courses/models/course.model';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseComponent implements OnInit {
  @Input() course: Course;
  @Input() editable = true;
  @Output() deleted = new EventEmitter<Course>();
  @Output() edited = new EventEmitter<Course>();
  constructor() { }

  ngOnInit() {

  }

  onDelete() {
    this.deleted.emit(this.course);
  }

  onEdit() {
    this.edited.emit(this.course);
  }

}
