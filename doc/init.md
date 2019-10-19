# 野蛮生长

## 初始化项目

- 首先初始化目录为一个 npm 包 ， 然后安装 webpack  webpack-cli 并保存到 package.json 中 ，其中 webpack-cli 在webpack 4.0之后的版本需要单独安装。
 
```shell script
npm install webpack webpack-cli --save-dev
```
- 创建初始化项目
    - 创建 src 目录用于存放 源代码
    - 创建 index.html 作为打包后的代码挂载的 html 模板
    - 创建 main.js webpack 的入口页面
    - src 中 添加 assert 目录 当做静态文件的存放目录
    - src 中 添加 style 目录 存放样式文件 
    - 上一步中的 style 目录新建一个css 、 stylus 文件 并在 main.js 中引入
    - assert 目录中放入一张图片 并在 css 使用
 
 ## 入口出口与模板文件的配置解释
 
 
