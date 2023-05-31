
<div align="center" style="background:#FFFFFF;height:300px">
  <image  src="http://81.68.222.165:9000/ziyi-like/LogoText.png?Content-Type=image/png"  width=365 height=300/>
</div> 

<div align="center">

A comprehensive Vue UI components library based on the BaiLuUI

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/ziyiLike/bailu-ui)
  
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