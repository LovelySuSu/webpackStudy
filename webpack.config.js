const path = require('path')
module.exports = {
    entry: "./src/index.js", // 路径相对于webpack.config.js
    output: {
        path: path.resolve(__dirname,'bundle'),// 绝对路径+bundle文件夹
        filename: 'bundle.js'
    }
}