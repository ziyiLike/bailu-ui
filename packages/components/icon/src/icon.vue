<template>
  <i :class="['lu-icon', iconName]" :style="{ fontSize: iconSize, color: props.color, width: iconSize, height: iconSize }" />
</template>

<script setup lang="tsx">
/**
 * Open source icon library: https://coolicons.cool/
 */
import { computed } from 'vue';
import { iconProps } from './iconProps';

defineOptions({
  name: 'lu-icon'
})

const props = defineProps(iconProps())

const iconName = computed(() => {
  return 'coolicons-' + props.name
})

const iconSize = computed(() => {
  let _size = typeof props.size === 'number' ? `${props.size}px` : props.size
  if (!_size) {
    _size = '18px'
  }
  return _size
})
</script>