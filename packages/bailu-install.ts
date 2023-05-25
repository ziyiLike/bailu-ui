import LuButton from '../packages/components/button'
import LuConfigProvider from './components/config-provider';
import type { App, Plugin } from 'vue';
// 组件列表
const components: Plugin[] = [
  LuButton,
  LuConfigProvider
]

const install = (app: App) => {
  components.forEach((c) => app.use(c))
}

const BaiLu = {
  install,
  ...components
}

export default BaiLu