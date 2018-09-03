const browserSync = require('browser-sync').create();
const gulp = require('gulp');

gulp.task('default', () => {
  browserSync.init({
    server: './',
  });

  browserSync.stream();
});
