const path = require('path')
const fs = require('fs')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const AddAssetsHtmlPlugin = require('add-asset-html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')

const plugins = [
    new HtmlWebpackPlugin({
        template: 'src/index.html',
        filename: 'index.html',
        chunks: ['vendors','main']
    }),
    new HtmlWebpackPlugin({
        template: 'src/index.html',
        filename: 'list.html',
        chunks: ['vendors','list']
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin()
]
const files = fs.readdirSync(path.resolve(__dirname,'./dll/'))
files.forEach(file => {
    if(/.*\.dll.js/.test(file)) {
        plugins.push(new AddAssetsHtmlPlugin({
                filepath: path.resolve(__dirname, `dll/${file}`)
            }))
    }
    if(/.*\.manifest.json/.test(file)) {
        new webpack.DllReferencePlugin({
            manifest:path.resolve(__dirname,'dll',file)
        })
    }

})
module.exports = {
    mode: "development",
    // entry: "./src/index.js", // 路径相对于webpack.config.js
    // 等同于
    entry: {
            main: './src/index.js',
            list: './src/list.js'
            // sub: './src/index.js'
    },
    resolve: {
        extensions: ['.js','.jsx'],
        // mainFiles: ['index','Index'] // 对打包性能有影响
        // alias:{
        //     dingding: path.resolve(__dirname,'./src/child')
        // }
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
    plugins: plugins,
    output: {
        path: path.resolve(__dirname, 'build'),// 绝对路径+bundle文件夹
        filename: '[name].js'
    }
}