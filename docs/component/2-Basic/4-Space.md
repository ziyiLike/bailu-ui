# Space

The space component is used to separate content in a consistent way. It can be used to separate content in a list, or to separate content in a form.

## Basic Usage

:::demo You can use the `lu-space` component to separate content in a consistent way.

```vue
<template>
  <lu-space>
    <lu-button type="primary"> button1 </lu-button>
    <lu-button type="primary"> button2 </lu-button>
    <lu-button type="primary"> button3 </lu-button>
  </lu-space>
</template>
```

:::

## Space Size

:::demo You can use the `size` property to set the size of the space.

```vue
<template>
  <div>
    <lu-space size="50">
      <lu-button type="primary"> button1 </lu-button>
      <lu-button type="primary"> button2 </lu-button>
      <lu-button type="primary"> button3 </lu-button>
    </lu-space>

    <lu-space size="10px" class="vp-mt-2">
      <lu-button type="primary"> button1 </lu-button>
      <lu-button type="primary"> button2 </lu-button>
      <lu-button type="primary"> button3 </lu-button>
    </lu-space>

    <lu-space :size="2" class="vp-mt-2">
      <lu-button type="primary"> button1 </lu-button>
      <lu-button type="primary"> button2 </lu-button>
      <lu-button type="primary"> button3 </lu-button>
    </lu-space>
  </div>
</template>
```

:::

## Space vertical

:::demo You can use the `direction` property to set the `vertical` of the space.

```vue
<template>
  <div>
    <lu-space direction="vertical">
      <lu-button type="primary"> button1 </lu-button>
      <lu-button type="primary"> button2 </lu-button>
      <lu-button type="primary"> button3 </lu-button>
    </lu-space>

    <lu-space direction="vertical" auto class="vp-mt-4">
      <lu-button type="primary"> button1 </lu-button>
      <lu-button type="primary"> button2 </lu-button>
      <lu-button type="primary"> button3 </lu-button>
    </lu-space>
  </div>
</template>
```

:::

## Space Align

:::demo You can use the `align` property to set the `align` of the space.

```vue
<template>
  <div>
    <lu-radio-group v-model="align">
      <lu-radio value="start">start</lu-radio>
      <lu-radio value="end">end</lu-radio>
      <lu-radio value="center">center</lu-radio>
    </lu-radio-group>

    <lu-space :align="align">
      <lu-button size="mini" type="primary"> button1 </lu-button>
      <lu-button size="small" type="primary"> button2 </lu-button>
      <lu-button size="large" type="primary"> button3 </lu-button>
    </lu-space>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const align = ref('start')
</script>
```

:::

## Props

| Name | Description | Type             | Default |
| ---- | ----------- | ---------------- | ------- |
| size | size        | number \| string | 5px     |

## Slots

| Name    | Description | Type | Subtags |
| ------- | ----------- | ---- | ------- |
| default | content     | any  | -       |
