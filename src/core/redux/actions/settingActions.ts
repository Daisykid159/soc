import {SettingActionTypes} from '../constants';

class SettingActions {
  Change_Loading = (state:boolean) => {
      return {
          type: SettingActionTypes.SET_LOADING,
          payload: state
      }
  }
  Change_Theme = (isLight:boolean) => {
    return {
        type: SettingActionTypes.CHANGE_THEME,
        payload: isLight
    }
}
}

export default new SettingActions();
