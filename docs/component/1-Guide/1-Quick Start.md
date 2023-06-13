# Getting Started

Follow the steps below to get started with the **BaiLuUI** components.

---

### Vue Version

vue >= 3.2.0

**Note:** `Vue3` is not supported IE browser

| ![IE](https://cdn.jsdelivr.net/npm/@browser-logos/edge/edge_32x32.png) | ![Firefox](https://cdn.jsdelivr.net/npm/@browser-logos/firefox/firefox_32x32.png) | ![Chrome](https://cdn.jsdelivr.net/npm/@browser-logos/chrome/chrome_32x32.png) | ![Safari](https://cdn.jsdelivr.net/npm/@browser-logos/safari/safari_32x32.png) |
| ---------------------------------------------------------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| Edge ≥ 79                                                              | Firefox ≥ 78                                                                      | Chrome ≥ 64                                                                    | Safari ≥ 12                                                                    |

### Install

```bash
# npm
npm install bailu-ui
# yarn
yarn add bailu-ui
# pnpm
pnpm add bailu-ui
```

### Full Import

```ts
import { createApp } from 'vue'
import BaiLuUI from 'bailu-ui'
import 'bailu-ui/css'

const app = createApp(App)
app.use(BaiLuUI)
app.mount('#app')
```

### On Demand Import

You can also use manual import to load components on demand.

```vue
<script lang="ts" setup>
import { LuButton } from 'bailu-ui'
import 'bailu-ui/components/Button/style/LuButton.css'
</script>
<template>
  <div>
    <lu-button>Button</lu-button>
  </div>
</template>
```
