let gulp = require('gulp');
let less = require('gulp-less');
let concat = require('gulp-concat');

let paths = {
	html: ['./src/ng-app/**/*.html', 'index.html'],
	less: ['./src/native-app/less/**/*.less'],
	js: ['./src/native-app/**/*.js']
};

gulp.task('less', function () {
	return gulp.src(paths.less)
		.pipe(concat('main.less'))
		.pipe(less())
		.pipe(gulp.dest('./bin/css'));
});

gulp.task('js', function () {
	return gulp.src(paths.js)
		.pipe(concat('app.js'))
		.pipe(gulp.dest('./bin/js'));
});