const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const loaders = [
    {
        "test": /\.js?$/,
        "exclude": /node_modules/,
        "loader": "babel"
    }
];

module.exports = {
    devtool: 'eval-source-map',
    entry: path.resolve(__dirname + '/src', 'main.js'),
    output: {
        path: path.resolve('build'),
        filename: '[name].js',
        publicPath: '/'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production'),
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false,
            }
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname + '/src', 'index.tpl.html'),
            inject: 'body',
            filename: 'index.html'
        })
    ],
    module: {
        loaders: loaders
    }
};
