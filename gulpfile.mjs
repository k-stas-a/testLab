import gulp from 'gulp'
import browserSync from 'browser-sync'
import * as dartSass from 'sass'
import gulpSass from 'gulp-sass'
import autoprefixer from 'gulp-autoprefixer';
const sass = gulpSass(dartSass)

const sassToCSS = async () => {
    return gulp.src('app/scss/*.scss')
        .pipe(autoprefixer())
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('public/css'))
}

const server = async () => {
    const browser = browserSync.create()
    browser.init({
        server: 'public'
    })
    browser.watch('public/**/*').on('change', browser.reload)
}

const watchFiles = async () => {
    gulp.watch('app/scss/*.scss', gulp.series(sassToCSS))
}

const build = gulp.parallel(watchFiles, server)

export {
    sassToCSS,
    server,
    build as default
}