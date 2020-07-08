import { Course } from '../models/course.model';

export interface CoursesState {
  courses: Course[] | null;
  loading: boolean;
  error: any;
}

export const coursesInitialState: CoursesState = {
  courses: null,
  loading: false,
  error: null
};
