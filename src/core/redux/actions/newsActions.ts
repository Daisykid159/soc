import {newsActionTypes} from '../constants';
class NewsActions {
  Get_All_News(news: any) {
    return {
      type: newsActionTypes.GET_ALL_NEWS,
      payload: news,
    };
  }
  IncrementInit(number: number) {
    return {
      type: newsActionTypes.INCREMENT_NUMBER,
      payload: number,
    };
  }
}
export default new NewsActions();
