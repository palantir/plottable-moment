var gulp = require("gulp");
var ts = require("gulp-typescript");
var merge = require("merge2");
var server = require("gulp-server-livereload");
var mochaPhantomJS = require('gulp-mocha-phantomjs');

gulp.task("build:src", function() {
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
});

gulp.task("build:test", function() {
  var typescriptResult = gulp.src("test/**/*.ts")
    .pipe(ts({
      noImplicitAny: true,
      out: "plottable-moment-tests.js",
	  }))
  return typescriptResult.js.pipe(gulp.dest("."));
});

gulp.task("build", ["build:src", "build:test"]);

gulp.task("serve", function() {
  gulp.src('.')
    .pipe(server({
      port: 6300,
      livereload: true,
      directoryListing: true
    }));
});

gulp.task("test", function() {
  return gulp.src('test/tests.html')
    .pipe(mochaPhantomJS());
});

gulp.task("watch", function() {
  gulp.watch("src/**/*.ts", ["build:src", "build:test"]);
  gulp.watch("test/**/*.ts", ["build:test"]);
});

gulp.task("default", ["watch", "build", "serve"]);