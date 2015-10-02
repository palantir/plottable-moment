var gulp = require("gulp");

module.exports = function() {
  return function() {
    gulp.watch("src/**/*.ts", ["build:src", "build:test"]);
  }
}