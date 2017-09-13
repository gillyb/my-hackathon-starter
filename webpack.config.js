const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractScssPlugin = new ExtractTextPlugin('styles.bundle.css');

module.exports = {
    entry: './public/js/main.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.(scss)$/,
                use: ExtractTextPlugin.extract([
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader', // Run post css actions
                        options: {
                            plugins: function () { // post css plugins, can be exported to postcss.config.js
                                return [
                                    require('precss'),
                                    require('autoprefixer')
                                ];
                            }
                        }
                    }, {
                        loader: 'sass-loader' // compiles SASS to CSS
                    }
                ])
            }
        ]
    },
    plugins: [
        extractScssPlugin
    ],
    stats: {
        colors: true
    },
    devtool: 'inline-source-map'    // TODO: remove this for production builds
};