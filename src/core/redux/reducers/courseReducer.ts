import {courseActionTypes} from '../constants';
const initialState = {
  courses: [],
  lessons:[]
};
const courseReducer = (state = initialState, action: any) => {
  switch(action.type){
    case courseActionTypes.QUERY_ALL_COURSE:
        const courses = action.payload;
        return {
            ...state,
            courses
        }
    case courseActionTypes.QUERY_ALL_LESSON:
      const lessons = action.payload;
      return {
          ...state,
          lessons
      }
    default: return { ...state };
}
};

export default courseReducer;
