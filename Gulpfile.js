'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 
gulp.task('sass', function () {
  return gulp.src([
  	'./src/**/*.{scss, sass}',
  	'./Example/**/*.{scss, sass}'
	])
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./Example'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch([
  		'./src/**/*.{scss, sass}',
  		'./Example/**/*.{scss, sass}'
  	], ['sass']);
});