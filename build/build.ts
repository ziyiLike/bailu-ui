/**
 * Build Main Task
 * Run `pnpm dist` to execute build task
 */
import gulp from "gulp";
import autoprefixer from "gulp-autoprefixer";
import runCommand from "./run-cmd";
import { buildPath, packagePath, rootPath, localePath } from "./paths";
import fs from 'fs';

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

// build language package
export const buildLocale = () => {
  runCommand("pnpm build:lang", rootPath).then(() => {
    // copy zh-cn.d.ts to other language
    const files = fs.readdirSync(`${packagePath}/components/locale/lang`)
    files.forEach((file) => {
      const fileName = file.split('.')[0] + '.d.ts'
      fs.copyFileSync(`${buildPath}/typings/components/locale/lang/zh-cn.d.ts`, `${buildPath}/typings/components/locale/lang/${fileName}`)
    })

    // copy lang to locale 
    gulp.src(`${buildPath}/typings/components/locale/lang/*`)
      .pipe(gulp.dest(`${buildPath}/locale/es`))
      .pipe(gulp.dest(`${buildPath}/locale/cjs`))
  })
}

// build run time 
export default gulp.series(
  gulp.parallel(
    async () => buildComponent().then(() => {
      buildPackageHelperJson()
      buildStyle()
      buildStyleAll()
      buildLocale()
    })
  )
);