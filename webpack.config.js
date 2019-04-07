const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')
module.exports = {
    mode: "development",
    // entry: "./src/index.js", // 路径相对于webpack.config.js
    // 等同于
    entry: {
            main: './src/index.js',
            // sub: './src/index.js'
    },
    resolve: {
        extensions: ['.js','.jsx']
    },
    // devtool: "source-map",
    devServer: {
        contentBase: './build',
        open: true,
        port: 1314,
        hot: true,
        hotOnly: true // hmr失效时是否不刷新页面
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
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader',
                'postcss-loader'
            ]
        },{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
        template: 'src/index.html'
        }),
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        path: path.resolve(__dirname, 'build'),// 绝对路径+bundle文件夹
        filename: '[name].js'
    }
}