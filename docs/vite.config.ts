//vite.config.ts
import { SearchPlugin } from "vitepress-plugin-search";
import { defineConfig } from "vite";
import flexSearchIndexOptions from "flexsearch";
//default options
var options = {
  ...flexSearchIndexOptions,
  previewLength: 100, //搜索结果预览长度
  buttonLabel: "Search",
  placeholder: "Please input search content",
};

export default defineConfig({
  plugins: [
    SearchPlugin(options)
  ],
});