import { fcmService } from "../../../config/FireBase/FCMService";
import notifyAction from "../actions/notifyAction";
class NotifyService{
    ReadNotify(notify:string,dispatch:any){
        const action = notifyAction.Read_Notify(notify);
        fcmService.seenNotify(notify);
        dispatch(action);
        return true;
    }
}
export default new NotifyService();
