import LuButton from '../packages/Button'
import type { App, Plugin } from '@vue/runtime-core'
// 组件列表
const components: Plugin[] = [
  LuButton
]

const install = (app: App) => {
  components.forEach((c) => app.use(c))
}

export default {
  install,
  ...components
}