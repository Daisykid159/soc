import produce from 'immer';
import {authActionTypes} from '../constants/index';

const initialState = {
  user: null,
  device_token: null,
};

const authReducer = (state = initialState, action?: any) => {
  switch (action.type) {
    case authActionTypes.USER_LOGIN:
      const user = action.payload;
      return {
        ...state,
        user,
      };
    case authActionTypes.SAVE_DEVICE_TOKEN:
      const device_token = action.payload;
      return {
        ...state,
        device_token: device_token,
      };
    default:
      return {...state};
  }
};

export default authReducer;
