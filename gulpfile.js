'use-strict';

const del = require('del');
const gulp = require('gulp');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const server = require('browser-sync').create();
const mqpacker = require('css-mqpacker');
const minify = require('gulp-csso');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const webpack = require('gulp-webpack');
const mocha = require('gulp-mocha');

let isSourceMaps = true;

gulp.task('style', function () {
  gulp.src('client/sass/main.sass')
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer({
        browsers: [
          'last 1 version',
          'last 2 Chrome versions',
          'last 2 Firefox versions',
          'last 2 Opera versions',
          'last 2 Edge versions'
        ]
      }),
      mqpacker({sort: true})
    ]))
    // .pipe(gulp.dest('client/css'))
    .pipe(server.stream())
    .pipe(minify())
    .pipe(rename('main.min.css'))
    .pipe(gulp.dest('public/css'))
    .pipe(server.stream());
});

gulp.task('scripts', function () {
  gulp.src('client/js/main.js')
    .pipe(plumber())
    .pipe(webpack({
      devtool: isSourceMaps ? 'source-map' : null,
      module: {
        loaders: [
          { test: /\.js$/, loader: 'babel-loader'},
        ],
      },
      output: {
        filename: 'main.js'
      }
    }))
    .pipe(gulp.dest('public/js/'))
    .pipe(server.stream());
});

require('babel-register');
gulp.task('test', function () {
  return gulp
    .src(['client/js/**/*.test.js'], { read: false })
    .pipe(mocha({
      compilers: {
        js: 'babel-register' // Включим поддержку "import/export" в Mocha
      },
      reporter: 'spec'       // Вид в котором я хочу отображать результаты тестирования
    }));
});

gulp.task('clean-js', function () {
  return del('public/js');
});

gulp.task('copy-html', function () {
  gulp.src('client/*.html')
    .pipe(gulp.dest('public'))
    .pipe(server.stream());
})

gulp.task('copy', ['copy-html', 'scripts', 'style']);

gulp.task('serve', ['assemble'], function () {
  server.init({
    server: './public',
    notify: false,
    open: true,
    port: 3501,
    ui: false
  });

  gulp.watch('client/sass/**/*.{scss,sass}', ['style']);
  gulp.watch('client/js/**/*.js', ['scripts']).on('change', server.reload);
});

gulp.task('assemble', function () {
  gulp.start('copy', 'style');
});

gulp.task('build', ['clean-js'], function () {
  isSourceMaps = false;
  gulp.start('assemble');
});
