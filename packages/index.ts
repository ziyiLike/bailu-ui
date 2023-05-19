import LuButton from '../packages/Button'
import type { App } from '@vue/runtime-core'
// 组件列表
const components = [
  LuButton
]

const install = (app: App) => {

  components.forEach((c: any) => app.use(c))
}

export default {
  install,
  ...components
}

