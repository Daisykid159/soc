import { ToastAndroid } from "react-native";
import sendRequest from "../axios/api";
import settingActions from '../actions/settingActions';
class SettingsService{
    ChangeLoadingApp(state:boolean,dispatch:any){
        const action = settingActions.Change_Loading(state);
        dispatch(action);
    }
    ChangeThemeApp(isLight:boolean,dispatch:any){
        const action = settingActions.Change_Theme(isLight);
        dispatch(action);
    }
}
export default new SettingsService();
