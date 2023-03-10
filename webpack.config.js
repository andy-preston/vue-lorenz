/* eslint-env node */

const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const WebpackShellPluginNext = require('webpack-shell-plugin-next');

module.exports = {
    'entry': './src/js/app.js',
    'mode': process.env.WEBPACK_SERVE ? 'development' : 'production',
    'devtool': 'eval-source-map',
    'resolve': { 'alias': { 'vue$': 'vue/dist/vue.esm.js' } },
    'performance': { 'hints': false },

    'devServer': {
        'contentBase': path.join(__dirname, 'public'),
        'publicPath': '/build/',
        'compress': true,
        'port': 9000,
        'host': '0.0.0.0',
        'sockPort': 80
    },

    'output': {
        'path': path.resolve(__dirname, 'public/build'),
        'publicPath': '',
        'filename': 'app.js'
    },

    'module': {
        'rules': [{
            'test': /\.(woff|ttf)$/,
            'use': [{
                'loader': 'file-loader',
                'options': {
                    'name': '[name].[ext]',
                    'outputPath': 'fonts/'
                }
            }]
        }, {
            'test': /\.vue$/,
            'use': [{ 'loader': 'vue-loader' }]
        }, {
            'test': /\.js$/,
            'use': [{ 'loader': 'babel-loader' }]
        }, {
            'test': /\.(c|sc|sa)ss$/,
            'use': [
                'vue-style-loader',
                MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader'
            ]
        }]
    },

    'plugins': [
        new MiniCssExtractPlugin(),

        new VueLoaderPlugin(),

        new WebpackShellPluginNext({
            onBeforeBuild: {
                scripts: ['yarn lint'],
                blocking: true,
                parallel: false
            },
            onAfterDone: {
                scripts: ['yarn jest'],
                blocking: false,
                parallel: true
            }
        })
    ]
}

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            'sourceMap': true,
            'compress': {
                'warnings': false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            'minimize': true
        })
    ])
}
