var gulp = require("gulp");
var server = require("gulp-server-livereload");

module.exports = function() {
  return function() {
    gulp.src('.')
      .pipe(server({
        port: 6300,
        livereload: true,
        directoryListing: true
      }));
  };
}
