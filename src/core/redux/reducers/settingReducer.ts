import { darkTheme,lightTheme } from '../../../config/theme';
import {SettingActionTypes} from '../constants/index';

const initialState = {
  loading: false,
  theme:{...darkTheme}
};

const settingReducer = (state = initialState, action?: any) => {
  switch (action.type) {
    case SettingActionTypes.SET_LOADING:
      const loading = action.payload;
      return {
        ...state,
        loading,
      };
    case SettingActionTypes.CHANGE_THEME:
      const isLight = action.payload;
      console.log("CHANGE THEME LIGHT",isLight);
      
      return {
        ...state,
        theme:isLight?{...lightTheme}:{...darkTheme},
      };
    default:
      return {...state};
  }
};

export default settingReducer;
