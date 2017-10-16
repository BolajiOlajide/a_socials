const path = require("path");
const webpack = require('webpack');
const BundleTracker = require('webpack-bundle-tracker');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  context: __dirname,
  entry: './client/index.js',
  target: 'web',
  output: {
      path: path.join(__dirname, './static/'),
      filename: 'js/[name].js',
      publicPath: 'http://0.0.0.0:9000/',
  },
  plugins: [
    new BundleTracker({filename: './webpack-stats.json'}),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.LoaderOptionsPlugin({
      debug: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.EnvironmentPlugin({ NODE_ENV: 'development' }),
  ],
  module: {
    loaders: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader', query: { presets: ['es2015', 'react'] } },
      { test: /(\.css|scss)$/, loaders: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.(jpeg|png|gif|svg|jpg)$/, loader: 'url-loader?limit=25000' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader' },
      { test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' }
    ],
  },
  devServer: {
    host: "0.0.0.0",
    publicPath: 'http://0.0.0.0:9000/',
    headers: { 'Access-Control-Allow-Origin': '*' },
    compress: true,
    port: 9000,
    proxy: {
      '/api/v1': {
        target: 'http://0.0.0.0:8000',
        secure: false,
      }
    },
    clientLogLevel: 'none',
    hot: true,
    inline: true,
    historyApiFallback: true,
    watchOptions: {
      ignored: /node_modules/
    }
  },
  resolve: {
    modules: ['node_modules', 'bower_components'],
    extensions: ['.js', '.jsx']
  },
}
