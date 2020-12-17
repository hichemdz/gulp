const gulp = require('gulp');
const pug = require('gulp-pug');
const postcss = require('gulp-postcss')
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const csso = require('gulp-csso');
const uglify = require('gulp-uglify');
const pipeline = require('readable-stream').pipeline;
const imagemin = require('gulp-imagemin');
const babel = require('gulp-babel');
const rename = require("gulp-rename");
// convert pug to html

gulp.task('html',()=>{
	return gulp.src('src/views/**/*.pug')
	            .pipe(pug({
			        	doctype: 'html',
		            pretty: true
			       }))
	            .pipe(gulp.dest('dist/views/'))
})


// convert file to laravel

gulp.task('laravel',()=>{
  return gulp.src('dist/views/**/*.html')
              .pipe(rename((path)=>{
                  path.extname = ".blade.php"
              }))
              .pipe(gulp.dest('/opt/lampp/htdocs/lv/masenger/resources/views/'))
})

gulp.task('public',()=>{
  return gulp.src('dist/**/*')
              .pipe(gulp.dest('/opt/lampp/htdocs/lv/masenger/public/'))
})

gulp.task('img',()=>{
	return gulp.src('src/img/**/*.*')
	          
	            .pipe(gulp.dest('dist/img/'))
})


// images

gulp.task('images',()=>{
  return gulp.src('src/img/*.*')
         .pipe(imagemin([
          imagemin.gifsicle({interlaced: true}),
          imagemin.optipng({optimizationLevel: 5}),
         ]))
         .pipe(gulp.dest('dist/img'))
})

// css

gulp.task('css', function () {

  return gulp.src('src/css/dev/style.css')
    // ...
    .pipe(postcss([
      // ...
      require('tailwindcss'),
      require('autoprefixer'),
      // ...
    ]))
    // ...
    .pipe(gulp.dest('src/css/prodection'))
})

gulp.task('styles', function() {
   return gulp.src(['src/css/prodection/*.*'])
          .pipe(sourcemaps.init())
          .pipe(csso())
          .pipe(concat('master.css')) 
          .pipe(sourcemaps.write())
   .pipe(gulp.dest('dist/css/'));
});




// javascript

gulp.task('js', function() {
	 return pipeline(
        gulp.src(['src/js/*.js']),
        sourcemaps.init(),
        babel({
            presets: ['@babel/env']
        }),
        //uglify(),
        concat('master.js') ,
        sourcemaps.write(),
        gulp.dest('dist/js')
  );
  
});



gulp.task('default' , ()=>{
    
    //gulp.watch('src/viwes/*/*.pug'.pug.series('html'))
    gulp.watch('src/views/**/*.pug',gulp.series('html'))
    gulp.watch('src/css/prodection/*.css',gulp.series('styles'))
    gulp.watch('src/css/dev/*.js',gulp.series('css'))
    gulp.watch('src/js/*.js',gulp.series('js'))
    gulp.watch('src/img/**/*.*',gulp.series('img'))

} );



// exports.default = function() {
//   return src(['src/*/*.js','src/*/*.css'])
//          .pipe(dest('dist'));
  
// }

