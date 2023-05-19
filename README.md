<div align="center">
  <h1>白露UI</h1>
</div>

<div align="center">

A comprehensive Vue UI components library based on the [BaiLuUI](https://).

[![license](https://img.shields.io/badge/license-MIT-blue.svg)]()

</div>

<div align="center">

English | [简体中文](./README.zh-CN.md)

</div>

# Installation

Available as an [npm package](https://www.npmjs.com/package/bailu-ui)

```bash
// with npm
npm install bailu-ui

// with yarn
yarn add bailu-ui
```

# Examples

```typescript
import { createApp } from 'vue'
import BaiLuUI from 'bailu-ui';
import App from './App.vue';
import 'bailu-ui/css';

const app = createApp(App);
app.use(BaiLuUI);
app.mount('#app');
```