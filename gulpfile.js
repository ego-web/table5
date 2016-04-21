var gulp = require("gulp"),
browserSync = require('browser-sync')
 
gulp.task('server', function () {
  browserSync({
    port: 8080,
    server: {
      baseDir: 'app'
    }
  });

  // browserSync({
  //   proxy: "bootstrap3_wsq/app"
  // });

});


gulp.task('watch', function(){
  // gulp.watch('src/**/*.less', ['less']);
  gulp.watch([
    'app/**/*.html',
    'app/css/**/*.css',
    'app/user_photo/**/*.json',
    'app/js/**/*.js'
    ]).on('change', browserSync.reload);
})
gulp.task('default', [ 'server', 'watch' ]);
