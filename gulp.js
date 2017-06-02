var gulp = require('gulp');
var serve = require('gulp-serve');
 
gulp.task('serve', serve('public'));
gulp.task('serve-build', serve(['public', 'build']));
gulp.task('serve-prod', serve({
  root: ['public', 'build'],
  port: 666,
  middleware: function(req, res) {
    // custom optional middleware 
  }
}));