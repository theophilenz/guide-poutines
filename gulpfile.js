//Tâches Gulp

var gulp = require("gulp");
//Require the uglify module
var uglify = require("gulp-uglify");
//Require live-reload
var livereload = require("gulp-livereload");
//Require gulp concat
var concat = require("gulp-concat");
//Require css minify
var minifyCs = require("gulp-minify-css");
//call autoprefixer
var autoprefixer = require("gulp-autoprefixer");
//Call plumber
var plumber = require("gulp-plumber");
//Require the source maps plugin
var sourcemaps = require("gulp-sourcemaps");
//Require sass
var sass = require("gulp-sass");
//FILE PATHS
var DIST_PATH = "public/dist";
var SCRIPT_PATH = "public/scripts/**/*.js";
var CSS_PATH = "public/css/**/*.css";

//Styles task for SCSS
gulp.task("styles", function() {
    console.log("Starting styles task");
    //Will take the reset.css before
    return gulp.src("public/scss/styles.scss")
        .pipe(plumber(function(err) {
            console.log("Styles task error");
            console.log(err);
            this.emit("end"); //Keeps gulp watch running in case of errors
        }))
        .pipe(sourcemaps.init())
        .pipe(autoprefixer({
            browsers: ["last 2 versions"] //Force prefixing only on specific versions. (in this case, the last two)
        })) //All default
        .pipe(sass({
            outputStyle: "compressed"
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(DIST_PATH))
        .pipe(livereload());
});

//Scripts
gulp.task("scripts", function() {
    console.log("Starting scripts task");

    //Load all the ressources needed for this task (with a .js extension)
    return gulp.src(SCRIPT_PATH)
        .pipe(uglify())
        .pipe(gulp.dest(DIST_PATH))
        .pipe(livereload());
});

//Images
gulp.task("images", function() {
    console.log("Starting images task");
});

//This task for watching the changes of files
gulp.task("watch", function() {
    console.log("Now watching");
    require("./server.js");
    //Ask livereload to listen
    livereload.listen();
    gulp.watch(SCRIPT_PATH, ["scripts"]);
    // gulp.watch(CSS_PATH, ["styles"]);
    gulp.watch("public/scss/**/*.scss", ["styles"]);
});


//This is the default task for gulp
gulp.task("default", function() {
    console.log("Starting default task");
});