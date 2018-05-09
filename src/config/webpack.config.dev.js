const path = require('path')
const fs = require('fs')

const appDir = fs.realpathSync(process.cwd())
const resolVe = rela => path.resolve(appDir, rela)

module.exports = {
    optimization: {
        minimize: false
    },
    entry: resolVe('src/index.js'),
    output: {
        filename: 'bundle.js',
        path: resolVe('dist')
    },
    resolve: {
        //modules: ['node_modules'].concat(process.env.NODE_ENV.split(path.delimiter).filter(Boolean)),
        extensions: ['.json', '.js']
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: require.resolve('babel-loader'),
                options: {
                    plugins: [
                        [require.resolve('babel-plugin-transform-react-jsx'), { pragma: "Aethon.createElement" }],
                        /*[require.resolve('babel-plugin-jsx-pragmatic'), {

                        }]*/
                    ]
                }
            }
        }]
    }
};