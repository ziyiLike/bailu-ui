import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import vueJsx from "@vitejs/plugin-vue-jsx";

export default defineConfig({
  define: {
    __VERSION__: JSON.stringify(process.env.npm_package_version)
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./packages/styles/scss/coolicons.scss";`
      }
    }
  },
  plugins: [
    vue(),
    vueJsx(),
    dts({
      entryRoot: './packages',
      insertTypesEntry: true,
      outputDir: './dist/typings'
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
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      },
      format: {
        comments: false
      }
    }
  }
})