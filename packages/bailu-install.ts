import LuButton from '../packages/Button/index'
import type { App, Plugin } from 'vue';
// 组件列表
const components: Plugin[] = [
  LuButton
]

const install = (app: App) => {
  components.forEach((c) => app.use(c))
}

const BaiLu = {
  install,
  ...components
}

export default BaiLu