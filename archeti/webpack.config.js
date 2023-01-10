import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';


const port = process.env.PORT || 3000;

module.exports = {
    mode: 'development',
    entry: [
        './src/index.js',
    ],
    output: {
        filename: 'bundle.[hash].js',
        path: resolve(__dirname, 'public'),
        publicPath: '/'
    },
    devtool: 'inline-source-map',
    resolve: {
        extensions: ['.js']
    },
    stats: {
        colors: true,
        reasons: true
    },
    rules: []
}