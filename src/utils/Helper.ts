import colorRandom from "../mock/color";


class HelperClass {
    numFormatter(num:number) {
        
        
        if(num > 999 && num < 1000000){
            return Math.floor((num/1000)) + 'K'; 
        }else if(num > 1000000){
            return (num/1000000).toFixed(1) + 'M'; 
        }else if(num < 999){
            return num;
        }
    }
    CountPercent(data:Array<any>,Other:Boolean=true){
        var total = 0;
        data.forEach( (element:any) => {
            total +=element.value
        });
        data = data.map((item:any) =>{
           return {
            key:item.key,
            value:Math.round((item.value/total)*100)
           }
        })
        data.sort((a:any,b:any)=> b.value - a.value)
        if(Other){
            const other = data.splice(2);
            var valueOther = 0;
            other.forEach(item =>{
                valueOther += item.value;
            })
            data.push({
                key:'Other',
                value: valueOther
            })
        }
        return data
    }
    getDateNowString(time = new Date().getTime()) {
        let date = new Date(time);
        let month =
            date.getMonth() < 9 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1,
          day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
        let dateNow = date.getFullYear() + "-" + month + "-" + day;
        return dateNow;
    }
    randomColorNotDuplicate(length:number){
        const keys = Object.keys(colorRandom.names);
        const values = Object.values(colorRandom.names);
        var arrayColor = keys.map((item:any,index:number)=> values[index]);
        var result = [];
        for(var i =0;i<length;i++){
            result.push(...arrayColor.splice(Math.floor(Math.random()*arrayColor.length),1));
        }
        return result
    }
}

export default new HelperClass();