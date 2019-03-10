const path = require('path')
module.exports = {
    mode: "development",
    entry: "./src/index.js", // 路径相对于webpack.config.js
    // 等同于
    // entry: {
    //         main: './src/index.js'
    // },
    module: {
        rules: [{
            test: /\.jpg$/,
            use: 'file-loader'
        }]
    },
    output: {
        path: path.resolve(__dirname,'bundle'),// 绝对路径+bundle文件夹
        filename: 'bundle.js'
    }
}