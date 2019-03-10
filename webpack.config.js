const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: "development",
    entry: "./src/index.js", // 路径相对于webpack.config.js
    // 等同于
    // entry: {
    //         main: './src/index.js'
    // },
    module: {
        rules: [{
            test: /\.(jpg|png|gif)$/,
            use: {
                loader: "url-loader",
                options: {
                    name: '[name]_[hash].[ext]',
                    outputPath: 'images/',
                    limit: 2048
                }
            }
        },{
            test: /\.scss$/,
            use: [
                'style-loader',
                {
                    loader: "css-loader",
                    options: {
                        importLoaders: 2 ,// 通过import引入的scss文件也要走前两个loader
                        modules: true
                    }
                },
                'sass-loader',
                'postcss-loader'
            ]
        }]
    },
    plugins: [new HtmlWebpackPlugin({
        template: 'src/index.html'
    })],
    output: {
        path: path.resolve(__dirname, 'bundle'),// 绝对路径+bundle文件夹
        filename: 'bundle.js'
    }
}