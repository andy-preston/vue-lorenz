/* global __dirname */

const path = require('path');

module.exports = {
    'entry': './src/js/app.js',
    'mode': 'development',
    output: {
        path: path.resolve(__dirname, './public/build'),
        publicPath: '/public/build/',
        filename: 'app.js'
    },
    'module': {
        'rules': [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                'test': /\.js$/,
                'exclude': [],
                'use': {
                    'loader': 'babel-loader',
                    'options': {
                        'presets': ['@babel/preset-env']
                    }
                }
            }
        ]
    }
}