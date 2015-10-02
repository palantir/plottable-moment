var gulp = require("gulp");
var tslint = require("gulp-tslint");

module.exports = function() {
  return function() {
    gulp.src(["src/**/*.ts", "test/**/*.ts"])
      .pipe(tslint({
        configuration: "lint/tslint.json"
      }))
      .pipe(tslint.report("verbose"));
  };
}
