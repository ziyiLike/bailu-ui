import type { App } from '@vue/runtime-core'

export interface IBaiLuUI {
  getFilePath: () => Promise<void>;
}

declare global {
  interface Window {
    Vue: App
  }
}
