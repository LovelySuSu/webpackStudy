module.exports = {
    entry: "./src/index.js", // 路径相对于webpack.config.js
    output: {
        path: __dirname,
        filename: "bundle.js"
    }
}