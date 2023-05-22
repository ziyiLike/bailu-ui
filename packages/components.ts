declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    LuButton: typeof import('./index')['LuButton']
  }
}

export { }