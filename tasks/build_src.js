var gulp = require("gulp");
var ts = require("gulp-typescript");
var merge = require("merge2");

module.exports = function() {
  return function() {
    var typescriptResult = gulp.src("src/**/*.ts")
      .pipe(ts({
        noImplicitAny: true,
        out: "plottable-moment.js",
        declaration: true
      }))
    return merge([
      typescriptResult.js.pipe(gulp.dest(".")),
      typescriptResult.dts.pipe(gulp.dest("."))
    ]);
  };
}
