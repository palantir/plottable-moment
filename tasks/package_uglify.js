var gulp = require("gulp");
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

module.exports = function() {
  return function () {
    gulp.src('plottable-moment.js')
      .pipe(uglify())
      .pipe(rename({
        extname: ".min.js"
      }))
      .pipe(gulp.dest("."));
  }
}
