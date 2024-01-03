import {reportActionTypes} from '../constants';
const initialState = {
  violates: [],
  atttack_web:[],
  machine_malware:[]
};
const reportReducer = (state = initialState, action: any) => {
  switch(action.type){
    case reportActionTypes.QUERY_VIOLATE_POLICY:
        const violates = action.payload;
        return {
            ...state,
            violates
        }
    case reportActionTypes.QUERY_ATTACK_WEB:
        const atttack_web = action.payload;
        return {
            ...state,
            atttack_web
        }
    case reportActionTypes.QUERY_MACHINE_MALWARE:
        const machine_malware = action.payload;
        return {
            ...state,
            machine_malware
        }
    default: return { ...state };
}
};

export default reportReducer;
