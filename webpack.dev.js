const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
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
    plugins: []
};
module.exports=merge(common,devConfig)