const webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/vendor/main.ts'
  },
  output: {
    path: './build/libs',
    filename: '/vendor.dll',
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
