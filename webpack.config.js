const path = require('path')

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'library.js',
        // 在全局变量里增加library变量
        library: 'library',
        // 全局变量挂在哪里
        libraryTarget: "umd" //通用引入方式
    }

}