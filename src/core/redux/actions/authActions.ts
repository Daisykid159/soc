/*
 * Reducer actions related with login
 */
import {authActionTypes} from '../constants';

class AuthActions {
  User_Login = (user:any) => {
      return {
          type: authActionTypes.USER_LOGIN,
          payload: user
      }
  }
  Save_Device_Token = (device_token:string) => {
    return {
        type: authActionTypes.SAVE_DEVICE_TOKEN,
        payload: device_token
    }
  }
}

export default new AuthActions();
