const merge = require('webpack-merge')
const commonConfig = require('./webpack.common')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssssetsebpackPlugin = require('optimize-css-assets-webpack-plugin')
const prodConfig = {
    mode: "production",
    devtool: "none",
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader'
                ]
            }
        ]
    },
    optimization: {
        minimizer: [new OptimizeCssssetsebpackPlugin({})]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[name].chunk.css'
        })
    ]

}

module.exports = merge(commonConfig,prodConfig)