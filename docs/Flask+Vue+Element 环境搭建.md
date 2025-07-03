---
title: Flask+Vue+Element 环境搭建
author:
createTime: 2025/07/03 13:05:51
permalink: /Flask+Vue+Element 环境搭建/
---
1、安装nodejs
2、更新 npm
```
npm install -g cnpm --registry=[https://registry.npm.taobao.org](https://registry.npm.taobao.org/)
```
3、管理员身份进入 Windows PowerShell
全局安装
```
npm install -g @vue/cli
```
4、**_创建myvue的Flask项目_**
```
cd D:\pythonProject\myvue
```
*Pycharm 创建myvue的Flask项目，项目目录假设是：D:\pythonProject\myvue*

执行vue create client，创建Vue客户端
![1751335633002.png](https://senitimes-files.oss-cn-hangzhou.aliyuncs.com/1751335633002.png)

![1751335678278.png](https://senitimes-files.oss-cn-hangzhou.aliyuncs.com/1751335678278.png)


预设

my-default-preset

接着就可以启动前端服务

cd client

npm run serve

![1751335693920.png](https://senitimes-files.oss-cn-hangzhou.aliyuncs.com/1751335693920.png)


安装Element-Plus

```
cd D:\pythonProject\myvue\client

npm install element-plus --save

npm install @element-plus/icons-vue 
```

修改main.js

```
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-plus/theme-chalk/index.css'
import ElementPlus from 'element-plus'
import "@element-plus/icons-vue"
createApp(App).use(ElementPlus).mount('#app')
```
