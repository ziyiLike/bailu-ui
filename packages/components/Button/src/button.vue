<template>
  <div :class="['lu-button', 'lu-btn-' + props.type]">
    <LuIcon :name="props.icon" :color="props.iconColor" :size="props.iconSize"></LuIcon>
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import LuIcon from '../../Icon'
import { buttonProps } from './buttonProps'

defineOptions({
  name: 'lu-button'
})

const props = defineProps(buttonProps())
</script>

<style lang="scss"></style>
