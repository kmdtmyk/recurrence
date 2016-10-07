var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: {
    recurrence: './src/recurrence',
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].min.js',
    library: 'Recurrence',
    libraryTarget: 'umd',
  },
  module: {
    exprContextCritical: false,
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
    ],
  },
  resolve: {
    moduleDirectories: [
      'node_modules',
    ],
    extensions: ['', '.js'],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true
    }),
  ],
  devtool: 'source-map',
};
