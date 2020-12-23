let _ = require('lodash')
let calendar = (year,month)=>{
    // leapYear:1 else :0
    let isLeapYear = (year%4==0&&year%100!=0||year%400==0) ? true : false
    let days = [31,28,31,20,31,20,31,31,30,31,30,31]
    days[1] = isLeapYear ? 29 : 28
    let dataArray = new Array(42).fill(0)
    // What day is the first day of the month
    let day = new Date(`${year}-${month}-1`).getDay();
    for(let i=day-1,j=1;i<day-1+days[month-1];i++,j++){
        dataArray[i] = j;
    }
    let test = _.chunk(dataArray,7)
    // console.log(day);
    // console.log(isLeapYear);
    // console.log(days);
    console.log(dataArray);
}
calendar(2020,11);