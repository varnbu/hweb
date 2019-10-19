webpack 的基本使用 见上篇 readme.md
 [参考文档](https://github.com/pingan8787/Leo-JavaScript/blob/master/Cute-Webpack/introduction/README.md)

本篇内容主要用于记录 webpack 配置文件的拆分

- 首先安装 webpack-merge 用于合并配置文件
- 添加 将原来的 webpack.common.js 重命名为 webpack.common.js ,添加 webpack.dev.js webpack.prod.js
    - webpack-common.js 是公共配置
    - webpack-dev.js 是开发时所需要的 webpack 配置
    - webpack-prod.js 是发布部署的时候 webpack 配置
    不同环境的配置同公共配置使用 webpack-merge 模块进行合并，并且通过不同的 npm script 命令调用不同的配置 。
    具体的调用命令请看 webpack 文档关于命令行接口的部分 
