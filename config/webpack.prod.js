const merge = require('webpack-merge')
const commonConfig = require('./webpack.common')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const prodConfig = {
    mode: "production",
    devtool: "cheap-module-source-map",
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
    plugins:[
        new MiniCssExtractPlugin()
    ]

}

module.exports = merge(commonConfig,prodConfig)