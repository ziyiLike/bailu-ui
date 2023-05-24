<template>
  <div class="row">
    <h3>Button</h3>
  </div>
  <div class="row">
    <lu-button icon="CloseSM" type="default">Default</lu-button>
    <ButtonGroup />
  </div>
</template>

<script lang="tsx" setup>

const ButtonGroup = <>
  <lu-button icon="CaretDownMD" type="primary">Primary</lu-button>
  <lu-button type="success">Success</lu-button>
  <lu-button type="warning">Warning</lu-button>
  <lu-button type="danger">Danger</lu-button>
  <lu-button type="info">Info</lu-button>
  <lu-button type="text">Text</lu-button>
</>

</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
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
