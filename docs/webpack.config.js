/* eslint-disable */
const path = require('path');
const webpack = require('webpack');

const FlowtypePlugin = require('flowtype-loader/plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const PROJECT_ROOT = path.resolve(__dirname, '..');
const DOCS_ROOT = path.resolve(PROJECT_ROOT, 'docs')
const BUILD_PATH = path.resolve(DOCS_ROOT, 'build');
const SRC_ROOT = path.resolve(DOCS_ROOT, 'src');

const PRODUCTION = process.env.NODE_ENV === 'production';
const URL_PREFIX = `/${process.env.URL_PREFIX || ''}`

/* Configure plugins */
const extractStyle = new ExtractTextPlugin({
  filename: '[name].css'
});

let plugins = [
  extractStyle,
  new FlowtypePlugin({
    cwd: DOCS_ROOT
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
          /\.json$/,
          /\.svg$/
        ],
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/media/[name].[hash:8].[ext]'
        }
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        exclude: /\.example\.js$/
      },
      {
        // css files in /src/style/ are global styles
        test: /\.css$/,
        loader: extractStyle.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1
              }
            },
            'postcss-loader'
          ],
          // use style-loader in development
          fallback: 'style-loader'
        }),
        include: /src\/style\//
      },
      {
        // Don't compile external stylesheets
        test: /\.css$/,
        loader: extractStyle.extract({
          use: 'css-loader',
          // use style-loader in development
          fallback: 'style-loader'
        }),
        include: /node_modules/
      },
      {
        test: /\.css$/,
        loader: extractStyle.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                module: true,
                localIdentName: '[local]--[hash:base64:5]',
                importLoaders: 1
              }
            },
            'postcss-loader'
          ],
          // use style-loader in development
          fallback: 'style-loader'
        }),
        exclude: /src\/style\/|node_modules\//
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
