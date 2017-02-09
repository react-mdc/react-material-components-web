'use strict';

const path = require('path');
const program = require('commander');
const chalk = require('chalk');

const util = require('./util');

function copyFlowSingleSource (srcPath, outPath) {
  const flowPath = outPath + '.flow';
  return new Promise((resolve, reject) => {
    util.copyFile(srcPath, flowPath, (error) => {
      if (error != null) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
}

function runBuildFile (srcPath, outPath) {
  return util.runLocalCommand('babel', [
    srcPath, '-o', outPath
  ]).then(() => true, (code) => {
    console.error(chalk.red(`Failed to build ${srcPath}, babel exit code: ${code}`));
    Promise.reject();
  }).then(() => copyFlowSingleSource(srcPath, outPath))
    .then(() => {
      console.log(`${srcPath} -> ${outPath}.flow`);
      return true;
    }, (error) => {
      console.error(chalk.red(`Failed to build ${srcPath}, failed to copy flow source.`));
      Promise.reject(error);
    });
}

function runBuildDirectory (srcPath, outPath) {
  return util.runLocalCommand('babel', [
    srcPath, '-d', outPath
  ]).then(() => true, (code) => {
    console.error(chalk.red(`Failed to build ${srcPath}, babel exit code: ${code}`));
    Promise.reject();
  }).then(() => util.runLocalCommand('flow-copy-source', [
    srcPath, outPath
  ]).then(() => true, (code) => {
    console.error(chalk.red(`Failed to build ${srcPath}, flow-copy-source exit code: ${code}`));
    Promise.reject();
  }));
}

function buildPath (target) {
  const pkg = util.findPackage(target);
  if (pkg == null) {
    console.error(chalk.red(`${target} it not included in any package`));
    return false;
  }
  const srcPath = path.resolve(target);
  const outPath = util.getOutPath(pkg, srcPath);
  console.log(chalk.green(`Building "${target}" in package: ${pkg.name}`));
  return runBuildFile(srcPath, outPath);
}

function buildPackage (pkg) {
  const {name, srcPath, outPath} = pkg;

  console.log(chalk.green(`Building package: ${name}`));
  return runBuildDirectory(srcPath, outPath).catch((e) => {
    console.error(chalk.red(`Failed to build package: ${name}`));
    Promise.reject(e);
  });
}

function buildPackages (packages) {
  return packages
    .slice(1)
    .reduce((p, pkg) => p.then(() => buildPackage(pkg)), buildPackage(packages[0]));
}

const runCommand = module.exports.runCommand = function (target) {
  const allPackages = util.getPackages();

  if (target == null) {
    return buildPackages(allPackages);
  }
  const pkg = allPackages.find(x => x.name === target);
  if (pkg != null) {
    return buildPackage(pkg);
  } else {
    return buildPath(target);
  }
};

function main () {
  let args = {};
  program
    .arguments('[targets...]')
    .action((targets) => {
      args.targets = targets;
    });

  program.parse(process.argv);

  let {targets} = args;
  if (targets && targets.length > 0) {
    targets
      .slice(1)
      .reduce((p, pkg) => p.then(() => runCommand(pkg)), runCommand(targets[0]));
  } else {
    return runCommand(null);
  }
}

if (require.main === module) {
  main();
}
