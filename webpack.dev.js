const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let common = require('./webpack.common.js');
console.log(common);
let devConfig = {
    mode: 'development',
    output: {
        filename: '_main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.styl$/,
                use: [
                    {
                      loader: 'style-loader',

                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: "postcss",
                            sourceMap: true,
                            plugins: loader => [
                                require('autoprefixer')(),
                                // 这里可以使用更多配置，如上面提到的 postcss-cssnext 等
                                // require('postcss-cssnext')()
                            ]
                        }
                    },
                    {
                        loader: 'stylus-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'a.css?[hash]', // 最终输出的文件名
            chunkFilename: 'a.css'
        }),
        new webpack.NamedChunksPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    devtool:'inline-source-map',
    devServer:{
        contentBase:path.resolve(__dirname,'dist'),
        compress:true,
        hot:true,
        overlay:true,
        open:true,
        publicPath:'/',
        host:'localhost',
        port:'8300',
        proxy: {   // 设置代理
            "/baidu": {
                target: "http://www.baidu.com",
                pathRewrite: {"^/baidu" : ""}
            },
        }
    }
};
module.exports = merge(common, devConfig);