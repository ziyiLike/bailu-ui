# Link

The basic style of the link.

## Basic Usage

:::demo You can set `primary` 、 `success`、 `warning`、 `danger` 、`default` type for link.

```vue
<template>
  <div>
   <lu-link type="default">Default</lu-link>
    <lu-link type="primary">Primary</lu-link>
    <lu-link type="success">Success</lu-link>
    <lu-link type="warning">Warning</lu-link>
    <lu-link type="danger">Danger</lu-link>
  </div>
</template>
```

:::


## Disabled State

:::demo You can set `disabled` state for link.

```vue
<template>
  <div>
    <lu-link disabled>Default</lu-link>
    <lu-link type="primary" disabled>Primary</lu-link>
    <lu-link type="success" disabled>Success</lu-link>
    <lu-link type="warning" disabled>Warning</lu-link>
    <lu-link type="danger" disabled>Danger</lu-link>
  </div>
</template>
```
:::


## link Size

:::demo You can set `mini` 、 `small`、 `default` 、`large` size for link.

```vue
<template>
  <div>
    <lu-link size="mini" type="primary">Mini</lu-link>
    <lu-link size="small" type="primary">Small</lu-link>
    <lu-link type="primary">Default</lu-link>
    <lu-link size="large" type="primary">Large</lu-link>
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
  <div>
    <lu-link loading>Default</lu-link>
    <lu-link type="primary" loading>Primary</lu-link>
    <lu-link type="success" loading>Success</lu-link>
    <lu-link shape="circle" loading type="primary" icon-size="15px" icon="SearchGlass"></lu-link>
  </div>
</template>
```
:::


## Props

| Name | Description | Type | Default |
|----- |------------ |----- | ------- |
| type | link type | 'primary' \| 'success' \| 'warning' \| 'danger' \| 'default' | default |
| size | link size | 'mini' \| 'small' \| 'default' \| 'large' | default |
| disabled | disabled state | boolean | false |
| loading | loading state | boolean | false |
| icon | icon name | string | - |
| iconColor | icon color | string | - |
| iconSize | icon size | string | - |



<!-- ## Events

| Name | Description |
|----- | ----------- |
| change | triggers when fixed state changed | -->

## Slots

| Name | Description | Type | Subtags |
| ---- | ----------- | ---- | ------- |
| default | link content | any | - |
| loading | loading content | any | - |
| icon | icon content | any | - |

<!-- ## Directives

| Name | Description | Type |
| ---- | ----------- | ---- |
| v-loading | show animation while loading data | boolean | -->
