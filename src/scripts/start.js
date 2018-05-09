const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('../config/webpack.config.dev.js')
const path = require('path')
const fs = require('fs')

const appDir = fs.realpathSync(process.cwd())
const resolVe = rela => path.resolve(appDir, rela)

function start() {
    const compiler = webpack(config)
    const devServer = new WebpackDevServer(compiler, {
        contentBase: resolVe('dist'),
        publicPath: '/',
        compress: true,
        //port: 9000
    })
    devServer.listen(3000, 'localhost',
        err => {
            if (err) {
                return console.log(err)
            }
            console.log(`Starting devServer`)
        })
}

module.exports = start