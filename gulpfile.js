/*eslint-env node */

var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var eslint = require('gulp-eslint');
var jasmineBrowser = require('gulp-jasmine-browser');
var concat = require('gulp-concat');

gulp.task('default', ['copy-html', 'styles', 'lint', 'scripts'], function() {
	gulp.watch('sass/**/*.scss', ['styles']);
	gulp.watch('js/**/*.js', ['lint']);
	gulp.watch('/index.html', ['copy-html']);
	gulp.watch('./dist/index.html').on('change', browserSync.reload);

	browserSync.init({
		server: './dist'
	});
});

// Prepare the app for Production Release
gulp.task('dist', [
	'copy-html',
	'styles',
	'lint',
	'scripts-dist'
]);

// Prepare Javascript source for development testing
gulp.task('scripts', function() {
	gulp.src('js/**/*.js')
		.pipe(concat('all.js'))
		.pipe(gulp.dest('dist/js'));
});

// Prepare Javascript source for release to production
gulp.task('scripts-dist', function() {
	gulp.src('js/**/*.js')
		.pipe(concat('all.js'))
		.pipe(gulp.dest('dist/js'));
});

gulp.task('copy-html', function() {
	// Copy index.html to the dist directory
	gulp.src('./index.html')
		.pipe(gulp.dest('./dist'));
});

gulp.task('styles', function() {
	gulp.src('css/**/*.css')
		// Update CSS prefixes to support the most recent two versions of
		// each browser
		.pipe(autoprefixer({
			browsers: ['last 2 versions']
		}))
		// Output the CSS to the dist/css directory
		.pipe(gulp.dest('dist/css'))
		// Synchronize the browser with the latest set of changes
		.pipe(browserSync.stream());
});

gulp.task('lint', function () {
	return gulp.src(['js/**/*.js'])
		// eslint() attaches the lint output to the eslint property
		// of the file object so it can be used by other modules.
		.pipe(eslint())
		// eslint.format() outputs the lint results to the console.
		// Alternatively use eslint.formatEach() (see Docs).
		.pipe(eslint.format())
		// To have the process exit with an error code (1) on
		// lint error, return the stream and pipe to failOnError last.
		.pipe(eslint.failOnError());
});

gulp.task('tests', function() {
	return gulp.src('jasmine/spec/feedreader.js')
		.pipe(jasmineBrowser.specRunner({console: true}))
		.pipe(jasmineBrowser.headless({driver: 'chrome'}));
});
