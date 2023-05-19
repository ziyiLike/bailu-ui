import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: './packages/index.ts', // 打包路径
      name: 'BaiLuUI',
      fileName: (format) => `bailu-ui.${format}.js`
    },
    rollupOptions: {
      external: ["vue", "vue-tsc", "@vue/compiler-sfc"],
      output: {
        globals: {
          vue: "vue",
          "vue-tsc": "vue-tsc",
          "@vue/compiler-sfc": "@vue/compiler-sfc"
        }
      }
    },
    minify: 'terser', // Vite 2.6.x 以上需要配置 minify: "terser", terserOptions 才能生效
    terserOptions: { // 在打包代码时移除 console、debugger 和 注释
      compress: {
        /* (default: false) -- Pass true to discard calls to console.* functions.
          If you wish to drop a specific function call such as console.info and/or
          retain side effects from function arguments after dropping the function
          call then use pure_funcs instead
        */
        drop_console: true, // 生产环境时移除console
        drop_debugger: true
      },
      format: {
        comments: false // 删除注释comments
      }
    }
  }
})