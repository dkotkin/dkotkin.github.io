'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cleanCSS = require('gulp-clean-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    watch = require('gulp-watch');

var paths = {
  style: 'production/sass/*.scss',
  scripts: 'production/js/*.js'
};

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
gulp.task('default', ['watch', 'sass', 'scripts']);
