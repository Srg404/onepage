const gulp = require("gulp");
const clean = require("gulp-clean");
const sass = require("gulp-dart-sass");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const autoprefixer = require("gulp-autoprefixer");
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const browsersync = require('browser-sync').create();

const src = {
  sassPath: "src/scss/**/*.scss",
  jsPath: "src/js/**/*.js",
  mapPath: ".",
}

// Compile SASS
gulp.task("sass", () => {
  return gulp
    .src(src.sassPath)
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        outputStyle: "compressed"
      }).on("error", sass.logError)
    )
    .pipe(
      autoprefixer({
        cascade: false
      })
    )
    .pipe(rename((path) => {
        path.extname = ".min.css";
    }))
    .pipe(sourcemaps.write(src.mapPath))
    .pipe(gulp.dest("css"))
    .pipe(browsersync.reload({ stream: true }));
});

// Compile JS
gulp.task("js", () => {
  return gulp
    .src(src.jsPath)
    .pipe(sourcemaps.init())
    .pipe(concat("scripts.min.js"))
    .pipe(uglify())
    .pipe(sourcemaps.write(src.mapPath))
    .pipe(gulp.dest("js"))
    .pipe(browsersync.reload({ stream: true }));
});

// Start App on Browser
gulp.task('browser-sync', () => {
  browsersync.init({
    server: "./"
  });
});

// Clean output directory
gulp.task("clean", () => {
  return gulp.src(["./js/*","./css/*"], { read: false }).pipe(clean());
});

// Detect Changes
gulp.task("watch", () => {
  gulp.watch(src.sassPath, gulp.series("sass"));
  gulp.watch(src.jsPath, gulp.series("js"));
  gulp.watch('*.html').on('change', browsersync.reload);
});

// Build
gulp.task('build', gulp.series(gulp.parallel('sass', 'js')));

// Run Gulp
gulp.task('default', gulp.series(gulp.parallel('sass', 'js', 'browser-sync', 'watch')));
