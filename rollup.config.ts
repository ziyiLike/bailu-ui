/**
 * Rollup configuration for building the i18n files
 */
import typescript from "@rollup/plugin-typescript";
import commonjs from "rollup-plugin-commonjs";
import fs from 'fs';
import path from 'path';
import { localePath } from './build/paths';

export default {
  input: fs.readdirSync(localePath).map((file) => {
    return path.resolve(localePath, file);
  }),
  output: [
    {
      dir: 'dist/locale/es',
      format: 'es',
    },
    {
      dir: 'dist/locale/cjs',
      format: 'cjs',
    }
  ],
  plugins: [
    typescript(),
    commonjs()
  ]
}