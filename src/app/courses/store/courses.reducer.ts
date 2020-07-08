import { CoursesActions, CoursesActionTypes } from './courses.actions';
import { coursesInitialState, CoursesState } from './courses.state';


export function coursesReducer(state = coursesInitialState, action: CoursesActions): CoursesState {
  switch (action.type) {

    case CoursesActionTypes.COURSES_QUERY: {
      return Object.assign({}, state, {
        loading: true,
      });
    }

    case CoursesActionTypes.COURSES_LOADED: {
      return Object.assign({}, state, {
        courses: action.payload.courses,
        loading: false,
      });
    }

    case CoursesActionTypes.COURSES_ERROR: {
      return Object.assign({}, state, {
        loading: false,
        error: action.payload.error
      });
    }

    default:
      return state;
  }
}
