
import AsyncStorage from "@react-native-async-storage/async-storage";
import Constant from "./Constant";
class AppSetting {
    domainDefault: string = "http://10.2.32.65:8080/v1";
    cookies:string  = "";
    token:any = null;
    username:any = null;
    password:any = null;
    remember:any = false;
    dateView:Date = new Date();
    loading:boolean = false;
    checkAppSettings = async() =>{
        const result = await Promise.all([
        AsyncStorage.getItem(Constant.STORAGE.DOMAIN),
        AsyncStorage.getItem(Constant.STORAGE.TOKEN),
        AsyncStorage.getItem(Constant.STORAGE.USERNAME),
        AsyncStorage.getItem(Constant.STORAGE.PASSWORD),
        AsyncStorage.getItem(Constant.STORAGE.REMEMBER)
      ]);
      
        const domain = result[0] || "";
        if(domain != ""){
          this.domainDefault = domain;
        }
        const token = result[1];
        if(token){
          this.token = token;
        }
        const username = result[2];
        if(username){
          this.username = username;
        }
        const password = result[3];
        if(password){
          this.password = password;
        }
        const remember = result[4];
        if(remember){
          this.remember = remember=='true'?true:false;
        }
    }
    async showStorage(){
      const result = await Promise.all([
        AsyncStorage.getItem(Constant.STORAGE.DOMAIN),
        AsyncStorage.getItem(Constant.STORAGE.TOKEN),
        AsyncStorage.getItem(Constant.STORAGE.USERNAME),
        AsyncStorage.getItem(Constant.STORAGE.PASSWORD),
        AsyncStorage.getItem(Constant.STORAGE.REMEMBER)
      ]);
      console.log('ASYNSTORAGE',result);
      
    }
}
export const appSettings = new AppSetting();
