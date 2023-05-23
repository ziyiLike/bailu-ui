<template>
  <i :class="iconName" :style="{ fontSize: iconSize, color: props.color }" />
</template>

<script setup lang="tsx">
import { computed } from 'vue';
import { iconProps } from './iconProp';

defineOptions({
  name: 'lu-icon'
})

const props = defineProps(iconProps())

const iconName = computed(() => {
  return 'coolicons-' + props.name
})

const iconSize = computed(() => {
  return typeof props.size === 'number' ? `${props.size}px` : props.size
})
</script>