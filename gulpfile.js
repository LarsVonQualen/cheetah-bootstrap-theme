var gulp = require("gulp"),
    less = require("gulp-less"),
    sourcemaps = require("gulp-sourcemaps");

gulp.task("transpile-less", function () {
  return gulp.src("./src/cheetah.less")
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest("./dist/"))
});

gulp.task("watch", ["transpile-less"], function () {
  gulp.watch("./src/**/*.less", ["transpile-less"]);
});

gulp.task("default", ["watch"]);
