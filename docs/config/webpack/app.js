const fs = require("fs");
const path = require("path");
const webpack = require("webpack");

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const { TsConfigPathsPlugin, CheckerPlugin } = require("awesome-typescript-loader");

const {
    DOCS_ROOT,
    BUILD_PATH,
    SRC_ROOT,
    PRODUCTION
} = require("./constants");

function loadManifest(name) {
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
    }),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    })
] : [];

module.exports = {
    context: DOCS_ROOT,
    entry: {
        app: [path.resolve(SRC_ROOT, "js", "index.tsx")]
    },
    plugins: [
        extractVendorStyle,
        extractGlobalStyle,
        extractLocalStyle,
        new webpack.DllReferencePlugin({
            context: DOCS_ROOT,
            manifest: loadManifest("vendor")
        }),
        new TsConfigPathsPlugin(),
        new CheckerPlugin()
    ].concat(ENV_PLUGINS),
    output: {
        path: BUILD_PATH,
        publicPath: "/build/",
        filename: "bundle.js"
    },
    resolve: {
        alias: {
            app: SRC_ROOT
        },
        extensions: ["*", ".js", ".ts", ".tsx"]
    },
    module: {
        loaders: [
            /* Typescript */
            {
                test: /\.tsx?$/,
                exclude: /(node_modules)|(\.example\.tsx?$)/,
                loader: "awesome-typescript-loader",
                options: {
                    useCache: true,
                }
            },
            {
                test: /\.tsx?$/,
                exclude: /(node_modules)|(\.example\.tsx?$)/,
                enforce: 'pre',
                loader: 'tslint-loader',
                options: {
                    emitErrors: true
                }
            },
            /* Styles */
            {
                // Don't compile external stylesheets
                test: /\.css$/,
                include: /node_modules/,
                loader: extractVendorStyle.extract({
                    use: "css-loader",
                    // use style-loader in development
                    fallback: "style-loader"
                })
            },
            {
                // css files in /src/style/ are global styles
                test: /\.css$/,
                include: /src\/style/,
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
                })
            },
            {
                test: /\.css$/,
                exclude: /src\/style|node_modules/,
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
                })
            },
            /* Assets */
            {
                exclude: [
                    /\.html$/,
                    /\.(ts|tsx)$/,
                    /\.css$/,
                    /\.json$/,
                    /\.svg$/,
                    /\.js$/
                ],
                loader: "url-loader",
                options: {
                    limit: 10000,
                    name: "static/media/[name].[hash:8].[ext]"
                }
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
    devtool: "source-map"
};
