const webpack = require('webpack')
const config = require('../config/webpack.config.dev.js')

function build() {
    console.log(`[webpack]: compiling code files`)
    const compiler = webpack(config)
    return new Promise((resolve, reject) => {
        compiler.run((err, stats) => {
            if (err) {
                console.error(err.stack || err)
                if (err.details) {
                    console.error(err.details)
                }
                return
            }
            /*if (stats) {
                console.log(stats.toString({
                    chunks: false,
                    colors: true
                }))
            }*/
            const info = stats.toJson()
            if (stats.hasErrors()) {
                console.error(info.errors)
            }
            if (stats.hasWarnings()) {
                console.warn(info.warnings)
            }
        })
    })
}

module.exports = build