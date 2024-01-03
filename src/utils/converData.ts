import  Helper from "./Helper";
import { appSettings } from "../config/AppSettings";
import Constant from "../config/Constant";
const domain_gateway = appSettings.domainDefault;
export const convertDataHightLight = (data:Array<any>)=>{
    console.log('domain_gateway',domain_gateway);
    console.log('appSettings',appSettings);
return data.map((item:any) =>{
    return {
    image: appSettings.domainDefault+'/static'+(item.image || '/news/nature2.jpg'),
    title: item.title,
    description: item.pubDate,
    id: item.link
    }
})
}
export const convertListNews = (data:Array<any>)=>{
    return data.map((item:any) =>{
        return {
        image: appSettings.domainDefault+'/static'+(item.image || '/news/nature2.jpg'),
        title: item.title,
        time: item.pubDate,
        description:item[`dc:creator`],
        id: item.link,
        author:item.author
        }
    })
}
export const convertListInstruction = (data:any)=>{
    return data.map((item:any) =>{
        return {
            ...item,
        image: appSettings.domainDefault+'/static'+(item.image || 'news/nature2.jpg'),
        }
    })
}
export const convertListContact = (data:any)=>{
    return data
}
export const convertListFAQ = (data:any)=>{
    return data
}
export const convertListCourses = (data:any)=>{
    return data.map((item:any) =>{
        return {
            ...item,
        image: appSettings.domainDefault+'/static/'+(item.image || 'news/nature2.jpg'),
        }
    })
}
export const convertListLessons = (data:any)=>{
    return data.map((item:any) =>{
        return {
            ...item,
        video: appSettings.domainDefault+'/static/'+(item.video || 'lessons/1626350319765-baihoc1.mp4'),
        }
    })
}
export const convertCountData = (data:Array<any>)=>{
    return data.map((item:any,index:number) =>{
        
        var navigate = null;
        switch (item.key) {
            case Constant.KEYS_WORD.ATTACK:
                navigate = Constant.SCREEN.SERVICE
                break;
            case Constant.KEYS_WORD.VIOLATE:
                navigate = Constant.SCREEN.POLICY
                break;
            case Constant.KEYS_WORD.OS:
                navigate = Constant.SCREEN.TERMINAL
                break;
            case Constant.KEYS_WORD.WARNING:
                navigate = Constant.SCREEN.WARNING
                break;
            case Constant.KEYS_WORD.VULNERABILITY:
                navigate = Constant.SCREEN.TERMINAL
                break;
            case Constant.KEYS_WORD.MACHINEMALWARE:
                navigate = Constant.SCREEN.TERMINAL
                break;
            default:  navigate = null
                break;
        }
        return {
            key:index,
            image:  appSettings.domainDefault+'/static'+(item.image || '/news/nature2.jpg'),
            title: item.key,
            task: Helper.numFormatter(item.value)+'',
            des: item.unit,
            navigate:navigate
        }
    })
}
export const convertCountAllData = (object:any)=>{
    return {
        attack:object.attack?object.attack.count:[],
        os:object.os?object.os.count:[],
        warnning:addFieldColorRandom(Helper.CountPercent(object.warnning?object.warnning.count:[],false)),
        violate:object.violate?object.violate.count:[],
        vulnerability: addFieldColorRandom(Helper.CountPercent(object.vulnerability?object.vulnerability.count:[],false)),
    }
}

export const convertCountDataWarnning = (data:any) =>{
     return (Helper.CountPercent(data))
}
export const convertListWarnning = (data:Array<any>)=>{
    return data
}
export const convertListViolate = (data:Array<any>)=>{
    return data.sort((a:any,b:any)=> b.times - a.times)
}
export const convertListMachineMalware = (data:Array<any>)=>{
    return data
}
export const convertListAttackWeb = (data:Array<any>)=>{
    const result = data.map((item:any) =>{
       return{
        ...item,
        time:new Date(item.time).getTime()
       }
    })
    const sorted = result.sort((a,b)=> b.time - a.time)
    return sorted
}
interface LooseObject {
    [key: string]: any,
}
export const convertListNotify = (object:any)=>{
    const keys:Array<any> = Object.keys(object);
    const values:Array<any> = Object.values(object);
   
    return keys.map((item:any,index:number)=>{
        var origin:LooseObject = {};
        origin[`${item}`] = values[index];
        return {
            id:values[index].data.id,
            time: parseInt(item),
            title: values[index].notify.title,
            image:values[index].notify.imageUrl,
            body: values[index].notify.body,
            data:values[index].data,
            seen:values[index].data.seen?(values[index].data.seen=='false'?false:true):false,
        }
    })
}
export const convertSingleNotify = (object:any,data:any)=>{
    return {
        id:data.id,
        time: new Date().getTime(),
        title: object.title,
        image:object.android.imageUrl || object.android.image,
        body: object.body,
        data:data,
        seen:false,
    }
}
export const addFieldColorRandom = (data:Array<any>)=>{
    const arrayRandomColor = Helper.randomColorNotDuplicate(data.length);
    return data.map((item,index) =>{
        return {
           ...item,
           color:arrayRandomColor[index]
        }
    })
}



