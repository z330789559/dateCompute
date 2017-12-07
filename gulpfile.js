/**
 * Created by baozhong on 2017/12/7.
 */
const fs = require('fs');
var gulp =require("gulp");
    gulpRename=require("gulp-rename");
    ugly=require("gulp-uglify");
// const fs = require('fs');

gulp.task("mini",()=>(
     gulp.src("src/index.js")
            .pipe(ugly())
            .pipe(gulpRename("index.min.js"))
            .pipe(gulp.dest('dist/'))
))