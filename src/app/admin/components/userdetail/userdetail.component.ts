import { Component, OnInit, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { User } from 'src/app/auth/models/user.model';
import { faArrowLeft, faCircle } from '@fortawesome/free-solid-svg-icons';
import { Course } from 'src/app/courses/models/course.model';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserdetailComponent implements OnInit {
  @Input() user: User;
  @Input() courses: Course[];
  @Input() userCoursesLoading: boolean;
  @Output() detailsClosed = new EventEmitter<any>();
  @Output() coursesLoad = new EventEmitter<any>();
  @Output() courseDeleted = new EventEmitter<Course>();
  @Output() addAdmin = new EventEmitter<any>();
  @Output() removeAdmin = new EventEmitter<any>();
  left = faArrowLeft;
  circ = faCircle;

  constructor() { }

  ngOnInit(): void {
  }
  closeDetails() {
    this.detailsClosed.emit();
  }

  loadCourses() {
    this.coursesLoad.emit();
  }

  onCourseDelete(course: Course) {
    this.courseDeleted.emit(course);
  }

  onAddAdmin() {
    this.addAdmin.emit(this.user);
  }

  onRemoveAdmin() {
    this.removeAdmin.emit(this.user);
  }
}
