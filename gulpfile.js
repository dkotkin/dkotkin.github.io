'use strict';

var gulp = require('gulp'),
    connect = require('gulp-connect'),
    open = require('gulp-open'),
    sass = require('gulp-sass'),
    cleanCSS = require('gulp-clean-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    watch = require('gulp-watch');

var paths = {
  port: 9009,
  devBaseUrl: 'http://localhost',
  style: 'production/sass/*.scss',
  scripts: 'production/js/*.js'
};

// Start a local development server
gulp.task('connect', function() {
  connect.server({
      root: ['../dkotkin.github.io'],
      port: paths.port,
      base: paths.devBaseUrl,
      livereload: true
  });
});

gulp.task('open', ['connect'], function() {
  gulp.src('index.html')
    .pipe(open({ uri: paths.devBaseUrl + ':' + paths.port + '/' }));
});

gulp.task('sass', function () {
  // Modify and minify all Styles
  return gulp.src(paths.style)
    .pipe(concat('style.min.scss'))
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('build/css'));
});

gulp.task('scripts', function() {
  // Minify and copy all JavaScript
  // with sourcemaps all the way down
  return gulp.src(paths.scripts)
    .pipe(sourcemaps.init())
    .pipe(concat('script.min.js'))
    .pipe(uglify().on('error', function(e){
      console.log(e);
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('build/js'));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.style, ['sass']);
  gulp.watch(paths.scripts, ['scripts']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['sass', 'scripts', 'open', 'watch']);
