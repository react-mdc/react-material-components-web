import path from 'path';
import webpack from 'webpack';

import {
  DOCS_ROOT,
  BUILD_PATH,
  PRODUCTION,
  URL_PREFIX
} from './constants';

const ENV_PLUGINS = PRODUCTION ? [
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV)
    }
  })
] : [];

export default {
  context: DOCS_ROOT,
  entry: {
    vendor: [path.resolve(DOCS_ROOT, 'vendor.js')]
  },
  plugins: [
    new webpack.DllPlugin({
      context: DOCS_ROOT,
      path: path.resolve(BUILD_PATH, '[name]-manifest.json'),
      name: '[name]_dll'
    })
  ].concat(ENV_PLUGINS),
  output: {
    path: BUILD_PATH,
    publicPath: URL_PREFIX + 'build/',
    filename: '[name].dll.js',
    library: '[name]_dll'
  },
  devtool: PRODUCTION ? 'source-map' : 'cheap-module-eval-source-map'
};
