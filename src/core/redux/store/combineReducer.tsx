import {combineReducers} from 'redux';
import newsReducer from '../reducers/newsReducer';
import homeReducer from '../reducers/homeReducer';
import authReducer from '../reducers/authReducer';
import warnningReducer from '../reducers/warnningReducer';
import reportReducer from '../reducers/reportReducer';
import notifyReducer from '../reducers/notifyReducer';
import courseReducer from '../reducers/courseReducer';
import instructionReducer from '../reducers/instructionReducer';
import contactReducer from '../reducers/contactReducer';
import FAQReducer from '../reducers/FAQReducer';
import settingReducer from '../reducers/settingReducer';
const myReducers = combineReducers({
  Auth: authReducer,
  Home: homeReducer,
  News: newsReducer,
  Warnning: warnningReducer,
  Report:reportReducer,
  Notify:notifyReducer,
  Course:courseReducer,
  Instruction:instructionReducer,
  Contact:contactReducer,
  FAQ:FAQReducer,
  Settings:settingReducer
});
export default myReducers;
