const path = require('path')
module.exports = {
    entry: './main.js',
    mode: 'development',
    output: {
        filename: '_main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true
                    }
                }]
            },
            {
                test: /\.styl$/,
                use: ['style-loader',
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
    }
}