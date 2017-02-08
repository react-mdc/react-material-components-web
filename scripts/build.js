'use strict';

const path = require('path');
const chalk = require('chalk');

const util = require('./util');

const SRC_DIRECTORY = 'src';
const OUT_DIRECTORY = 'lib';

function buildPackage (name, directory, src = SRC_DIRECTORY, out = OUT_DIRECTORY) {
  const srcDirectory = path.resolve(directory, src);
  const outDirectory = path.resolve(directory, out);

  console.log(chalk.green(`Building package: ${name}`));

  let result = util.runCommand('babel', [
    srcDirectory, '-d', outDirectory
  ]);
  if (result !== 0) {
    console.warn(chalk.yellow(`Failed to build ${name}, babel exit code: ${result}`));
    return false;
  }
  result = util.runCommand('flow-copy-source', [
    srcDirectory, outDirectory
  ]);
  if (result !== 0) {
    console.warn(chalk.yellow(`Failed to build ${name}, flow-copy-source exit code: ${result}`));
    return false;
  }
  return true;
}

function buildAllPackages () {
  const packages = util.getPackages();
  return Object.keys(packages).every((name) => {
    const directory = packages[name];
    return buildPackage(name, directory);
  });
}

function main () {
  if (!buildAllPackages()) {
    process.exit(1);
  }
}

main();
