import LuButton from '../packages/components/button'
import LuConfigProvider from './components/config-provider'
import LuIcon from './components/icon'
import LuLink from './components/link'
import LuSpace from './components/space'

import { LuRadio, LuRadioGroup } from './components/radio'
import type { App, Plugin } from 'vue'
// 组件列表
const components: Plugin[] = [LuButton, LuIcon, LuLink, LuSpace, LuRadio, LuRadioGroup, LuConfigProvider]

const install = (app: App) => {
  components.forEach(c => app.use(c))
}

const BaiLu = {
  install,
  ...components
}

export default BaiLu
