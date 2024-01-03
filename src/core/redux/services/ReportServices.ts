import { ToastAndroid } from "react-native";
import sendRequest from "../axios/api";
import * as Converter from "../../../utils/converData";
import reportActions from '../actions/reportActions';
class ReportService {
    GetAllViolatePolicy(dispatch:any,limit=100,offset=0){
        return sendRequest(`/mobile/networks/list/violate?limit=${limit}&offset=${offset}`,'get')
        .then(response =>{
            if(response.data.status == 200){
                const action = reportActions.Get_All_Violate_Policy(Converter.convertListViolate(response.data.data || []));
                dispatch(action);
                return response.data.data
            }else{
                throw new Error(response.data.message);
            }
        })
        .catch(err => ToastAndroid.show(err.message,ToastAndroid.SHORT))
    }
    GetAllAttackWebsite(dispatch:any,limit=100,offset=0){
        return sendRequest(`/mobile/networks/list/list-attack-web?limit=${limit}&offset=${offset}`,'get')
        .then(response =>{
            if(response.data.status == 200){
                const action = reportActions.Get_All_Service(Converter.convertListAttackWeb(response.data.data || []));
                dispatch(action);
                return response.data.data
            }else{
                throw new Error(response.data.message);
            }
        })
        .catch(err => ToastAndroid.show(err.message,ToastAndroid.SHORT))
    }
    GetAlltMachineMalware(dispatch:any,limit=100,offset=0){
        return sendRequest(`/mobile/networks/list/machine-malware?limit=${limit}&offset=${offset}`,'get')
        .then(response =>{
            if(response.data.status == 200){
                const action = reportActions.Get_All_Machine_Malware(Converter.convertListMachineMalware(response.data.data || []));
                dispatch(action);
                return response.data.data
            }else{
                throw new Error(response.data.message);
            }
        })
        .catch(err => ToastAndroid.show(err.message,ToastAndroid.SHORT))
    }
}
export default new ReportService();

