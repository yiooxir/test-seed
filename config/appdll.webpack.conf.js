var webpack = require('webpack');

module.exports = {
  entry: {
    app: ['./src/main.ts'],
  },
  output: {
    filename: 'app.bundle.js',
    path: 'build_test/',
  },
  plugins: [new webpack.DllReferencePlugin({
    context: '.',
    manifest: './build_test/vendor-manifest.json',
  })]
};