/* eslint-disable */
var path = require('path');
var webpack = require('webpack');

var PROJECT_ROOT = path.resolve(__dirname, '..');
var DEMO_ROOT = path.resolve(PROJECT_ROOT, 'demo')
var BUILD_PATH = path.resolve(DEMO_ROOT, 'build');
var SRC_ROOT = path.resolve(DEMO_ROOT, 'src');

const FlowtypePlugin = require('flowtype-loader/plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const PRODUCTION = process.env.NODE_ENV === 'production';
const URL_PREFIX = `/${process.env.URL_PREFIX || ''}`

/* Configure plugins */
const extractSass = new ExtractTextPlugin({
  filename: '[name].css'
});

let plugins = [
  extractSass,
  new FlowtypePlugin({
    cwd: DEMO_ROOT
  })
];

if (PRODUCTION) {
  plugins.push(new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    }
  }));
  plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }));
}


module.exports = {
  entry: {
    app: [path.resolve(SRC_ROOT, 'js', 'index.js')]
  },
  plugins: plugins,
  output: {
    path: BUILD_PATH,
    publicPath: URL_PREFIX + 'build/',
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      app: SRC_ROOT
    }
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
          /\.scss$/,
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
        loader: extractSass.extract({
          use: 'css-loader',
          // use style-loader in development
          fallback: 'style-loader'
        })
      },
      {
        test: /\.scss$/,
        loader: extractSass.extract({
          use: [{
            loader: 'css-loader'
          }, {
            loader: 'sass-loader',
            options: {
              includePaths: [path.resolve(DEMO_ROOT, 'node_modules')]
            }
          }],
          // use style-loader in development
          fallback: 'style-loader'
        })
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
  devServer: {
    contentBase: path.join(DEMO_ROOT, "public")
  },
  devtool: 'source-map'
};
