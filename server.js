const express = require('express')
const webpack = require('webpack')

const app = express()

app.listen(1314,()=>{
    console.log('server is running')
})