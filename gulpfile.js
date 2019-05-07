var gulp    = require('gulp'),
    sass    = require('gulp-sass'),
    prefix  = require('gulp-autoprefixer'),
    minCss  = require('gulp-minify-css'),
    rename  = require('gulp-rename'),
    concat  = require('gulp-concat'),
    jsmin   = require('gulp-jsmin'),
    map     = require('gulp-sourcemaps')

var config = {
  srcCss    : 'jnv6/scss/**/*.scss',
  buildCss  : 'jnv6/css',
  srcJs     : 'jnv6/js/*.js',
  buildJs   : 'jnv6/js'
}

gulp.task('build-css', function(cb) {
   gulp.src(config.srcCss)

      // output non-minified CSS file and map the scss
      .pipe(map.init())
      .pipe(sass.sync({
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


gulp.task('compile-js', function(cb) {
  gulp.src(config.srcJs)
    .pipe(jsmin())
		.pipe(concat('scripts.js'))  // File to concat to
		.pipe(gulp.dest('js')); // Destination of file

    console.log("JS Compiled");

  cb()
});

gulp.task('watch', function(cb) {
   gulp.watch(config.srcCss, ['build-css'])
})

gulp.task('default', ['build-css', 'compile-js', 'watch'])
