declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    LuButton: typeof import("~/packages/Button").LuButton
  }
}

export { }