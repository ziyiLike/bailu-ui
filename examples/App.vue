<template>
  <div class="row">
    <lu-button icon="Moon" @click="changTheme('light')">Light</lu-button>
    <lu-button icon="Sun" type="default" @click="changTheme('dark')">Dark</lu-button>
  </div>
  <div class="row">
    <h3>Button</h3>
  </div>
  <div class="row">
    <lu-button icon="CloseSM" type="default">Default</lu-button>
    <ButtonGroup />
  </div>
</template>

<script lang="tsx" setup>
import enUs from '../packages/components/locale/lang/en-us'

const ButtonGroup = <>
  <lu-config-provider locale={enUs}>
    <lu-button icon="CaretDownMD" type="primary">Primary</lu-button>
    <lu-button type="success">Success</lu-button>
    <lu-button type="warning">Warning</lu-button>
    <lu-button type="danger">Danger</lu-button>
    <lu-button type="text">Text</lu-button>
  </lu-config-provider>
</>

const changTheme = (theme: string) => {
  if (theme === 'light') {
    document.body.removeAttribute('bailu-theme');
  } else {
    document.body.setAttribute('bailu-theme', 'dark')
  }
}

</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}

body[bailu-theme="dark"] {
  background-color: #17171A;
  color: #FFFFFFE6;
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

#app {
  max-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
