import {courseActionTypes} from '../constants';
class CourseActions {
  Get_All_Course(courses: any) {
    return {
      type: courseActionTypes.QUERY_ALL_COURSE,
      payload: courses,
    };
  }
  Get_All_Lesson(lesson: any) {
    return {
      type: courseActionTypes.QUERY_ALL_LESSON,
      payload: lesson,
    };
  }
}
export default new CourseActions();
