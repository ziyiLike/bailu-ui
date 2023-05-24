/**
 * Build Main Task
 * Run `pnpm dist` to execute build task
 */
import gulp from "gulp";
import autoprefixer from "gulp-autoprefixer";
import runCommand from "./run-cmd";
import { buildPath, packagePath, rootPath } from "./paths";

const sass = require('gulp-sass')(require('sass'));

// build on-demand loading style files
export const buildStyle = () => {
  return gulp.src(`${packagePath}/components/**/style/**.scss`)
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest(`${buildPath}/components`))
};

// build all style files
export const buildStyleAll = () => {
  return gulp.src(`${packagePath}/styles/scss/style.scss`)
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest(`${buildPath}`))
}

// build components
export const buildComponent = async () => {
  await runCommand("pnpm build", rootPath);
};


// build web-types.json, tags.json and attributes.json
export const buildPackageHelperJson = () => {
  runCommand("pnpm build:helper", rootPath);
}


// build run time 
export default gulp.series(
  gulp.parallel(
    async () => buildComponent().then(() => {
      buildPackageHelperJson()
      buildStyle()
      buildStyleAll()
    })
  )
);