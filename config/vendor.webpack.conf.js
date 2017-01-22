const webpack = require('webpack');
const ROOT_PATH = require('./helpers').ROOT;
const path = require('path');
const context = path.join(ROOT_PATH, 'src');

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
