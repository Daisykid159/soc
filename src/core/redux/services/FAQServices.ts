import { ToastAndroid } from "react-native";
import sendRequest from "../axios/api";
import * as Converter from "../../../utils/converData";
import FAQActions from "../actions/FAQActions";
class FAQService {
    GetAllFAQService(dispatch:any){
        return sendRequest('/mobile/faq/queryAll','get')
        .then(response =>{
            if(response.data.status == 200){
                const action = FAQActions.Get_All_FAQ(Converter.convertListFAQ(response.data.data || []));
                dispatch(action);
                return response.data.data
            }else{
                throw new Error(response.data.message);
            }
        })
        .catch(err => ToastAndroid.show(err.message,ToastAndroid.SHORT))
    }
}
export default new FAQService();

