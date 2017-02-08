'use strict';

const _ = require('lodash');
const chalk = require('chalk');
const fs = require('fs');
const path = require('path');
const spawnSync = require('child_process').spawnSync;

const PROJECT_ROOT = require('./constants').PROJECT_ROOT;

const PACKAGES_DIR = path.resolve(__dirname, '../packages');

module.exports.getPackages = function (packagesDir = PACKAGES_DIR) {
  return fs.readdirSync(packagesDir)
    .map(filename => [filename, path.resolve(packagesDir, filename)])
    .filter(([_name, file]) => fs.lstatSync(path.resolve(file)).isDirectory())
    .reduce((x, [name, file]) => _.assign({}, x, {[name]: file}), {});
};

module.exports.runCommand = function (command, args, opts = {}) {
  opts = _.assign({}, {
    'cwd': PROJECT_ROOT,
    'stdio': [0, 1, 1]
  }, opts);

  const result = spawnSync(command, args, opts);

  if (result.error || result.status !== 0) {
    if (result.error != null) {
      console.error(chalk.red(result.error));
    }
  }
  return result.status;
};
