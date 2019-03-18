const webpack = require('webpack')
const devConfig = {
    mode: "development",
    devtool: "none",
    // devtool: "cheap-module-eval-source-map",
    devServer: {
        contentBase: './build',
        open: true,
        port: 1314,
        hot: true,
        // hotOnly: true // hmr失效时是否不刷新页面
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader'
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        filename: '[name].js',
        chunkFilename: "[name].chunk.js"
    },
}

module.exports = devConfig