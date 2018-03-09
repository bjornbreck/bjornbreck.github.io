"use strict";

/************************
 * SETUP
 ************************/

var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCss = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var livereload = require('gulp-livereload');
var concat = require('gulp-concat');
var webpack = require('webpack-stream');
var plumber = require('gulp-plumber');

/************************
 * CONFIGURATION
 ************************/

var autoReload = true;

var paths = {
  npmDir: './node_modules'
};

var stylesSrc = [
  // add any component CSS here (ie - from npm packages)
  './sass/style.scss'
];

var sassdocSrc = [
  './sass/**/*.scss',
];

var webpackEntryPoints = [
  './js/src/theme.js'
];

/************************
 * TASKS
 ************************/

gulp.task('styles', function() {
  gulp.src(stylesSrc)
    .pipe(sourcemaps.init())

    // Catch any SCSS errors and prevent them from crashing gulp
    .on('error', function (error) {
      console.error(error);
      this.emit('end');
    })
    .pipe(autoprefixer('last 2 versions', '> 1%', 'ie 11'))
    .pipe(sourcemaps.write())
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./css/'))
    .pipe(livereload());
});

gulp.task('scripts', function() {
  gulp.src(webpackEntryPoints)
    .pipe(plumber())
    .pipe(webpack( require('./webpack.config.js') ))
    .pipe(gulp.dest('./js/dist/'))
    .pipe(livereload());
});

gulp.task('watch', function() {
  if (autoReload) {
    livereload.listen();
  }
  gulp.watch('./js/src/**/*.js', ['scripts']);
});

gulp.task('js_watch', function() {
  if (autoReload) {
    livereload.listen();
  }
  gulp.watch('./js/src/**/*.js', ['scripts']);
});

gulp.task('default', ['styles', 'scripts']);
