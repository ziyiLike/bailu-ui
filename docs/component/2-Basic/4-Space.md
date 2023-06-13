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
    <lu-radio-group button v-model="align">
      <lu-radio value="start"></lu-radio>
      <lu-radio value="end"></lu-radio>
      <lu-radio value="center"></lu-radio>
      <lu-radio value="baseline"></lu-radio>
    </lu-radio-group>

    <lu-space class="vp-mt-5" :align="align">
      <lu-button size="mini" type="primary"> button1 </lu-button>
      <lu-button size="small" type="primary"> button2 </lu-button>
      <lu-button size="large" type="primary"> button3 </lu-button>
      <lu-radio value="start"></lu-radio>

      <lu-space direction="vertical">
        <lu-button type="primary"> button1 </lu-button>
        <lu-button type="primary"> button2 </lu-button>
      </lu-space>
    </lu-space>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const align = ref('')
</script>
```

:::

## Space Wrap

:::demo You can use the `wrap` property to set the `wrap` of the space, or use `size` property to set the `wrap` of the space.

```vue
<template>
  <div>
    <lu-radio-group button v-model="wrap">
      <lu-radio v-for="item in wrapList" :key="item" :value="item"></lu-radio>
    </lu-radio-group>

    <lu-space class="vp-mt-5" :wrap="wrap">
      <lu-button v-for="i in 10" type="primary"> button{{ i }} </lu-button>
    </lu-space>

    <lu-space class="vp-mt-5" :wrap="wrap" size="10px">
      <lu-button v-for="i in 10" type="primary"> button{{ i }} </lu-button>
    </lu-space>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const wrapList = ['nowrap', 'wrap', 'wrap-reverse']
const wrap = ref('')
</script>
```

:::

## Space Separator

:::demo You can use the `separator` property to set the `separator` of the space.

```vue
<template>
  <div>
    <lu-radio-group button v-model="separator">
      <lu-radio value="|"></lu-radio>
      <lu-radio value=">"></lu-radio>
      <lu-radio value="-"></lu-radio>
      <lu-radio value="*"></lu-radio>
      <lu-radio value="&"></lu-radio>
    </lu-radio-group>

    <lu-space class="vp-mt-5" :separator="separator">
      <lu-button v-for="i in 5" type="primary"> button{{ i }} </lu-button>
    </lu-space>

    <lu-space class="vp-mt-5" :separator="separatorDemo">
      <lu-button v-for="i in 5" type="primary"> button{{ i }} </lu-button>
    </lu-space>

    <lu-space class="vp-mt-5">
      <template #separatorSlot>
        <lu-icon name="LineL"></lu-icon>
      </template>
      <lu-button v-for="i in 5" type="primary"> button{{ i }} </lu-button>
    </lu-space>
  </div>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'

const separator = ref('|')

const separatorDemo = h('span', { class: 'text-red' }, ':')
// And you can use the Tsx syntax
// const separatorDemo = () => <span class="text-red">:</span>
</script>

<style scoped>
.text-red {
  color: red;
}
</style>
```

:::

## Props

| Name      | Description | Type                                       | Default    |
| --------- | ----------- | ------------------------------------------ | ---------- |
| size      | size        | number \| string                           | 5px        |
| wrap      | wrap        | `nowrap` \| `wrap` \| `wrap-reverse`       | nowrap     |
| align     | align       | `start` \| `end` \| `center` \| `baseline` | center     |
| direction | direction   | `horizontal` \| `vertical`                 | horizontal |
| auto      | auto        | boolean                                    | false      |
| separator | separator   | string \| VNode                            | -          |

## Slots

| Name          | Description    | Type | Subtags |
| ------------- | -------------- | ---- | ------- |
| separatorSlot | separator slot | -    | -       |
