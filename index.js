/**
 * 计算各种时间差，返回各种时间格式
 * dateProcess.js
 * author：许许如生
 * csdn:https://blog.csdn.net/qq_38634152
 * github:
*/
var dPleapDate = [31,29,31,30,31,30,31,31,30,31,30,31];
var dPnonleapDate = [31,28,31,30,31,30,31,31,30,31,30,31];
function timeArray(){
    let nowDate = new Date();
    let dateArr = new Array();
    dateArr[0] = nowDate.getFullYear();
    dateArr[1] = nowDate.getMonth()+1;
    dateArr[2] = nowDate.getDate();
    dateArr[3] = nowDate.getHours();
    dateArr[4] = nowDate.getMinutes();
    dateArr[5] = nowDate.getSeconds();
    return dateArr;
}
function timeParse(timeParseDate){
    timeParseDate = timeParseDate.split('/');
    for(let i = 0 ; i < timeParseDate.length ;i++){
        timeParseDate[i] = Number(timeParseDate[i]);  
    }
    return timeParseDate;
}
function isLeapYear(isLeapYearDate){
    return ((isLeapYearDate%4===0&&isLeapYearDate%100!==0)||(isLeapYearDate%400===0))?true:false;
}
function passDay(passDaydate=timeArray()){
    passDaydate = (typeof(passDaydate)=="string")?timeParse(passDaydate):passDaydate;
    let count = 0;
    if(isLeapYear(passDaydate[0])===true){
        for(let i = 0 ; i < passDaydate[1] - 1; i ++){
            count += dPleapDate[i];
        }
    }else if(isLeapYear(passDaydate[0])===false){
        for(let i = 0 ; i < passDaydate[1] - 1; i ++){
            count += dPnonleapDate[i];
        }
    }else{
        console.log('您输入的数有问题，我没法进行判断');
    }
    return count+Number(passDaydate[2])-1;
}
function remainDay(remainDay=timeArray()){
    if(typeof(remainDay)=='string'){
        remainDay = timeParse(remainDay);
    }
    return isLeapYear(remainDay[0])?365-passDay(remainDay):364-passDay(remainDay)
}

function timeDiff(date1,date2=timeArray()){
    let passTime = timeParse(date1);
    let futureTime = (typeof(date2)=='string')?timeParse(date2):date2;
    let timeDiffcount = 0 ;
    if(futureTime[0]==passTime[0]){
        if(isLeapYear(futureTime[0])==true){
            timeDiffcount = 365 - passDay(passTime)-remainDay(futureTime);          
        }else{
            timeDiffcount = 364 - passDay(passTime)-remainDay(futureTime);
        }
    }else if(Math.abs(passTime[0]-futureTime[0])==1){
        timeDiffcount = (passTime[0]<futureTime[0])?(remainDay(passTime)+passDay(futureTime)+1):(remainDay(futureTime)+passDay(passTime)+1);
    }else{
        if(passTime[0]<futureTime[0]){       
            for(let i = passTime[0]+1;i < futureTime[0];i++){
                if(isLeapYear(i)=='true'){
                    timeDiffcount+=366;
                }else{ 
                    timeDiffcount+=365;
                }
            }
            timeDiffcount = timeDiffcount + Number(remainDay(passTime))+Number(passDay(futureTime))+1;
        }else{
            for(let i = futureTime[0]+1;i < passTime[0];i++){
                if(isLeapYear(i)=='true'){
                    timeDiffcount+=366;
                }else{ 
                    timeDiffcount+=365;
                }
            }
            timeDiffcount = timeDiffcount + Number(remainDay(passTime))+Number(passDay(passTime))+1;   
        }
     
    }       
     return Math.abs(timeDiffcount);
}
