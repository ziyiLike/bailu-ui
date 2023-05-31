<template>
  <div class="row">
    <h2>白露 Button</h2>
  </div>

  <div class="row">
    <h3>Icon</h3>
  </div>
  <div class="row">
    <lu-button icon="Moon" @click="changTheme('light')">Light</lu-button>
    <lu-button icon="Sun" type="primary" @click="changTheme('dark')">Dark</lu-button>
  </div>
  <div class="row">
    <h3>Theme</h3>
  </div>
  <div class="row">
    <lu-button type="default">Default</lu-button>
    <lu-button type="primary">Primary</lu-button>
    <lu-button type="success">Success</lu-button>
    <lu-button type="warning">Warning</lu-button>
    <lu-button type="danger">Danger</lu-button>
  </div>
  <div class="row">
    <h3>Disabled</h3>
  </div>
  <div class="row">
    <lu-button disabled type="default">Default</lu-button>
    <lu-button disabled type="primary">Primary</lu-button>
    <lu-button disabled type="success">Success</lu-button>
    <lu-button disabled type="warning">Warning</lu-button>
    <lu-button disabled type="danger">Danger</lu-button>
  </div>

  <div class="row">
    <h3>Plain</h3>
  </div>
  <div class="row">
    <lu-button plain type="default">Default</lu-button>
    <lu-button plain type="primary">Primary</lu-button>
    <lu-button plain type="success">Success</lu-button>
    <lu-button plain type="warning">Warning</lu-button>
    <lu-button plain type="danger">Danger</lu-button>
  </div>

  <div class="row">
    <h3> Size</h3>
  </div>
  <div class="row center">
    <lu-button size="mini" type="primary">Mini</lu-button>
    <lu-button size="small" type="primary">Small</lu-button>
    <lu-button type="primary">Default</lu-button>
    <lu-button size="large" type="primary">Large</lu-button>
  </div>

  <div class="row">
    <h3> Shape</h3>
  </div>
  <div class="row center">
    <lu-button shape="default" type="primary">Default</lu-button>
    <lu-button shape="round" type="primary">Round</lu-button>
    <lu-button type="primary" icon-size="15px" icon="TrashEmpty"></lu-button>
    <lu-button shape="circle" type="primary" icon-size="15px" icon="SearchMagnifyingGlass"></lu-button>
  </div>

  <div class="row">
    <h3> Loading </h3>
  </div>
  <div class="row center">
    <lu-button shape="default" loading>Default</lu-button>
    <lu-button type="primary" loading icon-size="15px" icon="TrashEmpty">删除</lu-button>
    <lu-button shape="circle" loading type="primary" icon-size="15px" icon="SearchMagnifyingGlass"></lu-button>
  </div>
</template>

<script lang="tsx" setup>
import enUs from '../packages/components/locale/lang/en-us'


const changTheme = (theme: string) => {
  if (theme === 'light') {
    // 移除html 的class dark
    document.documentElement.classList.remove('dark')
  } else {
    // 给html 添加class dark
    document.documentElement.classList.add('dark')
  }
}

</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}

html[class="dark"] {
  background-color: #17171A;
  color: #FFFFFFE6;
}

h2 {
  width: 100vw;
  text-align: center;
  position: relative;

  &::after {
    content: '';
    height: 1px;
    width: 100vw;
    background-color: #0000001A;
    display: block;
    position: absolute;
    bottom: -10px;
    left: 0;
  }
}

.row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.center {
  align-items: center;
  justify-content: center;
}

.end {
  align-items: flex-end;
  justify-content: flex-end;
}

#app {
  max-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
