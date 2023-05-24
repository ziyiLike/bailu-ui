import { resolve } from "path";

//组件库根目录
export const packagePath = resolve(__dirname, "../packages/");

//项目根目录
export const rootPath = resolve(__dirname, "../");

// 构建目录
export const buildPath = resolve(rootPath, "./dist");
