'use strict';

const _ = require('lodash');
const chalk = require('chalk');
const fs = require('fs');
const path = require('path');
const {spawn} = require('child_process');

const PROJECT_ROOT = require('./constants').PROJECT_ROOT;

const NODE_MODULES_DIR = path.resolve(PROJECT_ROOT, 'node_modules');

const LOCAL_BIN_DIR = path.resolve(NODE_MODULES_DIR, '.bin');

const PACKAGES_DIR = path.resolve(PROJECT_ROOT, 'packages');

const SRC_DIRECTORY = 'src';

const OUT_DIRECTORY = 'lib';

/**
 * Get package object from source file
 */
module.exports.findPackage = function (sourceFilename) {
  const packageDir = packageDirectory(sourceFilename);
  const srcDir = path.resolve(packageDir, SRC_DIRECTORY);
  const relative = path.relative(srcDir, sourceFilename);
  if (relative.includes('..')) {
    return null;
  }
  return getPackage(packageDir);
};

/**
 * Get package object from source file
 */
const getPackage = module.exports.getPackage = function (filename) {
  const name = path.relative(PACKAGES_DIR, filename);
  if (name.includes('..') || name.includes('/')) {
    return null;
  }
  const packageDir = path.resolve(PACKAGES_DIR, name);
  return {
    name,
    path: packageDir,
    srcPath: path.resolve(packageDir, SRC_DIRECTORY),
    outPath: path.resolve(packageDir, OUT_DIRECTORY)
  };
};

/**
 * Get package directory of file.
 */
const packageDirectory = module.exports.packageDirectory = function (filename) {
  const name = path.relative(PACKAGES_DIR, filename).split('/')[0];
  if (name.includes('..')) {
    return null;
  }
  return path.resolve(PACKAGES_DIR, name);
};

/**
 * Get build out path for source
 */
module.exports.getOutPath = function (pkg, filename) {
  const srcRelative = path.relative(pkg.srcPath, filename);
  return path.resolve(pkg.outPath, srcRelative);
};

module.exports.getPackages = function () {
  return fs.readdirSync(PACKAGES_DIR)
    .map(filename => path.resolve(PACKAGES_DIR, filename))
    .filter((filename) => fs.lstatSync(path.resolve(filename)).isDirectory())
    .map(getPackage);
};

const runCommand = module.exports.runCommand = function (command, args = [], opts = {}) {
  let commandName = path.relative(LOCAL_BIN_DIR, command);
  if (commandName.includes('..')) {
    commandName = command;
  }
  opts = _.assign({}, {
    'cwd': PROJECT_ROOT
  }, opts);

  console.log(chalk.cyan(`Run command ${commandName} ${args.join(' ')}`));

  const spawned = spawn(command, args, opts);

  spawned.stdout.on('data', (data) => {
    process.stdout.write(data);
  });

  spawned.stderr.on('data', (data) => {
    process.stderr.write(chalk.red(data.toString()));
  });

  return new Promise((resolve, reject) => {
    spawned.on('close', (code) => {
      if (code === 0) {
        resolve(code);
      } else {
        reject(code);
      }
    });
  });
};

module.exports.runLocalCommand = function (command, args, opts = {}) {
  command = path.resolve(LOCAL_BIN_DIR, command);
  return runCommand(command, args, opts);
};

module.exports.copyFile = function (source, target, cb) {
  let cbCalled = false;

  const readStream = fs.createReadStream(source);
  readStream.on('error', function (err) {
    done(err);
  });
  const writeStream = fs.createWriteStream(target);
  writeStream.on('error', function (err) {
    done(err);
  });
  writeStream.on('close', function () {
    done();
  });
  readStream.pipe(writeStream);

  function done (err) {
    if (!cbCalled) {
      cb(err);
      cbCalled = true;
    }
  }
};

module.exports.fileExists = function (filename) {
  try {
    return fs.statSync(filename).isFile();
  } catch (e) {
    return false;
  }
};
