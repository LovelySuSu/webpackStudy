const path = require('path')
module.exports = {
    entry: {
        vendors: ['react','react-dom','lodash']
    },
    output: {
        path: path.resolve(__dirname, 'dll'),
        filename: '[name].dll.js',
        library: '[name]'
    }
}