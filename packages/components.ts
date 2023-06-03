declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    LuButton: typeof import('./index')['LuButton']
    LuIcon: typeof import('./index')['LuIcon']
    LuConfigProvider: typeof import('./index')['LuConfigProvider']
    LuLink: typeof import('./index')['LuLink']
    LuSpace: typeof import('./index')['LuSpace']
    LuRadio: typeof import('./index')['LuRadio']
    LuRadioGroup: typeof import('./index')['LuRadioGroup']
  }
}

export {}
