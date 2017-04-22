const path = require("path");

const PROJECT_ROOT = module.exports.PROJECT_ROOT = path.resolve(__dirname, "..", "..", "..");
const DOCS_ROOT = module.exports.DOCS_ROOT = path.resolve(PROJECT_ROOT, "docs");
const BUILD_PATH = module.exports.BUILD_PATH = path.resolve(DOCS_ROOT, "build");
const SRC_ROOT = module.exports.SRC_ROOT = path.resolve(DOCS_ROOT, "src");

const PRODUCTION = module.exports.PRODUCTION = process.env.NODE_ENV === "production";
