const path = require('path');
const webpack = require('webpack');
const ManifestPlugin = require('webpack-manifest-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    'whatwg-fetch',
    './src/index',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[hash].js',
    publicPath: '/static/',
  },
  plugins: [
    new ManifestPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html.ejs',
    }),
    // removes a lot of debugging code in React
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     NODE_ENV: JSON.stringify('production'),
    //   },
    // }),
    // keeps hashes consistent between compilations
    // new webpack.optimize.OccurenceOrderPlugin(),
    // // minifies your code
    // new webpack.optimize.UglifyJsPlugin({
    //   compressor: {
    //     warnings: false,
    //   },
    // }),
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src'),
    },
    {
      test: /\.(jpe?g|png|gif|svg)$/i,
      loader: 'file',
      include: path.join(__dirname, 'src/images'),
    },
    {
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass'],
      include: path.join(__dirname, 'src'),
    },
    {
      test: /\.css$/,
      exclude: /\.useable\.css$/,
      loader: 'style!css',
    },
    {
      test: /\.useable\.css$/,
      loader: 'style/useable!css',
    },
  ],
  },
};
