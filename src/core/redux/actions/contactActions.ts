/*
 * Reducer actions related with login
 */
import {contactActionTypes} from '../constants';

class ContactActions {
    Get_All_Contact = (contacts:any) => {
      return {
          type: contactActionTypes.QUERY_ALL_CONTACT,
          payload: contacts
      }
  }
}

export default new ContactActions();
