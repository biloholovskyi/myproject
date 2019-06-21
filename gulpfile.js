var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');
var minCSS = require('gulp-clean-css');
var minJS = require('gulp-minify');
var clean = require('gulp-clean');


gulp.task('minJS', () => {
    gulp.src('./app/js/**/*.js')
      .pipe(minJS({
          ext: {
              src: '-debug.js',
              min: '.js'
          },
          exclude: ['tasks'],
          ignoreFiles: ['.combo.js', '-min.js']
      }))
      .pipe(gulp.dest('./build/js/'))

});

gulp.task('default', function() {
    browserSync.init({
        proxy: "myproject.site/app"
    });
    gulp.watch("app/sass/**/*.scss", function () {
        return gulp.src("app/sass/**/*.scss")
          .pipe(sass())
          .pipe(minCSS())
          .pipe(gulp.dest("app/css"))
          .pipe(browserSync.stream());
    });
    gulp.watch("app/**/*.php").on('change', browserSync.reload);
    gulp.watch("app/**/*.html").on('change', browserSync.reload);
    gulp.watch("app/js/*.js").on('change', browserSync.reload);
});