/* eslint-disable */
var path = require('path');
var webpack = require('webpack');

var projectRoot = path.resolve(__dirname, '..');
var exampleRoot = path.resolve(projectRoot, 'examples');
var buildPath = path.resolve(exampleRoot, 'build');

var plugins = [];
if (process.env.NODE_ENV === 'production') {
  plugins.push(new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    },
  }));
}

module.exports = {
  entry: {
    app: [path.resolve(exampleRoot, 'app.js')]
  },
  plugins: plugins,
  output: {
    path: buildPath,
    publicPath: '/build/',
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
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css?importLoaders=1'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
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
  // Webpack bug: webpack cannot recognize npm link'd module's configurations
  // and it will be fixed webpack 2.X
  // See: https://github.com/facebook/flow/issues/1548
  resolve: {
    fallback: path.join(exampleRoot, 'node_modules')
  },
  resolveLoader: {
    fallback: path.join(exampleRoot, 'node_modules')
  },
  devServer: {
    historyApiFallback: true
  }
};
