import {homeActionTypes} from '../constants';
class HomeActions {
  get_Banner(banner: any) {
    return {
      type: homeActionTypes.GET_BANNER_HOME,
      payload: banner,
    };
  }
  get_Count_Home(count: any) {
    return {
      type: homeActionTypes.COUNT_DATA,
      payload: count,
    };
  }
  get_All_Count_Data(countAll: any) {
    return {
      type: homeActionTypes.COUNT_ALL_DATA,
      payload: countAll,
    };
  }
}
export default new HomeActions();
