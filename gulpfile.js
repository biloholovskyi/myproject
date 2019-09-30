var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');
var minCSS = require('gulp-clean-css');
var minJS = require('gulp-minify');
var clean = require('gulp-clean');
const babel = require('gulp-babel');

gulp.task('default', function() {
    browserSync.init({
        proxy: "myproject/app"
    });
    gulp.watch("app/sass/**/*.scss", function () {
        return gulp.src("app/sass/**/*.scss")
          .pipe(sass())
          .pipe(minCSS())
          .pipe(gulp.dest("app/css"))
          .pipe(browserSync.stream());
    });
    gulp.watch("app/js/**/*.js", function () {
      return gulp.src("app/js/index.js")
        .pipe(babel({
          presets: ['@babel/env']
        }))
        .pipe(gulp.dest("app/buildjs"))
        .pipe(browserSync.stream());
    });
    gulp.watch("app/**/*.php").on('change', browserSync.reload);
    gulp.watch("app/**/*.html").on('change', browserSync.reload);
    gulp.watch("app/js/*.js").on('change', browserSync.reload);
});