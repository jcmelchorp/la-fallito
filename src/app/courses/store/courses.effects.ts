import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { CoursesActionTypes } from './courses.actions';
import { Store, select } from '@ngrx/store';
import { map, switchMap, catchError, withLatestFrom } from 'rxjs/operators';
import { Course } from '../models/course.model';
import { of } from 'rxjs';
import { CoursesService } from '../services/courses.service';

import * as fromCourses from './../store/courses.actions';
import { AppState } from '../../reducers/index';
import { getUser } from '../../auth/store/auth.selectors';

@Injectable()
export class CoursesEffects {

  constructor(
    private actions$: Actions,
    private coursesService: CoursesService,
    private store: Store<AppState>) { }

  @Effect()
  query$ = this.actions$.pipe(
    ofType(CoursesActionTypes.COURSES_QUERY),
    withLatestFrom(this.store.pipe(select(getUser))),
    switchMap(([, user]: any) => {
      return this.coursesService.get(user.uid)
        .pipe(
          map((data: any) => {
            const coursesData: Course[] = data.map((res: any) => {
              const key = res.payload.key;
              const course: Course = res.payload.val();
              return {
                key: key || null,
                title: course.title || null,
                description: course.description || null,
                levelId: course.levelId || null,
                area: course.area || null
              };
            });
            return (new fromCourses.CoursesLoaded({ courses: coursesData }));
          }),
          catchError(error => of(new fromCourses.CoursesError({ error })))
        );
    }),
  );

  @Effect({ dispatch: false })
  added$ = this.actions$.pipe(
    ofType(CoursesActionTypes.COURSE_ADDED),
    map((action: fromCourses.CourseDeleted) => action.payload),
    withLatestFrom(this.store.pipe(select(getUser))),
    switchMap(([payload, user]: any) => this.coursesService.add(payload.course, user.uid))
  );

  @Effect({ dispatch: false })
  delete$ = this.actions$.pipe(
    ofType(CoursesActionTypes.COURSE_DELETED),
    map((action: fromCourses.CourseDeleted) => action.payload),
    withLatestFrom(this.store.pipe(select(getUser))),
    switchMap(([payload, user]: any) => this.coursesService.delete(payload.course, user.uid))
  );

  @Effect({ dispatch: false })
  edit$ = this.actions$.pipe(
    ofType(CoursesActionTypes.COURSE_EDITED),
    map((action: fromCourses.CourseEdited) => action.payload),
    withLatestFrom(this.store.pipe(select(getUser))),
    switchMap(([payload, user]: any) => this.coursesService.update(payload.course, user.uid)
    )
  );

}
