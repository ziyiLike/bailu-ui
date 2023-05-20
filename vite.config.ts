import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    vue(),
    dts({
      entryRoot: './packages',
      insertTypesEntry: true,
      outputDir: './dist/typings',
    })
  ],
  resolve: {
    alias: {
      '@': '/examples',
      '~': '/'
    },
  },
  build: {
    lib: {
      entry: './packages/index.ts', // 打包路径
      name: 'BaiLuUI',
      fileName: (format) => `bailu-ui.${format}.js`
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "vue"
        }
      }
    },
    minify: 'terser', // Vite 2.6.x 以上需要配置 minify: "terser", terserOptions 才能生效
    terserOptions: { // 在打包代码时移除 console、debugger 和 注释
      compress: {
        drop_console: true, // 生产环境时移除console
        drop_debugger: true
      },
      format: {
        comments: false // 删除注释comments
      }
    }
  }
})