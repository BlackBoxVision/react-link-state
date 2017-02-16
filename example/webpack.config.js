const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'index.js'),
    output: {
        path: path.resolve('link-state-hoc-example'),
        filename: '[name].js'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production'),
            }
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname + '/src', 'index.tpl.html'),
            inject: 'body',
            filename: 'index.html'
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                'screw_ie8': true,
                'warnings': false,
                'unused': true,
                'dead_code': true
            },
            output: {
                comments: false
            }
        })
    ],
    module: {
        loaders: [
            {
                "test": /\.js?$/,
                "exclude": /node_modules/,
                "loader": "babel"
            }
        ]
    }
};
