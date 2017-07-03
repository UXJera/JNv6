'use strict';

var gulp    = require('gulp'),
    sass    = require('gulp-sass'),
    prefix  = require('gulp-autoprefixer'),
    minCss  = require('gulp-minify-css'),
    rename  = require('gulp-rename'),
    concat  = require('gulp-concat');
    //map     = require('gulp-sourcemaps')

var config = {
  srcCss    : 'jnv6/sass/**/*.scss',
  buildCss  : 'css'
}

gulp.task('build-css', function(cb) {
   gulp.src(config.srcCss)

      // output non-minified CSS file and map the scss
      //.pipe(map.init())
      .pipe(sass({
         outputStyle : 'expanded'
      }).on('error', sass.logError))
      .pipe(map.write())
      .pipe(prefix())
      .pipe(gulp.dest(config.buildCss))

      // output the minified version
      .pipe(minCss())
      .pipe(rename({ extname: '.min.css' }))
      .pipe(gulp.dest(config.buildCss))

   cb()
})

gulp.task('watch', function(cb) {
   gulp.watch(config.srcCss, ['build-css'])
})

gulp.task('default', ['build-css', 'watch'])



// var 	gulp	 		= require('gulp'), // Name variable after the module
// 		concat		= require('gulp-concat'),
// 		compass		= require('gulp-compass'),
// 		uglify 		= require('gulp-uglify'),
// 		rename		= require('gulp-rename'),
// 		sass 			= require('gulp-sass'),
// 		maps			= require('gulp-sourcemaps'),
//     autoprefixer = require('gulp-autoprefixer'),
//     cssnano   = require ('gulp-cssnano'),
// 		del 			= require('del');
//
// gulp.task("concatScripts", function() {
// 		return gulp.src([
// 			'js/*.js']) // List of files in array
// 		.pipe(maps.init())
// 		.pipe(concat("app.js"))  // File to concat to
// 		.pipe(maps.write('./'))
// 		.pipe(gulp.dest("js")) //Destination of file
// 	});
//
// gulp.task("minifyScripts", ["concatScripts"], function() {
// 	return gulp.src("js/app.js")
// 		.pipe(uglify())
// 		.pipe(rename('app.min.js'))
// 		.pipe(gulp.dest('js'))
// });
//
// gulp.task('sass', function () {
//   return gulp.src('scss/**/*.scss')
//     .pipe(maps.init())
//     .pipe(sass().on('error', sass.logError))
//     .pipe(maps.write())
//     .pipe(gulp.dest('css'));
// });
//
// gulp.task('autoPrefix', ['sass'], function () {
// 	return gulp.src('css/style.css')
// 		.pipe(autoprefixer({
// 			browsers: ['last 2 versions'],
// 			cascade: false
// 		}))
// 		.pipe(gulp.dest('css'));
// });
//
// gulp.task('minifyCSS', ['autoPrefix'], function () {
//   return gulp.src('css/style.css')
//       .pipe(cssnano())
//       .pipe(gulp.dest('css'));
// });
//
// gulp.task('watch', function () {
//   gulp.watch('scss/**/*.scss', ['sass']);
// });
//
// gulp.task('clean', function() {
// 	del(['dist', 'css/application.css*', 'js/app*.js*']); // Deletes the dist folder and those files
// });
//
// gulp.task("build", ['minifyScripts', 'minifyCSS']), function() {
// 	return gulp.src(["css/style.css", "js/app.min.js", "index.html", "img/**", "fonts/**"], { base: './'})
// 		.pipe(gulp.dest('live'));
// }; // Removed concatScripts because it is a dependency of minifyScripts and is ran there.
//
// gulp.task("default", ["clean"], function() {
// 	gulp.start('build');
// }); //Default
