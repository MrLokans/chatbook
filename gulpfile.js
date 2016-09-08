var gulp = require('gulp');
var less = require('gulp-less');
var watch = require('gulp-watch');

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('less', function(){
    return gulp.src('style.less')
               .pipe(less())
               .pipe(gulp.dest('css'));
});

gulp.task('watch', function(){
    gulp.watch('style.less', ['less']);
});