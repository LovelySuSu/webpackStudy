const path = require('path')
module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname,'build')
    }
}