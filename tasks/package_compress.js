var gulp = require("gulp");
var compress = require("gulp-zip");

module.exports = function() {
  return function() {
    gulp.src(["plottable-moment.js", "plottable-moment.min.js", "plottable-moment.d.ts",
      "README.md", "LICENSE"])
      .pipe(compress("plottable-moment.zip"))
      .pipe(gulp.dest('.'));
  }
}