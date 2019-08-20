const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports = {
    entry: './main.js',
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                include: [path.resolve(__dirname,'src/')],
                use:[{
                    loader: 'url-loader',
                    options:{
                        limit:1000000
                    }
                }]
            },
            {
                test:/\.js$/,
                use:[{
                    loader: 'babel-loader',
                    options: {
                        presets:['@babel/preset-env']
                    }
                }],
                exclude: /(node_modules)|(bower_components)/
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,'./index.html'),
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeAttributeQuotes: true
            }
        }),
        new CleanWebpackPlugin()
    ]
};