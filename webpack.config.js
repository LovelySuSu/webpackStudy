const path = require('path')

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    // externals: ['lodash'],
    externals: {
        lodash: 'lodash'//起名叫做lodash
    },
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'library.js',
        // 在全局变量里增加library变量
        library: 'library',
        // 不支持commonjs、amd的引入方式，全局变量挂载到this上
        libraryTarget: "this" //通用引入方式
    }

}