const path = require("path");
const webpack = require('webpack');
const BundleTracker = require('webpack-bundle-tracker');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const ExtractAppCSS = new ExtractTextPlugin({
  filename: 'css/app.css',
  allChunks: true
});
const ExtractVendorCSS = new ExtractTextPlugin({
  filename: 'css/vendor.css',
  allChunks: true
});

module.exports = {
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.EnvironmentPlugin({ NODE_ENV: 'production' }),
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors',
      filename: 'js/vendor.js',
      minChunks: function(module) {
        return typeof module.context === 'string' && module.context.indexOf('node_modules') >= 0;
      }
    }),
    ExtractAppCSS,
    ExtractVendorCSS,
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true,
        warnings: false
      },
      mangle: {
        screw_ie8: true
      },
      comments: false,
      sourceMap: true
    })
  ],
  entry: [
    './a-client/index.js',
  ],
  target: 'web',
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'js/app.js'
  },
  module: {
      loaders: [
        { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader', query: { presets: ['es2015', 'react'] } },
        { test: /(\.css|scss)$/, loaders: ['style-loader', 'css-loader', 'sass-loader'] },
        { test: /\.(jpeg|png|gif|svg|jpg)$/, loader: 'url-loader' },
        { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader' },
        { test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000' },
        { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
        { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' }
      ]
    }
};