import { LuButton } from "~/packages/Button"

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    LuButton: typeof LuButton
  }
}

export { }