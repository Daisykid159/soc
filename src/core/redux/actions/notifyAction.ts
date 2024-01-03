import {notifyActionTypes} from '../constants';

class NotifyAction {
    Get_All_Notify = (notifies:Array<any>) => {
        return {
            type: notifyActionTypes.QUERY_ALL_NOTIFY,
            payload: notifies
        }
    }
    Received_Notify = (notify:any) => {
        return {
            type: notifyActionTypes.RECEIVED_NOTIFY,
            payload: notify
        }
    }
    Read_Notify = (notify:any) => {
        return {
            type: notifyActionTypes.READ_NOTIFY,
            payload: notify
        }
    }
}
export default new NotifyAction();