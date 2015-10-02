var gulp = require("gulp");
var mochaPhantomJS = require('gulp-mocha-phantomjs');

module.exports = function() {
  return function() {
    return gulp.src('test/tests.html')
      .pipe(mochaPhantomJS());
  }
}