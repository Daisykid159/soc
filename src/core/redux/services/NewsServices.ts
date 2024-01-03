import { ToastAndroid } from "react-native";
import sendRequest from "../axios/api";
import * as Converter from "../../../utils/converData";
import newsActions from "../actions/newsActions";
class NewsService {
    GetAllNewsService(dispatch:any){
        return sendRequest('/mobile/new/queryAll','get')
        .then(response =>{
            if(response.data.status == 200){
                const action = newsActions.Get_All_News(Converter.convertListNews(response.data.data || []));
                dispatch(action);
                return response.data.data
            }else{
                throw new Error(response.data.message);
            }
        })
        .catch(err => ToastAndroid.show(err.message,ToastAndroid.SHORT))
    }
}
export default new NewsService();

