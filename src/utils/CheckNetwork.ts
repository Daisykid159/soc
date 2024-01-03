import NetInfo from "@react-native-community/netinfo";
export default class NetWorkUtils{
    static async isNetworkAvailable(){
        const res = await NetInfo.fetch();
        return res.isConnected;
    }
}