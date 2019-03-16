const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const config = require('./config/webpack.dev')
const compiler = webpack(config) // webpack编译器

const app = express()
app.use(webpackDevMiddleware(compiler,{
    publicPath: config.output.publicPath
}))

app.listen(1314,()=>{
    console.log('server is running')
})