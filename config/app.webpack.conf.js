const webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/main.ts'
  },
  output: {
    path: './static',
    filename: '/main.js',
  },
  externals: {
    vendor: 'vendor',
    api: 'api'
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
  },
  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  }
};
