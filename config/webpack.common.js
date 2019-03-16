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
            // 代码分割时只对异步代码生效，同步 import lodash 不进行代码分割,都做分割配置成all
            chunks: 'all',
            minSize: 30000,
            maxSize: 0,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    filename: "vendors.js"
                },
                // default: {
                //     minChunks: 2,
                //     priority: -20,
                //     reuseExistingChunk: true
                // }
                // vendors: false,
                default: false
            }
        }
    }
}