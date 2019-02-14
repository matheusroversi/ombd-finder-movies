const webpack = require('webpack');
const path = require('path');

module.exports = {
  context: path.resolve(__dirname, './src'),
  devtool: 'source-map',
  mode: "development", 
  entry: {
    filename: './js/main.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, "./dist"),
  },
  devServer: {
    contentBase: path.resolve(__dirname,'./src'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env']
          }
        }
      }
    ]
  }
}