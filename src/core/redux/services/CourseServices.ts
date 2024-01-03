import { ToastAndroid } from "react-native";
import sendRequest from "../axios/api";
import * as Converter from "../../../utils/converData";
import courseActions from "../actions/courseActions";
class CourseService {
    GetAllCourseService(dispatch:any){
        return sendRequest('/mobile/course/queryAll','get')
        .then(response =>{
            if(response.data.status == 200){
                const action = courseActions.Get_All_Course(Converter.convertListCourses(response.data.data || []));
                console.log(Converter.convertListCourses(response.data.data || []));
                
                dispatch(action);
                return response.data.data
            }else{
                throw new Error(response.data.message);
            }
        })
        .catch(err => ToastAndroid.show(err.message,ToastAndroid.SHORT))
    }
    GetAllLessonService(dispatch:any){
        return sendRequest('/mobile/course/queryLesson','get')
        .then(response =>{
            if(response.data.status == 200){
                const action = courseActions.Get_All_Lesson(Converter.convertListLessons(response.data.data || []));
                dispatch(action);
                return response.data.data
            }else{
                throw new Error(response.data.message);
            }
        })
        .catch(err => ToastAndroid.show(err.message,ToastAndroid.SHORT))
    }
}
export default new CourseService();

