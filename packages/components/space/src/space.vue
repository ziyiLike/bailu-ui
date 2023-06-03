<template>
  <div :class="classList" :style="{ '--lu-space-item-margin': size }">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { computed, useSlots } from 'vue'
import { spaceProps } from './spaceProps'

const props = defineProps(spaceProps)

const slot = useSlots()

const size = computed(() => {
  if (!props.size) return '5px'
  return typeof props.size === 'string'
    ? props.size.endsWith('px')
      ? props.size
      : `${props.size}px`
    : `${props.size}px`
})

const deraction = computed(() => {
  if (!props.direction) return 'lu-space-horizontal'
  return props.direction === 'vertical' ? 'lu-space-vertical' : 'lu-space-horizontal'
})

const classList = computed(() => {
  return [
    'lu-space',
    deraction.value,
    props.auto ? 'lu-space-auto' : 'lu-space-fixed',
    props.align && `lu-space-align-${props.align}`,
    props.wrap && `lu-space-${props.wrap}`
  ]
})
</script>
