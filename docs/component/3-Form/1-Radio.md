# Radio

The radio component is used to select one option from multiple options.

## Basic Usage

:::demo You can use the `align` property to set the `align` of the space.

```vue
<template>
  <div>
    <lu-radio v-model="checked">Start</lu-radio>
    <lu-radio disabled value="End"></lu-radio>
    <lu-radio modelValue="Default Checked" value="Default Checked"></lu-radio>
    <lu-radio :modelValue="true">Default Click</lu-radio>
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
  <div>Disabled:</div>
  <lu-radio-group button v-model="disabled">
    <lu-radio :value="true"></lu-radio>
    <lu-radio :value="false"></lu-radio>
  </lu-radio-group>

  <div class="vp-mt-5">The bind value is: {{ checked }}</div>
  <lu-radio-group :disabled="disabled" v-model="checked">
    <lu-radio value="A">Option A</lu-radio>
    <lu-radio disabled value="B">Option B</lu-radio>
    <lu-radio value="C">Option C</lu-radio>
  </lu-radio-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const disabled = ref<boolean>(true)

const checked = ref<string>('A')
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
