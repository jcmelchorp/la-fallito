import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CoursesState } from './courses.state';

export const getCoursesState = createFeatureSelector<CoursesState>('courses');

export const getCourses = createSelector(
  getCoursesState,
  courses => courses.courses
);

export const getAllLoaded = createSelector(
  getCoursesState,
  courses => courses.loading
);

export const getError = createSelector(
  getCoursesState,
  courses => courses.error
);
