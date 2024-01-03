import {warnningActionTypes} from '../constants';
const initialState = {
  warnnings: [],
};
const warnningReducer = (state = initialState, action: any) => {
  switch(action.type){
    case warnningActionTypes.QUERY_WARNNING:
        const warnnings = action.payload;
        return {
            ...state,
            warnnings
        }
    default: return { ...state };
}
};

export default warnningReducer;
