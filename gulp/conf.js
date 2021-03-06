/**
 *  This file contains the variables used in other gulp files
 *  which defines tasks
 *  By design, we only put there very generic config values
 *  which are used in several places to keep good readability
 *  of the tasks
 */

var gutil = require('gulp-util'),
  _ = require('lodash');

/** Project Name goes here */
var Project_Name ='node-mongo-test';

/**
 *  The main paths of your project handle these with care
 */
exports.paths = {
  src: 'src',
  test: 'test',
  lib: 'lib',
  jsTmp:'.jsTmp',
  gulp:'gulp',
  gulpFile:'gulpfile.js',
  coverage: 'coverage',
  reportDir:'report',
  docs:'docs',
  example:'example',
  typings:{
    global:'typings/index.d.ts'
  },
  main:'/index.ts', /** If you change this you need to update the package.json as well */
  typings_json: __dirname + '/../typings.json',
  tsconfig_json: __dirname + '/../tsconfig.json'
};

/**
 *  The main file patterns goes here
 */
exports.path_pattern = {
  any: '**/*',
  ts:'**/*.ts',
  js:'**/*.js',
  map:'**/*.map',
  ktp_ts:'**/*.ktp.ts'
};

/**
 *  The main names of your project handle these with care
 */
exports.files = {
  PROJECT_NAME: Project_Name,
  JSON_DOC:'doc.json',
  EXAMPLE_HTML:'index.html'
};

/**
 *  The main report base constants of your project handle these with care
 */
exports.errors = {
  title:{
    TYPESCRIPT:'Typescript'
  }
};

/**
 * Get the locations of the all .ts files via tsconfig.json
 */
exports.tsFilesGlob = (function (c) {
  "use strict";

  return c.filesGlob || c.files || '**/*.ts';
}(require(__dirname + '/../tsconfig.json')));

 exports.tsLintFilesGlob = (function (c) {
 "use strict";

 var files = _.remove(c.files, function (file) {
 return _.indexOf(c.exclude, file) < 0;
 });

 return files || '*/**.ts';
}(require('../tsconfig.json')));

/**
 *  Common implementation for an error handler of a Gulp plugin
 */
exports.errorHandler = function(title) {
  'use strict';

  return function(err) {
    gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
    this.emit('end');
  };
};
