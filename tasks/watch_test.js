var gulp = require("gulp");

module.exports = function() {
  return function() {
    gulp.watch("test/**/*.ts", ["build:test"]);
  }
}