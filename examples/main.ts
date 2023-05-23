import { createApp } from 'vue'
import App from './App.vue'

// 开发环境引入测试
import BaiLuUI from '../packages/index'

// 生产环境引入测试
// @ts-ignore
// import BaiLuUI from '../dist/bailu-ui.es.js'
// import '../dist/style.css'

createApp(App).use(BaiLuUI).mount('#app')