/**
 * Gulp source watch tasks.
 */

'use strict';

var path = require('path'),
    gulp = require('gulp-help')(require('gulp')),
    runSequence = require('run-sequence'),
    conf = require('./conf'),
    server = require('gulp-express');

/**
 * Gulp source watch task.
 * Run tslint, jshint -> run clean build, clean tmp -> run watch source scripts, and watch build scripts in parallel.
 * @param done - done callback function.
 */
gulp.task('watch', function (done) {
  server.run(['.jsTmp/index.js']);
    runSequence(['jshint', 'tslint'], ['clean-build', 'clean-tmp'], ['watch-source', 'watch-build-scripts'], done);
});

/**
 * Gulp watch source.
 * Watch changes in source files on change and run tslint.
 */
gulp.task('watch-source', function(){
    gulp.watch([
      path.join(conf.paths.test, conf.path_pattern.ts),
      path.join(conf.paths.src, conf.path_pattern.ts)
    ], function() {
      runSequence('tslint', 'tmp-watch-scripts');
    });
});

/**
 * Gulp watch build scripts.
 * Watch changes in build process helper files -> run jshint.
 */
gulp.task('watch-build-scripts', function(){
  gulp.watch([
    path.join(conf.paths.gulp, conf.path_pattern.js), conf.paths.gulpFile  ], function() {
    gulp.start('jshint');
  });
});




