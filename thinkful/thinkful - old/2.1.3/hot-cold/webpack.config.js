
const webpack = require('webpack');
const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const APP_FOLDER = path.resolve(__dirname, './src');
const DIST_FOLDER = path.resolve(APP_FOLDER, './dist');
const DIST_FOLDER_STYLE = path.resolve(DIST_FOLDER, './css');

const config = {
  entry: ['./src/index.jsx', './src/scss/styles.scss'],
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',
  },

  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    inline: true,
    port: 8032,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      { // regular css files
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader/url!file-loader',
          use: ['css-loader'],
          publicPath: DIST_FOLDER_STYLE,
        }),
      },
      { // sass / scss loader for webpack
        test: /\.(sass|scss)$/,
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader']),
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new ExtractTextPlugin({ // define where to save the file
      filename: '[name].bundle.css',
      allChunks: true,
    }),
    new CopyWebpackPlugin([
      { from: 'index.html', to: '.' },
    ],
    { debug: 'info' }),
  ],
};

module.exports = config;
