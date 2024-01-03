/*
 * Reducer actions related with login
 */
import {FAQActionTypes} from '../constants';

class FAQActions {
    Get_All_FAQ = (FAQS:any) => {
      return {
          type: FAQActionTypes.QUERY_ALL_FAQ,
          payload: FAQS
      }
  }
}

export default new FAQActions();
