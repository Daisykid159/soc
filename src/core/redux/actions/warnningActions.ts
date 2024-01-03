/*
 * Reducer actions related with login
 */
import {warnningActionTypes} from '../constants';

class WarnningAction {
  Get_All_Warnning = (warnnings:any) => {
      return {
          type: warnningActionTypes.QUERY_WARNNING,
          payload: warnnings
      }
  }
}

export default new WarnningAction();
