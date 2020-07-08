import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { Course } from '../../models/course.model';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { getCourses, getAllLoaded } from '../../store/courses.selectors';
import * as fromCourses from '../../store/courses.actions';
import { CourseModalComponent } from 'src/app/shared/components/course-modal/course-modal.component';
import { ConfirmModalComponent } from 'src/app/shared/components/confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {
  link = faExternalLinkAlt;
  courses$: Observable<Course[] | null>;
  isLoading$: Observable<boolean>;
  modalConfig = {
    class: 'modal-dialog-centered'
  };
  newCourse: Course;
  dialogRef: MatDialogRef<CourseModalComponent>;
  confirmRef: MatDialogRef<ConfirmModalComponent>;
  constructor(
    private store: Store<AppState>,
    private afAuth: AngularFireAuth,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.isLoading$ = this.store.select(getAllLoaded);
    this.courses$ = this.store.pipe(
      select(getCourses),
      map((courses: Course[]) => {
        if (this.user && !courses) {
          this.store.dispatch(new fromCourses.CoursesQuery());
        }
        return courses;
      })
    );
  }
  get user() {
    return this.afAuth.currentUser;
  }

  openAddCourseModal() {
    this.dialogRef = this.dialog.open(CourseModalComponent, {
      width: '350px',
      data: {}
    });

    this.dialogRef.componentInstance.courseData.subscribe((courseData: Course) => {
      this.store.dispatch(new fromCourses.CourseAdded({ course: courseData }));
    });
  }

  openEditCourseModal(course: Course) {
    this.dialogRef = this.dialog.open(CourseModalComponent, {
      width: '350px',
      data: {
        key: course.key,
        title: course.title,
        description: course.description,
        area: course.area,
        levelId: course.levelId
      }
    });
    this.dialogRef.componentInstance.courseData.subscribe((courseData: Course) => {
      this.store.dispatch(new fromCourses.CourseEdited({ course: courseData }));
    });
  }

  openConfirmModal(course: Course) {
    this.confirmRef = this.dialog.open(ConfirmModalComponent, {
      width: '350px'
    });
    this.confirmRef.componentInstance.confirmation.pipe(take(1)).subscribe((confirmation: boolean) => {
      if (confirmation) {
        this.store.dispatch(new fromCourses.CourseDeleted({ course }));
      }
    })
  }

  onCourseDelete(course: Course) {
    this.openConfirmModal(course);
  }

  onCourseEdit(course: Course) {
    this.openEditCourseModal(course);
  }


}
