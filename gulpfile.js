var gulp = require('gulp');
var bs = require('browser-sync').create();
var sass = require('gulp-sass');
var pump = require('pump');
var wait = require('gulp-wait');

gulp.task('server', function(){
    
    bs.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("src/scss/**/*.scss", ['sass']).on('change', bs.reload);
    gulp.watch("*.js").on('change', bs.reload);
    gulp.watch("*.html").on('change', bs.reload);

});

gulp.task('sass', function(){
    pump([
        gulp.src('src/scss/style.scss'),
        wait(150),
        sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError),
        gulp.dest('dist/css'),
    ])
});