'use strict';

const fs = require('fs');
const chalk = require('chalk');
const path = require('path');

const util = require('./util');
const build = require('./build');
const {PROJECT_ROOT} = require('./constants');

let filesToBuild = new Map();

function rebuild (filename) {
  filesToBuild.set(filename, true);
}

function main () {
  util.getPackages().forEach(pkg => {
    try {
      fs.accessSync(pkg.srcPath, fs.F_OK);
      fs.watch(pkg.srcPath, {recursive: true}, (event, filename) => {
        const sourcePath = path.resolve(pkg.srcPath, filename);
        // TODO: Add lint

        if (['change', 'rename'].includes(event) && util.fileExists(sourcePath)) {
          console.log(chalk.green('->'), `${event}: ${filename}`);
          rebuild(sourcePath);
        } else {
          const outPath = util.getOutPath(pkg, sourcePath);
          try {
            fs.unlinkSync(outPath);
            fs.unlinkSync(outPath + '.flow');
            process.stdout.write(
              chalk.red('  \u2022 ') +
                path.relative(PROJECT_ROOT, outPath) +
                ' (deleted)' +
                '\n' +
                chalk.red('  \u2022 ') +
                path.relative(PROJECT_ROOT, outPath + '.flow') +
                ' (deleted)' +
                '\n'
            );
          } catch (e) {}
        }
      });
    } catch (e) {
      // doesn't exist
    }
  });

  const nextTick = () => {
    const targets = Array.from(filesToBuild.keys());
    if (targets.length > 0) {
      filesToBuild = new Map();
      targets
        .slice(1)
        .reduce((p, target) => p.then(() => build.runCommand(target)), build.runCommand(targets[0]))
        .then(() => setTimeout(nextTick, 100), () => setTimeout(nextTick, 100));
    } else {
      setTimeout(nextTick, 100);
    }
  };
  setTimeout(nextTick, 100);
  console.log(chalk.red('->'), chalk.cyan('Watching for changes...'));
}

if (require.main === module) {
  main();
}
