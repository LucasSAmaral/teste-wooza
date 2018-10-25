var gulp = require('gulp');
var bs = require('browser-sync').create();
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var pump = require('pump');

gulp.task('server', ['sass', 'uglify'], function(){
    
    bs.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("src/scss/**/*.scss", ['sass']);
    gulp.watch("src/js/*.js", ['uglify'])
    gulp.watch("*.html").on('change', bs.reload);

});

gulp.task('sass', function(){
    pump([
        gulp.src('src/scss/style.scss'),
        sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError),
        gulp.dest('dist/css'),
    ])
});

gulp.task('uglify', function(){
    pump([
        gulp.src('src/js/*.js'),
        uglify(),
        gulp.dest('dist/js'),
    ])
});