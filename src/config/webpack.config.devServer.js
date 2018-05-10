const path = require('path')
const fs = require('fs')

const appDir = fs.realpathSync(process.cwd())
const resolVe = rela => path.resolve(appDir, rela)

module.exports = {
    contentBase: resolVe('public'),
    publicPath: '/',
    compress: true,
    //port: 9000
}