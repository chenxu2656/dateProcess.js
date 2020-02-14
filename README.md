# dateProcess.js
README [中文](中文) | [English](English)
---
[![](https://img.shields.io/badge/CDN-cdnLink-brightgreen.svg)](http://files.qianduan.ltd/dateProcess.min.1.1.js)
[![](https://img.shields.io/badge/blog-@myblog-important.svg)](http://files.qianduan.ltd/dateProcess.min.1.1.js)
[![](https://img.shields.io/badge/docs-@docsCsdn-blue.svg)](http://files.qianduan.ltd/dateProcess.min.1.1.js)
## 中文

### 一、插件介绍
javascript多功能时间插件，包括日期差计算、时间格式处理、某个日期在当时年份过了多少天、还剩多少天等有趣的功能 :stuck_out_tongue_winking_eye:
### 二、调用方法
```
:stuck_out_tongue_winking_eye: dateProcess.min.1.1.js
<script src="http://files.qianduan.ltd/dateProcess.min.1.1.js"></script>

:stuck_out_tongue_winking_eye: dateProcess.1.1.js
<script src="http://files.qianduan.ltd/dateProcess.1.1.js"></script>
```
### 三、说明文档
### 目录
---
- [1. 返回当前时间的数组格式](#1-%e8%bf%94%e5%9b%9e%e6%95%b0%e7%bb%84%e6%a0%bc%e5%bc%8f%e7%9a%84%e5%bd%93%e5%89%8d%e6%97%b6%e9%97%b4)
### 内容
---
#### 1. 返回当前时间的数组格式
**timeArray()**
> 返回一个长度为6的数组
    
    - array[0] -- > 当前年份
    - array[1] -- > 当前月份
    - array[2] -- > 当前日期
    - array[3] -- > 当前小时
    - array[4] -- > 当前分钟
    - array[5] -- > 当前秒数

:smile:实例
```
var now = timeArray();
console.log(now);

输出：
[Running] node "g:\dateProcess\dateProcess.js\dateProcess.1.1.js"
[ 2020, 2, 14, 23, 32, 6 ]
```