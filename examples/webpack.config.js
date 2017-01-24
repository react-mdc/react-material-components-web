/* eslint-disable */
var path = require('path');

var projectRoot = path.resolve(__dirname, '..');
var exampleRoot = path.resolve(projectRoot, 'examples');
var buildPath = path.resolve(exampleRoot, 'build');

module.exports = {
  entry: {
    app: [path.resolve(exampleRoot, 'app.js')]
  },
  output: {
    path: buildPath,
    publicPath: '/assets/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        exclude: [
          /\.html$/,
          /\.(js|jsx)$/,
          /\.css$/,
          /\.json$/,
          /\.svg$/
        ],
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: 'static/media/[name].[hash:8].[ext]'
        }
      },
      // Process JS with Babel.
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css?importLoaders=1'
        // Note: this won't work without `new ExtractTextPlugin()` in `plugins`.
      },
      // JSON is not enabled by default in Webpack but both Node and Browserify
      // allow it implicitly so we also enable it.
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      // "file" loader for svg
      {
        test: /\.svg$/,
        loader: 'file-loader',
        query: {
          name: 'static/media/[name].[hash:8].[ext]'
        }
      }
    ]
  },
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true
  }
};
