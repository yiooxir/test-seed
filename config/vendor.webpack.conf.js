const webpack = require('webpack');
const helpers = require('./helpers');
const context = helpers.root('src');

module.exports = {
  context,
  entry: {
    vendor: ['async', 'lodash'],
  },

  output: {
    path: './build',
    filename: '[name].dll',
    library: '[name]_dll',
  },

  plugins: [new webpack.DllPlugin({
    name: '[name]_dll',
    path: './build/[name]-manifest.json',
  })]
};
