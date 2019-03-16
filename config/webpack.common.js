const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    entry: {
        main: './src/index.js',
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
        filename: '[name].js'
    },
    optimization: {
        // splitChunks: {},
        // 等价于
        splitChunks: {
            // 代码分割时只对异步代码生效，同步 import lodash 不进行代码分割,都做分割配置成all,initial对同步代码做分割
            chunks: 'all',
            // 引入的模块大于30000个字节才做split
            minSize: 30000,
            // lodash 1mb,这里限定了最大值，就会对lodash进行二次拆分
            // maxSize: 50000,
            // 一个代码被引入至少多少次后才对其进行代码分割
            minChunks: 1,
            // 同时加载的模块数最多5个，超过5个不做代码分割
            maxAsyncRequests: 5,
            // 入口文件引入的文件最多三个代码分割
            maxInitialRequests: 3,
            // 生成文件名称连接符
            automaticNameDelimiter: '~',
            // cacheGroups 里 filename 有效
            name: true,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    filename: "vendors.js"
                },
                default: {
                    // minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,
                    filename: "common.js"
                }
                // vendors: false,
                // default: false
            }
        }
    }
}