'use strict';

const path = require('path');

const del = require('del');

const PROJECT_ROOT = require('./constants').PROJECT_ROOT;

const PACKAGES_DIR = path.resolve(PROJECT_ROOT, 'packages');

del.sync([
  path.resolve(PACKAGES_DIR, '*', 'lib')
]);

del.sync([
  path.resolve(PROJECT_ROOT, 'demo', 'build')
]);
