/* eslint-disable */
var path = require('path');
var webpack = require('webpack');

var PROJECT_ROOT = path.resolve(__dirname, '..');
var DEMO_ROOT = path.resolve(PROJECT_ROOT, 'demo')
var BUILD_PATH = path.resolve(DEMO_ROOT, 'build');
var SRC_ROOT = path.resolve(DEMO_ROOT, 'src');

var FlowtypePlugin = require('flowtype-loader/plugin');

var plugins = [
  new FlowtypePlugin({
    cwd: PROJECT_ROOT
  })
];
if (process.env.NODE_ENV === 'production') {
  plugins.push(new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    },
  }));
  plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }));
}
var urlPrefix = '/'
if (process.env.URL_PREFIX != null) {
  urlPrefix += process.env.URL_PREFIX;
}

module.exports = {
  entry: {
    app: [path.resolve(SRC_ROOT, 'app.js')]
  },
  plugins: plugins,
  output: {
    path: BUILD_PATH,
    publicPath: urlPrefix + 'build/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /src\/.+\.js$/,
        enforce: 'pre',
        loader: 'eslint-loader!flowtype-loader',
        exclude: /node_modules/
      },
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
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?importLoaders=1'
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
  devtool: 'source-map'
};
