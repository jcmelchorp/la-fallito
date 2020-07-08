import { Action } from '@ngrx/store';
import { Course } from '../models/course.model';

export enum CoursesActionTypes {
  COURSES_QUERY = '[Courses] Courses query',
  COURSES_LOADED = '[Courses] Courses loaded',

  COURSE_ADDED = '[Courses] Course added',

  COURSE_EDITED = '[Courses] Course edited',
  COURSE_DELETED = '[Courses] Course deleted',

  COURSES_ERROR = '[Courses] Courses error'
}

export class CoursesQuery implements Action {
  readonly type = CoursesActionTypes.COURSES_QUERY;
}

export class CoursesLoaded implements Action {
  readonly type = CoursesActionTypes.COURSES_LOADED;

  constructor(public payload: { courses: Course[] }) { }
}

export class CourseAdded implements Action {
  readonly type = CoursesActionTypes.COURSE_ADDED;

  constructor(public payload: { course: Course }) { }
}

export class CourseEdited implements Action {
  readonly type = CoursesActionTypes.COURSE_EDITED;

  constructor(public payload: { course: Course }) { }
}

export class CourseDeleted implements Action {
  readonly type = CoursesActionTypes.COURSE_DELETED;

  constructor(public payload: { course: Course }) { }
}

export class CoursesError implements Action {
  readonly type = CoursesActionTypes.COURSES_ERROR;

  constructor(public payload: { error: any }) { }
}

export type CoursesActions =
  | CoursesQuery
  | CoursesLoaded
  | CourseAdded
  | CourseEdited
  | CourseDeleted
  | CoursesError;
