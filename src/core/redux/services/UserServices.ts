import { ToastAndroid } from "react-native";
import sendRequest from "../axios/api";
import authActions from '../actions/authActions';
class AuthService{
    LoginService(body:any,dispatch:any){
        return sendRequest('/user/login','post',body)
        .then(response =>{
            if(response.data.status == 200){
                const action = authActions.User_Login(response.data.data);
                dispatch(action);
                return response.data.data
            }else{
                throw new Error(response.data.message);
            }
        })
        .catch(err => ToastAndroid.show(err.message,ToastAndroid.SHORT))
    }
    SaveDeviceTokenService(device_token:string,dispatch:any){
        const action = authActions.Save_Device_Token(device_token);
        dispatch(action);
        return true;
    }
    requestHTTPS(){
            const rq =  fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
              return json;
            })
            .catch((error) => {
              console.error(error);
            });
            console.log('request fetch',rq);
            return rq
    }
    requestAXIOS(){
        const rq =  fetch('https://10.2.32.65:8080/v1/mobile/course/queryAll')
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
          return json;
        })
        .catch((error) => {
          console.error(error);
        });
        console.log('request axios',rq);
        return rq
        
}
   
}
export default new AuthService();
