const path = require("path");
const webpack = require("webpack");

const {
  DOCS_ROOT,
  BUILD_PATH,
  PRODUCTION
} = require("./constants");

const ENV_PLUGINS = PRODUCTION ? [
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }),
  new webpack.DefinePlugin({
    "process.env": {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV)
    }
  })
] : [];

module.exports = {
  context: DOCS_ROOT,
  entry: {
    vendor: [path.resolve(DOCS_ROOT, "vendor.js")]
  },
  plugins: [
    new webpack.DllPlugin({
      context: DOCS_ROOT,
      path: path.resolve(BUILD_PATH, "[name]-manifest.json"),
      name: "[name]_dll"
    })
  ].concat(ENV_PLUGINS),
  output: {
    path: BUILD_PATH,
    publicPath: "/build/",
    filename: "[name].dll.js",
    library: "[name]_dll"
  },
  devtool: "source-map"
};
