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
    console.log('this point')
  }
  get user() {
    return this.afAuth.currentUser;
  }

  openAddCourseModal() {
    this.dialogRef = this.dialog.open(CourseModalComponent, {
      width: '250px',
      data: {}
    });

    this.dialogRef.componentInstance.courseData.subscribe((courseData: Course) => {
      console.log('The dialog was closed');
      console.log(courseData);
      this.store.dispatch(new fromCourses.CourseAdded({ course: courseData }));
      console.log('course passed');
      console.log(courseData);
    });
  }

  openEditCourseModal(course: Course) {
    this.dialogRef = this.dialog.open(CourseModalComponent, {
      width: '250px',
      data: {
        key: course.key,
        title: course.title,
        description: course.description,
        area: course.area,
        levelId: course.levelId
      }
    });

    this.dialogRef.afterClosed().subscribe((courseData: Course) => {
      console.log('The dialog was closed');
      console.log(courseData);
      this.newCourse = courseData;
      console.log(this.newCourse);

    });
  }

  openConfirmModal(project: Course) {
    /* this.dialogRef = this.dialog.open(ConfirmModalComponent, {
      width: '250px',
      data: {
        key: course.key,
        title: course.title,
        description: course.description,
        area: course.area,
        level: course.level
      }
    }); */
    /*
    this.modalRef.content.confirmation.pipe(take(1)).subscribe((confirmation: boolean) => {
      if (confirmation) {
        this.store.dispatch(new fromCourses.CourseDeleted({ project }));
      }
    }); */
  }

  onCourseDelete(course: Course) {
    this.openConfirmModal(course);
  }

  onCourseEdit(course: Course) {
    this.openEditCourseModal(course);
  }


}
