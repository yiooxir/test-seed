const webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/vendor/main.ts'
  },
  output: {
    path: './src/libs',
    filename: '/vendor.js',
    // export itself to a global var
    libraryTarget: "commonjs2",
    // name of the global var: "Foo"
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
  },
  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  }
};
