import LuButton from "./src/index.vue"
import type { App } from '@vue/runtime-core'

const install = (app: App) => {
  app.component('lu-button', LuButton)
}

export { LuButton }

export default {
  install
}

