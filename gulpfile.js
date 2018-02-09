// 引入 gulp及组件
var gulp = require('gulp'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    notify = require("gulp-notify"),
    imagemin = require('gulp-imagemin'),
    tinypng_nokey = require('gulp-tinypng-nokey'),

    //
    src = './src',
    dest = './dest';

// js处理
gulp.task('js', function() {
    gulp.src(src + '/js/*')
        .pipe(uglify())
        .pipe(rename({ suffix: '-min' }))
        .pipe(gulp.dest(dest + '/js'))
        .pipe(notify("Found file: <%= file.relative %>!"))
});

// gulp.task('img', () =>
//     gulp.src(src + '/img/**')
//     .pipe(imagemin({ progressive: true, optimizationLevel: 3 }))
//     .pipe(gulp.dest(dest + '/img/'))
//     .pipe(notify("Found file: <%= file.relative %>!"))
// );

gulp.task('img', function() {
    gulp.src(src + '/img/**')
        .pipe(tinypng_nokey())
        .pipe(gulp.dest(dest + '/img/'))
        .pipe(notify("Found file: <%= file.relative %>!"));
});

gulp.task('default', function() {
    gulp.start(['img']);
});