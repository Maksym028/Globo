var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');



gulp.task('sass', function() {
  gulp.src('scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      errLogToConsole: true
    }))

    .pipe(autoprefixer('last 2 version'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('css/'));
});

gulp.task('watch', ['sass'], function() {
  gulp.watch('scss/**/*.scss', ['sass']);
});
