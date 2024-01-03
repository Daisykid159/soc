import { ToastAndroid } from "react-native";
import sendRequest from "../axios/api";
import * as Converter from "../../../utils/converData";
import warnningActions from '../actions/warnningActions';
class WarnningService {
    GetAllService(dispatch:any,limit=100,offset=0){
        return sendRequest(`/mobile/networks/list/warnning?limit=${limit}&offset=${offset}`,'get')
        .then(response =>{
            if(response.data.status == 200){
                const action = warnningActions.Get_All_Warnning(Converter.convertListWarnning(response.data.data || []));
                dispatch(action);
                return response.data.data
            }else{
                throw new Error(response.data.message);
            }
        })
        .catch(err => ToastAndroid.show(err.message,ToastAndroid.SHORT))
    }
}
export default new WarnningService();

