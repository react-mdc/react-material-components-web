const fs = require("fs");
const path = require("path");
const webpack = require("webpack");

const FlowtypePlugin = require("flowtype-loader/plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const {
  DOCS_ROOT,
  BUILD_PATH,
  SRC_ROOT,
  PRODUCTION,
  URL_PREFIX
} = require("./constants");

function loadManifest (name) {
  const manifestName = name + "-manifest.json";
  return JSON.parse(fs.readFileSync(path.resolve(BUILD_PATH, manifestName), "utf-8"));
}

/* Configure plugins */
const extractVendorStyle = new ExtractTextPlugin({
  filename: "vendor.css"
});
const extractGlobalStyle = new ExtractTextPlugin({
  filename: "global.css"
});
const extractLocalStyle = new ExtractTextPlugin({
  filename: "local.css"
});

const ENV_PLUGINS = PRODUCTION ? [
  new webpack.DefinePlugin({
    "process.env": {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV)
    }
  })
] : [];

module.exports = {
  context: DOCS_ROOT,
  entry: {
    app: [path.resolve(SRC_ROOT, "js", "index.js")]
  },
  plugins: [
    extractVendorStyle,
    extractGlobalStyle,
    extractLocalStyle,
    new webpack.DllReferencePlugin({
      context: DOCS_ROOT,
      manifest: loadManifest("vendor")
    }),
    new FlowtypePlugin({
      cwd: DOCS_ROOT
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: PRODUCTION
    })
  ].concat(ENV_PLUGINS),
  output: {
    path: BUILD_PATH,
    publicPath: URL_PREFIX + "build/",
    filename: "bundle.js"
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
        enforce: "pre",
        loader: "eslint-loader!flowtype-loader",
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
        loader: "url-loader",
        options: {
          limit: 10000,
          name: "static/media/[name].[hash:8].[ext]"
        }
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)|(\.example\.js$)/,
        loader: "babel-loader",
        options: {
          cacheDirectory: true
        }
      },
      {
        // css files in /src/style/ are global styles
        test: /\.css$/,
        loader: extractGlobalStyle.extract({
          use: [
            {
              loader: "css-loader",
              options: {
                importLoaders: 1
              }
            },
            "postcss-loader"
          ],
          // use style-loader in development
          fallback: "style-loader"
        }),
        include: /src\/style\//
      },
      {
        // Don"t compile external stylesheets
        test: /\.css$/,
        loader: extractVendorStyle.extract({
          use: "css-loader",
          // use style-loader in development
          fallback: "style-loader"
        }),
        include: /node_modules/
      },
      {
        test: /\.css$/,
        loader: extractLocalStyle.extract({
          use: [
            {
              loader: "css-loader",
              options: {
                module: true,
                localIdentName: "[local]--[hash:base64:5]",
                importLoaders: 1
              }
            },
            "postcss-loader"
          ],
          // use style-loader in development
          fallback: "style-loader"
        }),
        exclude: /src\/style\/|node_modules\//
      },
      {
        test: /\.json$/,
        loader: "json-loader"
      },
      {
        test: /\.svg$/,
        loader: "file-loader",
        query: {
          name: "static/media/[name].[hash:8].[ext]"
        }
      }
    ]
  },
  devtool: PRODUCTION ? "source-map" : "cheap-module-eval-source-map"
};
