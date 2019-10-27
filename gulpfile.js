const gulp = require('gulp');
var browserSync = require('browser-sync').create();
var uglifycss = require('gulp-uglifycss');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');


function StartbrowserSync(){
    browserSync.init({
        server: {
            baseDir: "src"
        },
        
            online: true,
            tunnel: true
        
    });
};


function reload(done) {
    browserSync.reload();
    done();
}



 
gulp.task('css', function () {
  gulp.src('./src/css/**/*.css')
    .pipe(uglifycss())
    .pipe(gulp.dest('./dist/'));
});



gulp.task('watch', function() {
    StartbrowserSync();
    gulp.watch('./src/*.html', reload);
});


gulp.task('scripts', function() {
    return gulp.src('./src/css/**/*.css')
      .pipe(concat('all.css'))
      .pipe(gulp.dest('./dist/'));
  });
  
