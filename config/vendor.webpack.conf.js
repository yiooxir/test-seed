const webpack = require('webpack');
const helpers = require('./helpers');
const context = helpers.root('src');

module.exports = {
  entry: {
    vendor: ['async', 'lodash'],
  },

  output: {
    path: './build',
    filename: '[name]_dll.build.js',
    library: '[name]_dll',
    libraryTarget: 'umd'
  },

  plugins: [new webpack.DllPlugin({
    context: helpers.root(),
    name: '[name]_dll',
    path: 'build/[name]-manifest.json',
  })]
};
