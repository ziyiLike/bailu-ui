import type { Plugin } from 'vue';

type WithInstall<T> = T & Plugin

export default <T, E extends Record<string, any>>(
  main: T,
  extra?: E
) => {
  ; (main as WithInstall<T>).install = (app): void => {
    for (const comp of [main, ...Object.values(extra ?? {})]) {
      app.component(comp.name, comp)
    }
  }

  if (extra) {
    for (const [key, comp] of Object.entries(extra)) {
      ; (main as any)[key] = comp
    }
  }
  return main as WithInstall<T> & E
}
