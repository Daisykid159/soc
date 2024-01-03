import {newsActionTypes} from '../constants';
const initialState = {
  news: [],
};
const newsReducer = (state = initialState, action: any) => {
  switch(action.type){
    case newsActionTypes.GET_ALL_NEWS:
        const news = action.payload;
        return {
            ...state,
            news
        }
    default: return { ...state };
}
};

export default newsReducer;
