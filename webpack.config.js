/* global __dirname */

const path = require('path');

module.exports = {
    'entry': './src/js/app.js',
    'mode': 'development',
    'output': {
        'filename': 'app.js',
        'path': path.resolve(__dirname, 'build'),
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