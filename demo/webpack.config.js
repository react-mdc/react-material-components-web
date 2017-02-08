/* eslint-disable */
var path = require('path');
var webpack = require('webpack');

var projectRoot = path.resolve(__dirname);
var buildPath = path.resolve(projectRoot, 'build');

var plugins = [];
if (process.env.NODE_ENV === 'production') {
  plugins.push(new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    },
  }));
}
var urlPrefix = '/'
if (process.env.URL_PREFIX != null) {
  urlPrefix += process.env.URL_PREFIX;
}

module.exports = {
  entry: {
    app: [path.resolve(projectRoot, 'src', 'app.js')]
  },
  plugins: plugins,
  output: {
    path: buildPath,
    publicPath: urlPrefix + 'build/',
    filename: 'bundle.js'
  },
  module: {
    preLoaders: [
      {
        test: /src\/.+\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ],
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
        test: /\.js$/,
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
  resolveLoader: {
    fallback: path.join(projectRoot, 'node_modules')
  }
};
