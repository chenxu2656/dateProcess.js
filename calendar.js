let _ = require('lodash')
let calendar = (year,month)=>{
    // leapYear:1 else :0
    let isLeapYear = (year%4==0&&year%100!=0||year%400==0) ? true : false
    let days = [31,28,31,30,31,20,31,31,30,31,30,31]
    days[1] = isLeapYear ? 29 : 28
    let dataArray = new Array(42).fill(0)
    // What day is the first day of the month
    let day = new Date(`${year}-${month}-1`).getDay();
    for(let i=day,j=1;i<day+days[month-1];i++,j++){
        dataArray[i] = j;
    }
    let frontMonth = month==1?days[11]:days[month-2] 
    let nextMonth = month==12?days[0]:days[month]
    for(let i = day-1,j=0;i>=0;i--,j++){
        if(day == 0) break
        else{
            dataArray[i] = frontMonth - j;
        }
    }
    for(let i = day+days[month-1],j=1;i<42;i++,j++){
        if((day+days[month-1])==36) break
        else{
            dataArray[i] = j;
        }
    }
    let dataJson = _.chunk(dataArray,7);
    // return dataJson;
    console.log(dataJson);
}
calendar(2020,1);
// console.log(getd[0]);