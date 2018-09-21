'use strict';

var autoprefixer = require('gulp-autoprefixer');
var csso = require('gulp-csso');
var gulp = require('gulp');
var uglify = require('gulp-uglify');

// Browsers that you want to support
const AUTOPREFIXER_BROWSERS = [
	'ie >= 10',
	'ie_mob >= 10',
	'ff >= 30',
	'chrome >= 34',
	'safari >= 7',
	'opera >= 23',
	'ios >= 7',
	'android >= 4.4',
	'bb >= 10'
];

// CSS
gulp.task('styles', function () {
	return gulp.src('src/css/style.css')
		.pipe(autoprefixer({ browsers: AUTOPREFIXER_BROWSERS }))
		.pipe(csso())
		.pipe(gulp.dest('./dist/css'))
});

// JS
gulp.task('scripts', function () {
	return gulp.src('./src/js/carousel.js')
		.pipe(uglify())
		.pipe(gulp.dest('./dist/js'))
});

gulp.task('default', ['styles', 'scripts']);