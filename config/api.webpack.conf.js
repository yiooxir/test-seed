const webpack = require('webpack');
const manifest = require('../build/vendor-manifest.json');
const ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;
const path = require('path');
const helpers = require('./helpers');
const context = helpers.root('src');

module.exports = {
  context,
  entry: {
    name: './api_module/api.ts',
  },
  output: {
    path: helpers.root('build'),
    publicPath: './',
    filename: 'api.build.js',
    library: 'api',
    libraryTarget: 'umd',
    // umdNamedDefine: true,
  },
  externals: {
    vendor_dll: "vendor_dll",
  },
  plugins: [
    new ForkCheckerPlugin(),
    new webpack.DllReferencePlugin({
    context,
    manifest: manifest,
    // name: './dist/alpha.bundle.js'
  })]
};
