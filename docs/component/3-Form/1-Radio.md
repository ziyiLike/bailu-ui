# Radio

The radio component is used to select one option from multiple options.

## Basic Usage

:::demo You can use the `align` property to set the `align` of the space.

```vue
<template>
  <div>
    <lu-radio v-model="checked">Start</lu-radio>
    <lu-radio disabled value="End"></lu-radio>
    <lu-radio :modelValue="true" value="Default Checked"></lu-radio>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const checked = ref<boolean>(false)
</script>
```

:::

## Radio Size

:::demo You can use the `size` property to set the `size` of the radio.

```vue
<template>
  <lu-space direction="vertical">
    <lu-radio v-model="checked" size="mini">Mini</lu-radio>
    <lu-radio v-model="checked" size="small">Small</lu-radio>
    <lu-radio v-model="checked">Default</lu-radio>
    <lu-radio v-model="checked" size="large">Large</lu-radio>
  </lu-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const checked = ref<boolean>(true)
</script>
```

:::

## Radio Group

:::demo You can use the `lu-radio-group` component to group radios.

```vue
<template>
  <lu-radio-group v-model="checked">
    <lu-radio value="Option A">Option A</lu-radio>
    <lu-radio value="Option B">Option B</lu-radio>
    <lu-radio value="Option C">Option C</lu-radio>
  </lu-radio-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const checked = ref<string>('Option A')
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
