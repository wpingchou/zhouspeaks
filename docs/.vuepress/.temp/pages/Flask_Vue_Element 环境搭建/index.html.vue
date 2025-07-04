<template><div><p>1、安装nodejs
2、更新 npm</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-"><span class="line"><span>npm install -g cnpm --registry=[https://registry.npm.taobao.org](https://registry.npm.taobao.org/)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>3、管理员身份进入 Windows PowerShell
全局安装</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-"><span class="line"><span>npm install -g @vue/cli</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>4、<strong><em>创建myvue的Flask项目</em></strong></p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-"><span class="line"><span>cd D:\pythonProject\myvue</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><em>Pycharm 创建myvue的Flask项目，项目目录假设是：D:\pythonProject\myvue</em></p>
<p>执行vue create client，创建Vue客户端
<img src="https://senitimes-files.oss-cn-hangzhou.aliyuncs.com/1751335633002.png" alt="1751335633002.png"></p>
<p><img src="https://senitimes-files.oss-cn-hangzhou.aliyuncs.com/1751335678278.png" alt="1751335678278.png"></p>
<p>预设</p>
<p>my-default-preset</p>
<p>接着就可以启动前端服务</p>
<p>cd client</p>
<p>npm run serve</p>
<p><img src="https://senitimes-files.oss-cn-hangzhou.aliyuncs.com/1751335693920.png" alt="1751335693920.png"></p>
<p>安装Element-Plus</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-"><span class="line"><span>cd D:\pythonProject\myvue\client</span></span>
<span class="line"><span></span></span>
<span class="line"><span>npm install element-plus --save</span></span>
<span class="line"><span></span></span>
<span class="line"><span>npm install @element-plus/icons-vue</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改main.js</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-"><span class="line"><span>import { createApp } from 'vue'</span></span>
<span class="line"><span>import App from './App.vue'</span></span>
<span class="line"><span>import router from './router'</span></span>
<span class="line"><span>import store from './store'</span></span>
<span class="line"><span>import 'element-plus/theme-chalk/index.css'</span></span>
<span class="line"><span>import ElementPlus from 'element-plus'</span></span>
<span class="line"><span>import "@element-plus/icons-vue"</span></span>
<span class="line"><span>createApp(App).use(ElementPlus).mount('#app')</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


