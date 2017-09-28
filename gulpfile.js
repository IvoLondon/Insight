
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');

// LINT TASK
gulp.task('lint', function () {
	return gulp.src('./lib/*.js')
	.pipe(jshint())
    .pipe(jshint.reporter('default'));
});
gulp.task('sass', function () {
  return gulp.src('./scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

// WATCH FOR CHANGES
gulp.task('watch', function () {
	gulp.watch('js/*.js', ['lint']);
	gulp.watch('scss/*.scss', ['sass']);
});

// GULP DEFAULT
gulp.task('default', ['lint', 'sass']); 