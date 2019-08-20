const path = require('path');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let common = require('./webpack.common.js');
console.log(common);
let devConfig = {
    mode: 'development',
    output: {
        filename: '_main.[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.styl$/,
                use: [
                    {
                      loader: MiniCssExtractPlugin.loader,
                        options: {
                            sourceMap: true
                        }
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
            filename: '[name].css', // 最终输出的文件名
            chunkFilename: '[id].css'
        })
    ],
    devtool:'inline-source-map'
};
module.exports = merge(common, devConfig);