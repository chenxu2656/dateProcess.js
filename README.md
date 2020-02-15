# dateProcess.js
README [中文](#中文) | [English](#English)
---
[![](https://img.shields.io/badge/CDN-cdnLink-brightgreen.svg)](http://files.qianduan.ltd/dateProcess.min.1.1.js)
[![](https://img.shields.io/badge/blog-@myblog-important.svg)](http://www.xxrsblog.cn)
[![](https://img.shields.io/badge/docs-@docsCsdn-blue.svg)](http://www.xxrsblog.cn)
## 中文

### 一、插件介绍
javascript多功能时间插件，包括日期差计算、时间格式处理、某个日期在当时年份过了多少天、还剩多少天等有趣的功能 :stuck_out_tongue_winking_eye:
### 二、调用方法

> dateProcess.min.1.1.js

```
 <script src="http://files.qianduan.ltd/dateProcess.min.1.1.js"></script>
```
> dateProcess.1.1.js

```
<script src="http://files.qianduan.ltd/dateProcess.1.1.js"></script>
```
### 三、说明文档
### 目录

---
[1. 返回当前时间的数组格式](#1-%e8%bf%94%e5%9b%9e%e5%bd%93%e5%89%8d%e6%97%b6%e9%97%b4%e7%9a%84%e6%95%b0%e7%bb%84%e6%a0%bc%e5%bc%8f)

[2. 返回指定时间的时间差](#2-%e8%bf%94%e5%9b%9e%e6%8c%87%e5%ae%9a%e6%97%b6%e9%97%b4%e7%9a%84%e6%97%b6%e9%97%b4%e5%b7%ae)

[3. 返回今年过了多少天](#3-%e8%bf%94%e5%9b%9e%e4%bb%8a%e5%b9%b4%e8%bf%87%e4%ba%86%e5%a4%9a%e5%b0%91%e5%a4%a9)

[4. 返回今年还剩多少天](#4-%e8%bf%94%e5%9b%9e%e4%bb%8a%e5%b9%b4%e8%bf%98%e5%89%a9%e5%a4%9a%e5%b0%91%e5%a4%a9)

[5 今年是闰年还是平年？](#5-%e4%bb%8a%e5%b9%b4%e6%98%af%e9%97%b0%e5%b9%b4%e8%bf%98%e6%98%af%e5%b9%b3%e5%b9%b4)

[6 将/划分的日期字符串转换成数组](#6-%e5%b0%86%e5%88%92%e5%88%86%e7%9a%84%e6%97%a5%e6%9c%9f%e5%ad%97%e7%ac%a6%e4%b8%b2%e8%bd%ac%e6%8d%a2%e6%88%90%e6%95%b0%e7%bb%84)
### 内容
---
#### 1. 返回当前时间的数组格式
> timeArray() 
```
> 返回一个长度为6的数组
``` 
    - array[0] -- > 当前年份
    - array[1] -- > 当前月份
    - array[2] -- > 当前日期
    - array[3] -- > 当前小时
    - array[4] -- > 当前分钟
    - array[5] -- > 当前秒数
> 实例 
```
var now = timeArray();
console.log(now);

输出：
[Running] node "g:\dateProcess\dateProcess.js\dateProcess.1.1.js"
[ 2020, 2, 14, 23, 32, 6 ]
```
#### 2. 返回指定时间的时间差
> timeDiff(string1,string2) 
```
> 可以接收一个日期参数或者两个日期参数
- > 1.当接收一个日期参数时，日期参数格式必须是 'yyyy/mm/dd',返回给定日期与今天的天数差
- > 2.当接收两个日期参数时，两个日期参数格式均必须是 'yyyy/mm/dd'，返回这两个日期的天数差
```

> 实例 
```
var diff1 = timeDiff('2020/2/13');
console.log(`今天是2020年2月15与2020年2月13相差:${diff1}天`);
var diff2 = timeDiff('2020/2/13','2019/12/31');
console.log(`2020年2月13与2019年12月31相差:${diff2}天`);

输出：
[Running] node "g:\dateProcess\dateProcess.js\dateProcess.1.1.js"
今天是2020年2月15与2020年2月13相差:2天
2020年2月13与2019年12月31相差:44天
```
#### 3. 返回今年过了多少天
> passDay() 
```
> 可以不传递参数或者传递一个参数，返回 **Number**
- > 1.当不传递参数时，返回今年已经过了多少天, **(不包括当天)*。
- > 2.当接收一个日期参数时，日期参数格式必须是 'yyyy/mm/dd'，返回这个日期是所在年份的第几天， **(不包括当天)**。
```

> 实例 
```
var pass1 = passDay();
console.log(`好快啊，今年已经过了${pass1}天`);
var pass2 = passDay('2017/1/31');
console.log(`2017/1/31在2017年已经过了${pass2}天`);

输出
[Running] node "g:\dateProcess\dateProcess.js\dateProcess.1.1.js"
好快啊，今年已经过了45天
2017/1/31在2017年已经过了30天
```
#### 4. 返回今年还剩多少天
> remainDay() 
```
> 用法同passDay()基本一样，可以不传递参数或者传递一个参数，返回 *Number*
- > 1.当不传递参数时，返回今年还剩多少天, **(不包括当天)**。
- > 2.当接收一个日期参数时，日期参数格式必须是 'yyyy/mm/dd'，返回这个日期在所在年份还剩多少天， **(不包括当天)**。
```

> 实例
```
var remain1 = remainDay();
console.log(`好快啊，今年还剩${remain1}天就结束了`);
var remain2 = remainDay('2017/1/31');
console.log(`2017/1/31，2017年还剩${remain2}天就过期了`);

输出
[Running] node "g:\dateProcess\dateProcess.js\dateProcess.1.1.js"
好快啊，今年还剩320天就结束了
2017/1/31，2017年还剩334天就过期了
```
#### 5 今年是闰年还是平年？
> isLeapYear()
```
> 可以不接收参数或者接收一个数字类型参数（年份），返回 true 或者 false
- > 1.当不传递参数时，返回: 闰年-->true, 平年-->false。
- > 2.当接收一个日期参数时，返回传递的年份: 闰年-->true, 平年-->false。
```

> 实例
```
var isLeap = isLeapYear();
(isLeap == true)?console.log('今年是闰年'):console.log('今年是平年');
var isLeap2 = isLeapYear(2019);
(isLeap2 == true)?console.log('今年是闰年'):console.log('今年是平年');

输出
[Running] node "g:\dateProcess\dateProcess.js\dateProcess.1.1.js"
今年是闰年
今年是平年
```
#### 6 将/划分的日期字符串转换成数组
> timeParse('yyyy/mm/dd/hh/...') 
```
> 接收一个斜杠划分的日期参数，返回一个数组
```

> 实例 
```
console.log(timeParse('2019/12/3/14/5'));

[Running] node "g:\dateProcess\dateProcess.js\dateProcess.1.1.js"
[ 2019, 12, 3, 14, 5 ]
```