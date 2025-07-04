<template><div><p><strong>第1步：安装node.js</strong>
访问<a href="https://nodejs.org/zh-cn/download" target="_blank" rel="noopener noreferrer">Node.js 官方网站</a>，选择适合系统的版本下载安装包并运行安装，在命令行输入<code v-pre>node -v</code>，若显示版本号则安装成功</p>
<p><strong>第2步：安装 Git</strong>
从<a href="https://git-scm.com/downloads" target="_blank" rel="noopener noreferrer">Github 官方下载地址</a>下载并安装 Git，安装时可按默认设置。安装完成后，在命令行输入<code v-pre>git --version</code>，若显示版本号则表示安装成功。</p>
<h1 id="创建项目" tabindex="-1"><a class="header-anchor" href="#创建项目"><span>创建项目</span></a></h1>
<p><strong>第1步：创建文件夹</strong>
在F盘创建zhouspeaks的文件夹，例如：F:\zhouspeaks。</p>
<p><strong>第2步：初始化项目</strong></p>
<p>2.1 在F:\zhouspeaks目录，鼠标右键，进入git命令窗口，如下所示：
<img src="https://senitimes-files.oss-cn-hangzhou.aliyuncs.com/20250703172559313.png" alt="image.png"></p>
<p>2.2 执行如下命令，如下所示：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-"><span class="line"><span>git init</span></span>
<span class="line"><span>npm init</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>**第3步：安装 VuePress</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-"><span class="line"><span># 安装 vuepress</span></span>
<span class="line"><span>npm install -D vuepress@next</span></span>
<span class="line"><span># 安装打包工具和主题</span></span>
<span class="line"><span>npm install -D @vuepress/bundler-vite@next @vuepress/theme-default@next</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>第4步：创建 <code v-pre>docs</code> 目录和 <code v-pre>docs/.vuepress</code> 目录</strong></p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-"><span class="line"><span>mkdir docs</span></span>
<span class="line"><span>mkdir docs/.vuepress</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>第5步：创建 VuePress 配置文件 <code v-pre>docs/.vuepress/config.js</code></strong></p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-"><span class="line"><span>import { viteBundler } from '@vuepress/bundler-vite'</span></span>
<span class="line"><span>import { defaultTheme } from '@vuepress/theme-default'</span></span>
<span class="line"><span>import { defineUserConfig } from 'vuepress'</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default defineUserConfig({</span></span>
<span class="line"><span>  bundler: viteBundler(),</span></span>
<span class="line"><span>  theme: defaultTheme(),</span></span>
<span class="line"><span>})</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://senitimes-files.oss-cn-hangzhou.aliyuncs.com/20250703182645161.png" alt="image.png"></p>
<p><strong>第6步：启动开发服务器</strong></p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-"><span class="line"><span>{</span></span>
<span class="line"><span>  "scripts": {</span></span>
<span class="line"><span>    "docs:dev": "vuepress dev docs",</span></span>
<span class="line"><span>    "docs:build": "vuepress build docs"</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行 <code v-pre>docs:dev</code> 脚本可以启动开发服务器：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-"><span class="line"><span>npm run docs:dev</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>运行 <code v-pre>docs:build</code> 脚本可以构建你的网站：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-"><span class="line"><span>npm run docs:build</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h1 id="创建github仓库" tabindex="-1"><a class="header-anchor" href="#创建github仓库"><span>创建Github仓库</span></a></h1>
<p><strong>第1步：SSH Key本地生成并维护到github上</strong>
<img src="https://senitimes-files.oss-cn-hangzhou.aliyuncs.com/20250703183432550.png" alt="image.png">
<img src="https://senitimes-files.oss-cn-hangzhou.aliyuncs.com/20250703183906485.png" alt="image.png"></p>
<p><strong>第2步：同步本地项目到github上</strong></p>
<h1 id="vercel-部署" tabindex="-1"><a class="header-anchor" href="#vercel-部署"><span>Vercel 部署</span></a></h1>
<p><strong>第1步：在 Vercel 上关联该 github 账号</strong>
<img src="https://senitimes-files.oss-cn-hangzhou.aliyuncs.com/20250703184539649.png" alt="image.png"></p>
<p><strong>第2步：在 Vercel 上点击 Add New Project，点击 import，导入该博客项目</strong>
<img src="https://senitimes-files.oss-cn-hangzhou.aliyuncs.com/20250703184517174.png" alt="image.png"></p>
<p><strong>第3步：部署</strong>
<img src="https://senitimes-files.oss-cn-hangzhou.aliyuncs.com/20250703184448788.png" alt="image.png"></p>
<p><strong>第4步：Add Domain 绑定已购买解析的域名</strong>
<img src="https://senitimes-files.oss-cn-hangzhou.aliyuncs.com/20250703184436048.png" alt="image.png"></p>
</div></template>


