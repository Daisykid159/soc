/*
 * Reducer actions related with login
 */
import {reportActionTypes} from '../constants';

class ReportAction {
  Get_All_Violate_Policy = (violates:any) => {
      return {
          type: reportActionTypes.QUERY_VIOLATE_POLICY,
          payload: violates
      }
  }
  Get_All_Service = (services:any) => {
    return {
        type: reportActionTypes.QUERY_ATTACK_WEB,
        payload: services
    }
  }
  Get_All_Machine_Malware = (machines:any) => {
    return {
        type: reportActionTypes.QUERY_MACHINE_MALWARE,
        payload: machines
    }
  }
}

export default new ReportAction();
