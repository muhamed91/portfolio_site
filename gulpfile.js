const gulp = require('gulp');
var browserSync = require('browser-sync').create();


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

gulp.task('watch', function() {
    StartbrowserSync();
    gulp.watch('./src/*.html', reload);
});


