const path = require('path');
const webpack = require('webpack');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    'entry': './src/js/app.js',
    'output': {
        'path': path.resolve(__dirname, './public/build'),
        'publicPath': '/public/build/',
        'filename': 'app.js'
    },
    'module': {
        'rules': [
            {
                'test': /\.vue$/,
                'loader': 'vue-loader',
            },
            {
                'test': /\.js$/,
                'loader': 'babel-loader',
            },
            {
                'test': /\.(c|sc|sa)ss$/,
                'use': [
                    'vue-style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ],
            }
        ]
    },
    'resolve': {
        'alias': {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    performance: {
        hints: false
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new VueLoaderPlugin()
    ],
    devtool: 'eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ])
}
