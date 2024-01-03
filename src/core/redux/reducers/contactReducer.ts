import {contactActionTypes} from '../constants';
const initialState = {
  contacts: []
};
const contactReducer = (state = initialState, action: any) => {
  switch(action.type){
    case contactActionTypes.QUERY_ALL_CONTACT:
        const contacts = action.payload;
        return {
            ...state,
            contacts
        }
    default: return { ...state };
}
};

export default contactReducer;
