import {FAQActionTypes} from '../constants';
const initialState = {
  FAQS: []
};
const FAQReducer = (state = initialState, action: any) => {
  switch(action.type){
    case FAQActionTypes.QUERY_ALL_FAQ:
        const FAQS = action.payload;
        return {
            ...state,
            FAQS
        }
    default: return { ...state };
}
};

export default FAQReducer;
