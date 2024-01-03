import {homeActionTypes} from '../constants';
const initialState = {
  banners: [],
  countHome: [],
  attack:[],
  violate:[],
  warnning:[],
  vulnerability:[],
  os:[]
};
const homeReducer = (state = initialState, action?: any) => {
  switch(action.type){
    case homeActionTypes.COUNT_DATA:
        const count = action.payload;
        return {
            ...state,
            countHome:count
    }
    case homeActionTypes.COUNT_ALL_DATA:
        const countAll = action.payload;
        return {
            ...state,
            attack:countAll.attack,
            violate:countAll.violate,
            warnning:countAll.warnning,
            vulnerability:countAll.vulnerability,
            os:countAll.os
    }
    case homeActionTypes.GET_BANNER_HOME:
        const banners = action.payload;
        return {
            ...state,
            banners:banners
    }
    default: return { ...state };
}
};

export default homeReducer;
