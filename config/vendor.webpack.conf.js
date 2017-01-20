const webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/vendor/main.ts'
  },
  output: {
    path: './build/cdn',
    filename: '/vendor.js',
    // libraryTarget: "commonjs2",
    library: "vendor"
  },
  module: {
    loaders: [
      { test: /\.ts$/, loaders: ['awesome-typescript-loader'] },
    ]
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.ts']
  }
};
