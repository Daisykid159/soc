import axios from 'axios';
import { appSettings } from '../../../config/AppSettings';
import Helper from '../../../utils/Helper';


export default function sendRequest(endpoint:any,method:any,body?:any){
    const dateView = Helper.getDateNowString(appSettings.dateView.getTime());
    console.log(dateView);
    const request = axios({
        method: method,
        url: `${appSettings.domainDefault}${endpoint}`,
        data: body,
        // headers: { "x-access-token": `${token}` },
        params:{
             date:dateView
        },
        timeout:15000
    })
   console.log("SEND REQUEST",`${appSettings.domainDefault}${endpoint}`);
    return request;
}