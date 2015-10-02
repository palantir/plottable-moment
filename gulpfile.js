var gulp = require("gulp");

// Building
gulp.task("build:src", require("./tasks/build_src.js")());
gulp.task("build:test", require("./tasks/build_test.js")());

gulp.task("build", ["build:src", "build:test"]);

// Linting
gulp.task("lint:ts", require("./tasks/lint_ts.js")());

gulp.task("lint", ["lint:ts"]);

// Starting a server
gulp.task("serve", require("./tasks/serve.js")());

// Releasing
gulp.task("package:uglify", require("./tasks/package_uglify.js")());
gulp.task("package:compress", require("./tasks/package_compress.js")());

gulp.task("package", ["package:uglify", "package:compress"]);

// Testing
gulp.task("test:unit:phantomJS", require("./tasks/test_unit_phantomJS.js")());

gulp.task("test:unit", ["test:unit:phantomJS"]);

gulp.task("test", ["test:unit"]);

// Watching
gulp.task("watch:src", require("./tasks/watch_src.js")());
gulp.task("watch:test", require("./tasks/watch_test.js")());
gulp.task("watch", ["watch:src", "watch:test"]);

// Releasing
gulp.task("release", ["build", "test", "lint", "package"]);

gulp.task("default", ["watch", "build", "lint", "serve"]);