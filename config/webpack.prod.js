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
    ],
    output: {
        filename: '[name].[contenthash].js',
        chunkFilename: "[name].[contenthash].chunk.js"
    },

}

module.exports = prodConfig