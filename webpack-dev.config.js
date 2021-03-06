/* @flow */

var webpack = require('webpack')
var os = require('os')

module.exports = {

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  entry: {
    'bundle.js': [
      'webpack-dev-server/client?http://' + os.hostname() + ':3000',
      'webpack/hot/dev-server',
      './client/app/index.js'
    ]
  },

  output: {
    path: '/client/build/',
    filename: '[name]',
    publicPath: '/build/'
  },

  node: {
    fs: 'empty'
  },

  resolve: {
    extensions: ['', '.js', '.jsx', 'index.js', 'index.jsx']
  },

  module: {
    preLoaders: [
      { test: /\.json$/, loader: 'json'}
    ],
    loaders: [
      { test: /\.jsx$/, loader: 'react-hot!babel?stage=0', exclude: [/node_modules/] },
      { test: /\.js$/, loader: 'babel?stage=0', exclude: [/node_modules/] }
    ]
  },

  devServer: {
    contentBase: 'client/',
    publicPath: '/build/',
    hot: true,
    quiet: true
  },

  devtool: '#eval'

}
