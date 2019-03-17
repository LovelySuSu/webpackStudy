const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    entry: {
        main: './src/index.js'
    },
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
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new CleanWebpackPlugin({
            // 向上一层为根路径
            root: path.resolve(__dirname, '../')
        }),
    ],
    output: {
        path: path.resolve(__dirname, '../build'),// 绝对路径+bundle文件夹
        filename: '[name].js',
        chunkFilename: "[name].chunk.js"
    },
    optimization: {
        splitChunks: {
            chunks: "all"
        },
    }
}