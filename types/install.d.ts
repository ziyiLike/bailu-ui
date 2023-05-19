import type { App } from '@vue/runtime-core'

export interface IBaiLuAPI {
  getFilePath: () => Promise<void>;
}

declare global {
  interface Window {
    Vue: App
  }
}
