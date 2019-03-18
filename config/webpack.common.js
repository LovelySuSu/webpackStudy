const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')
const merge = require('webpack-merge')
const devConfig = require('./webpack.dev')
const prodConfig = require('./webpack.prod')


const commonConfig = {
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
            use: [{
                loader: "babel-loader"
            },{
                loader: "imports-loader?this=>window"
            }],
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
        new webpack.ProvidePlugin({
            // 模块中使用了$就自动引入jquery，并将jquery赋值给$
            $: 'jquery',
            _join: ['lodash','join']
        })
    ],
    output: {
        path: path.resolve(__dirname, '../build'),// 绝对路径+bundle文件夹
    },
    optimization: {
        runtimeChunk: {
          name: 'runtime' // 老版本webpack 打包可能没修改但contenthash发生了变化
        },
        usedExports: true,//tree shaking
        splitChunks: {
            chunks: "all",
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    name: "vendors"
                },
                default: {
                    priority: -20,
                    reuseExistingChunk: true,
                    name: "common"
                },
            }

        }
    },
    performance: false // 关闭性能警告
}

module.exports = (production) => {
    if(production) {
        return merge(commonConfig,prodConfig)
    } else return merge(commonConfig,devConfig)
}