---
title: Vuepress+Vercel+Github 免费搭建博客
author:
createTime: 2025/07/04 10:05:33
permalink: /Vuepress+Vercel+Github 免费搭建博客/
---
# 环境准备

**第1步：安装node.js**
访问[Node.js 官方网站](https://nodejs.org/zh-cn/download)，选择适合系统的版本下载安装包并运行安装，在命令行输入`node -v`，若显示版本号则安装成功

**第2步：安装 Git** 
从[Github 官方下载地址](https://git-scm.com/downloads)下载并安装 Git，安装时可按默认设置。安装完成后，在命令行输入`git --version`，若显示版本号则表示安装成功。

# 创建项目

**第1步：创建文件夹**
在F盘创建zhouspeaks的文件夹，例如：F:\zhouspeaks。

**第2步：初始化项目**

2.1 在F:\zhouspeaks目录，鼠标右键，进入git命令窗口，如下所示：
![image.png](https://senitimes-files.oss-cn-hangzhou.aliyuncs.com/20250703172559313.png)

2.2 执行如下命令，如下所示：
```
git init
npm init
```

**第3步：安装 VuePress
```
# 安装 vuepress
npm install -D vuepress@next
# 安装打包工具和主题
npm install -D @vuepress/bundler-vite@next @vuepress/theme-default@next
```

**第4步：创建 `docs` 目录和 `docs/.vuepress` 目录**
```
mkdir docs
mkdir docs/.vuepress
```

**第5步：创建 VuePress 配置文件 `docs/.vuepress/config.js`**
```
import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme(),
})
```

![image.png](https://senitimes-files.oss-cn-hangzhou.aliyuncs.com/20250703182645161.png)

**第6步：启动开发服务器**
```
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```
运行 `docs:dev` 脚本可以启动开发服务器：
```
npm run docs:dev
```
运行 `docs:build` 脚本可以构建你的网站：
```
npm run docs:build
```
# 创建Github仓库

**第1步：SSH Key本地生成并维护到github上**
![image.png](https://senitimes-files.oss-cn-hangzhou.aliyuncs.com/20250703183432550.png)
![image.png](https://senitimes-files.oss-cn-hangzhou.aliyuncs.com/20250703183906485.png)

**第2步：同步本地项目到github上**
# Vercel 部署

**第1步：在 Vercel 上关联该 github 账号**
![image.png](https://senitimes-files.oss-cn-hangzhou.aliyuncs.com/20250703184539649.png)


**第2步：在 Vercel 上点击 Add New Project，点击 import，导入该博客项目**
![image.png](https://senitimes-files.oss-cn-hangzhou.aliyuncs.com/20250703184517174.png)


**第3步：部署**
![image.png](https://senitimes-files.oss-cn-hangzhou.aliyuncs.com/20250703184448788.png)


**第4步：Add Domain 绑定已购买解析的域名**
![image.png](https://senitimes-files.oss-cn-hangzhou.aliyuncs.com/20250703184436048.png)
