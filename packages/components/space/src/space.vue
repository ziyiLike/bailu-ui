<template>
  <div class="lu-space" :style="{ '--lu-space-item-margin': size }">
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
  return typeof props.size === 'string' ? props.size : `${props.size}px`
})
</script>
