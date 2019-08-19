const path = require('path')
module.exports={
    entry:'./main.js',
    mode:'development',
    output: {
        filename: '_main.js',
        path:path.resolve(__dirname,'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.styl$/,
                use:['style-loader','css-loader','stylus-loader']
            }
        ]
    }
}