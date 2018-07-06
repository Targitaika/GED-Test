var install = require("gulp-install"),
    gulp = require('gulp'),
    concat = require('gulp-concat'), // Сообственно Gulp JS
  	less = require('gulp-less');
//
// gulp.src(['./bower.json', './package.json'])
//   .pipe(install());

gulp.task('watch', ['less', 'scripts'], function(){

	gulp.watch('dist/less/**/*.less', ['less']);
    gulp.watch('dist/js/**/*.js', ['scripts']);

	gulp.watch('dist/plugins/**/*.less', ['less']);
    gulp.watch('dist/plugins/**/*.js', ['scripts']);

});

/* less --- css */
gulp.task('less', function(){
	gulp.src('dist/less/styles.less')
	.pipe(less())
	.pipe(gulp.dest('app/assets/css'));

	gulp.src('dist/plugins/**/*.less')
	.pipe(less())
	.pipe(concat('plugins.css'))
	.pipe(gulp.dest('app/assets/css'));

});


gulp.task('scripts', function() {
  	gulp.src('dist/js/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('app/assets/js/'));

    gulp.src('dist/plugins/**/*.js')
    .pipe(concat('plugins.js'))
    .pipe(gulp.dest('app/assets/js/'));

});

gulp.task('default', ['less', 'scripts', 'watch'])
