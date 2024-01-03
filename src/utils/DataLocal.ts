import AsyncStorage from '@react-native-async-storage/async-storage';
export const setItem = async(key:string,value:string)=>{
    try {
        var json  = await AsyncStorage.setItem(key,JSON.stringify(value));
        return json
    } catch (error) {
        console.log("Error setItem "+ error);
        return null;
    }
}
export const getItem = async(key:string)=>{ 
    try {
        const value:any = await AsyncStorage.getItem(key);
        value != null ? JSON.parse(value) : null;
        return value;
    } catch (error) {
        console.log("Error getItem"+ error);
        
    }
}
export const removeItem = async (key:string) =>{
    try {
        const value = AsyncStorage.removeItem(key);
        return value;
    } catch (error) {
        
    }
}
