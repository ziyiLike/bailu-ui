# Link

The basic style of the link.

## Basic Usage

:::demo You can set `primary` 、 `success`、 `warning`、 `danger` 、`default` type for link.

```vue
<template>
  <div>
    <lu-link href="/component/2-Basic/3-Link.html" target="_blank" type="default">Default</lu-link>
    <lu-link href="/component/2-Basic/3-Link.html" target="_blank" type="primary">Primary</lu-link>
    <lu-link href="/component/2-Basic/3-Link.html" target="_blank" type="success">Success</lu-link>
    <lu-link href="/component/2-Basic/3-Link.html" target="_blank" type="warning">Warning</lu-link>
    <lu-link href="/component/2-Basic/3-Link.html" target="_blank" type="danger">Danger</lu-link>
  </div>
</template>
```

:::

## Disabled State

:::demo You can set `disabled` state for link.

```vue
<template>
  <div>
    <lu-link href="/component/2-Basic/3-Link.html" target="_blank" disabled>Default</lu-link>
    <lu-link href="/component/2-Basic/3-Link.html" target="_blank" type="primary" disabled>Primary</lu-link>
    <lu-link href="/component/2-Basic/3-Link.html" target="_blank" type="success" disabled>Success</lu-link>
    <lu-link href="/component/2-Basic/3-Link.html" target="_blank" type="warning" disabled>Warning</lu-link>
    <lu-link href="/component/2-Basic/3-Link.html" target="_blank" type="danger" disabled>Danger</lu-link>
  </div>
</template>
```

:::

## Icon link

:::demo You can set `icon` for link.

```vue
<template>
  <div>
    <lu-link type="primary" icon-size="15px" icon="SearchGlass"></lu-link>
    <lu-link type="primary" icon-size="15px" icon="EditPencil01"></lu-link>
    <lu-link type="primary" icon-size="15px" icon="ShareAndroid"></lu-link>
    <lu-link type="primary" icon-size="15px" icon="TrashEmpty">删除</lu-link>
  </div>
</template>
```

:::

## Loading State

:::demo You can set `loading` state for link.

```vue
<template>
  <div class="vcenter">
    <lu-link loading>Default</lu-link>
    <lu-link type="primary" loading>Primary</lu-link>
    <lu-link type="success" loading>Success</lu-link>
    <lu-link loading type="primary" icon-size="15px" icon="SearchGlass"></lu-link>
    <lu-link :loading="loading" @click="loadingClick" icon="AddPlus" type="primary">Click Me</lu-link>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const loading = ref<boolean>(false)

const loadingClick = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 2000)
}
</script>
```

:::

## Props

| Name      | Description    | Type                                                         | Default |
| --------- | -------------- | ------------------------------------------------------------ | ------- |
| type      | link type      | 'primary' \| 'success' \| 'warning' \| 'danger' \| 'default' | default |
| href      | link href      | string                                                       | -       |
| target    | link target    | string                                                       | -       |
| disabled  | disabled state | boolean                                                      | false   |
| loading   | loading state  | boolean                                                      | false   |
| icon      | icon name      | string                                                       | -       |
| iconColor | icon color     | string                                                       | -       |
| iconSize  | icon size      | string                                                       | -       |

## Events

| Name  | Description                       |
| ----- | --------------------------------- |
| click | emitted when the link is clicked. |

## Slots

| Name    | Description     | Type | Subtags |
| ------- | --------------- | ---- | ------- |
| default | link content    | any  | -       |
| loading | loading content | any  | -       |
| icon    | icon content    | any  | -       |
