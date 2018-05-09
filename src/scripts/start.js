const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('../config/webpack.config.dev.js')
const devServerConfig = require('../config/webpack.config.devServer.js')

function start() {
    const compiler = webpack(config)
    const devServer = new WebpackDevServer(compiler, devServerConfig)
    devServer.listen(3000, 'localhost',
        err => {
            if (err) {
                return console.log(err)
            }
            console.log(`Starting devServer`)
        })
}

module.exports = start