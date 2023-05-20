<div align="center">
  <h1>白露UI</h1>
</div>

<div align="center">

A comprehensive Vue UI components library based on the [BaiLuUI](https://).

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/ziyiLike/bailu-ui)
  
</div>

<div align="center">

English | [简体中文](./README.zh-CN.md)

</div>

<div align="center">
  <image src="https://c2cpicdw.qpic.cn/offpic_new/1182900548//1182900548-2971149414-648A6C9ABDEA3797915A0EF4082E1C30/0?term=3&is_origin=0"  width=400 height=300/>
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