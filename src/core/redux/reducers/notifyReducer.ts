import {notifyActionTypes} from '../constants';
const initialState = {
    notifies: []
};
const notifyReducer = (state = initialState, action: any) => {
  switch(action.type){
    case notifyActionTypes.QUERY_ALL_NOTIFY:
        const notifies = action.payload;
        return {
            ...state,
            notifies
        }
    case notifyActionTypes.RECEIVED_NOTIFY:
        const notify = action.payload;
        var newNotifies:Array<any> = [...state.notifies];
        newNotifies.push(notify);
        return {
            ...state,
            notifies:newNotifies
        }
    case notifyActionTypes.READ_NOTIFY:
        const readNotify = action.payload;
        var newNotifies:Array<any> = state.notifies.map((item:any) =>{
               if(item.id == readNotify.id){
                return {
                    ...item,
                    seen:true
                }
               }return item
        });
        return {
            ...state,
            notifies:newNotifies
        }

    default: return { ...state };
}
};

export default notifyReducer;
