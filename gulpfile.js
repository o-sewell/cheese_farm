const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const useref = require('gulp-useref');
const uglify = require('gulp-uglify');
const gulpIf = require('gulp-if');
const cssnano = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const cache = require('gulp-cache');
const del = require('del');
const runSequence = require('run-sequence');
const autoprefixer = require('gulp-autoprefixer');







gulp.task('sass', function() {
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('browserSync', function() {
    browserSync.init({
      server: {
        baseDir: 'app'
      },
    })
});

gulp.task('watch', ['browserSync', 'sass'], function(){
    gulp.watch('app/scss/**/*.scss', ['sass']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
})

gulp.task('useref', function(){
    return gulp.src('app/*.html')
      .pipe(useref())
      .pipe(gulpIf('*.js', uglify()))
      /*.pipe(gulpIf('*.css', cssnano()))*/
      .pipe(gulp.dest('dist'))
  });

  gulp.task('autoprefixer' , function() {
	return gulp.src('app/*/**.css')
	.pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
	.pipe(gulp.dest('dist'))
});


gulp.task('images', function(){
    return gulp.src('app/images/**/*.+(png|jpg|jpeg|gif|svg)')
    // Caching images that ran through imagemin
    .pipe(cache(imagemin()))
    .pipe(gulp.dest('dist/images'))
  });

  gulp.task('fonts', function() {
    return gulp.src('app/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'))
  })

  gulp.task('clean:dist', function() {
    return del.sync('dist');
  })


gulp.task('build', function(callback) {
    runSequence(
      'clean:dist',
      'sass',
      ['useref', 'autoprefixer', 'images', 'fonts'],
      callback
    )
});