# Grid

Grid is a layout component that allows you to separate content in a consistent way.

## Basic Usage

Basic 24 parts grid layout with 5px spacing between columns

:::demo You can use the `lu-Grid` component to separate content in a consistent way.

```vue
<template>
  <lu-row>
    <lu-col :span="12">
      <div>col-12</div>
    </lu-col>
    <lu-col :span="12">
      <div>col-12</div>
    </lu-col>
  </lu-row>
</template>

<style lang="scss" scoped>
.lu-row {
  background-color: #f5f5f5;
  padding: 5px;
}
</style>
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
