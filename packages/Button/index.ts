import LuButton from "./src/index.vue"
import type { App } from '@vue/runtime-core'

LuButton.install = (app: App) => {
  app.component(LuButton.name, LuButton)
}

export default LuButton

