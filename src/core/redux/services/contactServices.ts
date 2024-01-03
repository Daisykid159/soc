import { ToastAndroid } from "react-native";
import sendRequest from "../axios/api";
import * as Converter from "../../../utils/converData";
import contactActions from "../actions/contactActions";
class ContactService {
    GetAllContactService(dispatch:any){
        return sendRequest('/mobile/contact/queryAll','get')
        .then(response =>{
            if(response.data.status == 200){
                const action = contactActions.Get_All_Contact(Converter.convertListContact(response.data.data || []));
                dispatch(action);
                return response.data.data
            }else{
                throw new Error(response.data.message);
            }
        })
        .catch(err => ToastAndroid.show(err.message,ToastAndroid.SHORT))
    }
}
export default new ContactService();

