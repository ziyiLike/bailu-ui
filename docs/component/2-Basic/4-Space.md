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

## Props

| Name | Description | Type                 | Default |
| ---- | ----------- | -------------------- | ------- |
| size | size        | `number` \| `string` | `5`     |

## Slots

| Name    | Description | Type | Subtags |
| ------- | ----------- | ---- | ------- |
| default | content     | any  | -       |
