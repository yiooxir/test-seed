const webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/api/main.ts'
  },
  output: {
    path: './public/cdn',
    filename: '/api.js',
    libraryTarget: 'umd',
    library: 'api',
    umdNamedDefine: true
  },
  externals: {
    vendor: "vendor",
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
