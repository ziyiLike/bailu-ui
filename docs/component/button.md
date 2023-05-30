# Button

This is a button component

## Basic Usage

:::demo You can set `primary` 、 `success`、 `warning`、 `danger` 、`default` type for button.

```vue
<template>
  <div>
   <lu-button type="default">Default</lu-button>
    <lu-button type="primary">Primary</lu-button>
    <lu-button type="success">Success</lu-button>
    <lu-button type="warning">Warning</lu-button>
    <lu-button type="danger">Danger</lu-button>
  </div>
</template>
```

:::

## Disabled State

:::demo You can set `disabled` state for button.

```vue
<template>
  <div>
    <lu-button disabled>Default</lu-button>
    <lu-button type="primary" disabled>Primary</lu-button>
    <lu-button type="success" disabled>Success</lu-button>
    <lu-button type="warning" disabled>Warning</lu-button>
    <lu-button type="danger" disabled>Danger</lu-button>
  </div>
</template>
```
:::


## Plain Style

:::demo You can set `plain` style for button.

```vue
<template>
  <div>
    <lu-button plain>Default</lu-button>
    <lu-button type="primary" plain>Primary</lu-button>
    <lu-button type="success" plain>Success</lu-button>
    <lu-button type="warning" plain>Warning</lu-button>
    <lu-button type="danger" plain>Danger</lu-button>
  </div>
</template>
```
:::

## Button Size

:::demo You can set `mini` 、 `small`、 `default` 、`large` size for button.

```vue
<template>
  <div>
    <lu-button size="mini" type="primary">Mini</lu-button>
    <lu-button size="small" type="primary">Small</lu-button>
    <lu-button type="primary">Default</lu-button>
    <lu-button size="large" type="primary">Large</lu-button>
  </div>
</template>
```
:::

## Button Shape

:::demo You can set `default` 、 `circle`、 `round` shape for button.

```vue
<template>
  <div>
    <lu-button shape="default" type="primary">Default</lu-button>
    <lu-button shape="round" type="primary">Round</lu-button>
    <lu-button type="primary" icon-size="15px" icon="TrashEmpty"></lu-button>
    <lu-button shape="circle" type="primary" icon-size="15px" icon="SearchMagnifyingGlass"></lu-button>
  </div>
</template>
```
:::

## Icon Button

:::demo You can set `icon` for button.

```vue
<template>
  <div>
    <lu-button type="primary" icon-size="15px" icon="SearchMagnifyingGlass"></lu-button>
    <lu-button type="primary" icon-size="15px" icon="EditPencil01"></lu-button>
    <lu-button type="primary" icon-size="15px" icon="ShareAndroid"></lu-button>
     <lu-button type="primary" icon-size="15px" icon="TrashEmpty">删除</lu-button>
  </div>
</template>
```
:::


## Loading State

:::demo You can set `loading` state for button.

```vue
<template>
  <div>
    <lu-button loading>Default</lu-button>
    <lu-button type="primary" loading>Primary</lu-button>
    <lu-button type="success" loading>Success</lu-button>
    <lu-button shape="circle" loading type="primary" icon-size="15px" icon="SearchMagnifyingGlass"></lu-button>
  </div>
</template>
```
:::


## Props

| Name | Description | Type | Default |
|----- |------------ |----- | ------- |
| type | button type | 'primary' \| 'success' \| 'warning' \| 'danger' \| 'default' | default |
| size | button size | 'mini' \| 'small' \| 'default' \| 'large' | default |
| shape | button shape | 'default' \| 'circle' \| 'round' | default | 
| plain | plain style | boolean | false |
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
| default | button content | any | - |
| loading | loading content | any | - |
| icon | icon content | any | - |

<!-- ## Directives

| Name | Description | Type |
| ---- | ----------- | ---- |
| v-loading | show animation while loading data | boolean | -->
