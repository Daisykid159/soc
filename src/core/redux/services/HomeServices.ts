import { ToastAndroid } from "react-native";
import sendRequest from "../axios/api";
import * as Converter from "../../../utils/converData";
import HomeActions from '../actions/homeActions';
class HomeService {
    CountDataService(dispatch:any){
        return sendRequest('/mobile/networks/counts/home','get')
        .then(response =>{
            if(response.data.status == 200){
                const action = HomeActions.get_Count_Home(Converter.convertCountData(response.data.data || []));
                dispatch(action);
                return response.data.data
            }else{
                throw new Error(response.data.message);
            }
        })
        .catch(err => ToastAndroid.show(err.message,ToastAndroid.SHORT))
    }
    CountAllDataService(dispatch:any){
        return sendRequest('/mobile/networks/counts','get')
        .then(response =>{
            if(response.data.status == 200){
                const action = HomeActions.get_All_Count_Data(Converter.convertCountAllData(response.data.data || []));
                dispatch(action);
                return response.data.data
            }else{
                throw new Error(response.data.message);
            }
        })
        .catch(err => ToastAndroid.show(err.message,ToastAndroid.SHORT))
    }
    GetNewsHightLightService(dispatch:any){
        return sendRequest('/mobile/new/highlights','get')
        .then(response =>{
            if(response.data.status == 200){
                const action = HomeActions.get_Banner(Converter.convertDataHightLight(response.data.data|| []));
                dispatch(action);
                return response.data.data
            }else{
                throw new Error(response.data.message);
            }
        })
        .catch(err => ToastAndroid.show(err.message,ToastAndroid.SHORT))
    }
}
export default new HomeService();

