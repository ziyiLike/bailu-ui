# Space

The space component is used to separate content in a consistent way. It can be used to separate content in a list, or to separate content in a form.

## Basic Usage

:::demo You can use the `size` property to set the spacing size.

```vue
<template>
  <lu-space :size="20">
    <lu-button type="primary"> button1 </lu-button>
    <lu-button type="primary"> button2 </lu-button>
    <lu-button type="primary"> button3 </lu-button>
  </lu-space>
</template>
```

:::

## Props

| Name | Description | Type                                                         | Default |
| ---- | ----------- | ------------------------------------------------------------ | ------- |
| type | button type | 'primary' \| 'success' \| 'warning' \| 'danger' \| 'default' | default |

## Slots

| Name    | Description | Type | Subtags |
| ------- | ----------- | ---- | ------- |
| default | content     | any  | -       |
