var gulp = require("gulp");
var ts = require("gulp-typescript");

module.exports = function() {
  return function() {
    var typescriptResult = gulp.src("test/**/*.ts")
      .pipe(ts({
        noImplicitAny: true,
        out: "plottable-moment-tests.js",
      }))
    return typescriptResult.js.pipe(gulp.dest("."));
  };
}
