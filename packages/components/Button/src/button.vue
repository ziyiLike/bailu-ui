<template>
  <button :class="['lu-btn', 'lu-btn-' + (props.type || 'primary'), 'lu-btn-disabled']">
    <LuIcon style="margin-right: 5px;" :name="props.icon" :color="props.iconColor" :size="props.iconSize"></LuIcon>
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
import LuIcon from '../../icon'
import { buttonProps } from './buttonProps'

defineOptions({
  name: 'lu-button'
})

const props = defineProps(buttonProps())
</script>

<style lang="scss">
.bailu-ui-ad {
  content: 'bailu-ui';
}
</style>