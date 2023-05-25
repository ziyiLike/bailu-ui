declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    LuButton: typeof import('./index')['LuButton'],
    LuConfigProvider: typeof import('./index')['LuConfigProvider'],
  }
}

export { }