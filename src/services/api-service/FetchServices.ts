import axios from "axios";
import * as rssParser from 'react-native-rss-parser';
import newsActions from '../../core/redux/actions/newsActions';
import homeActions from "../../core/redux/actions/homeActions";

export const Fetch_News= async (url: string,dispatch:any)=> {
    const response = await axios.get(url)
    const result =  await rssParser.parse(response.data)
    const action = newsActions.Get_All_News(result.items);
    dispatch(action)
    return {
        title: result.title,
        description: result.description
    }
}
export const Fetch_Banner = async (url: string,dispatch:any)=> {
    const response = await axios.get(url)
    const action = homeActions.get_Banner(response.data);
    dispatch(action)
    return response.data
}