var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: __dirname,
  devtool: "inline-source-map",
  entry: "./webpack/client.js",
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    ]
  },
  output: {
    path: __dirname + "/public/javascripts/",
    filename: "bundle.js"
  },
  plugins: [
      new webpack.ProvidePlugin({
        'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
      })
  ] 
};