<template>
  <button
    :class="[
      'lu-button',
      u(props, 'theme', 'lu-button'),
      u(props, 'size', 'lu-button-size'),
      u(props, 'shape', 'lu-button-shape'),
      cssPlain,
      cssCirCle
    ]"
    :disabled="isDisabled || isLoading"
    type="button"
  >
    <slot v-if="isLoading" name="loading">
      <LuIcon class="lu-button-loading" name="MoreGridSmall" size="24px"></LuIcon>
    </slot>
    <slot v-else name="icon">
      <LuIcon v-if="props.icon" :name="props.icon" :color="props.iconColor" :size="props.iconSize"></LuIcon>
    </slot>
    <div v-if="slot.default" :style="{ marginLeft: hasIcon ? '5px' : 'none' }">
      <slot></slot>
    </div>
  </button>
</template>

<script lang="ts" setup>
import { computed, useSlots } from 'vue'
import LuIcon from '../../icon'
import { buttonProps } from './buttonProps'
import u from '../../../utils/useTheme'

const slot = useSlots()

const props = defineProps(buttonProps())

const isDisabled = computed(() => !!props.disabled)

const _typePrefix = u(props, 'theme', 'lu-button').split('-').slice(-1)[0]

const isLoading = computed(() => !!props.loading)

const cssCirCle = computed(() => (props.shape === 'circle' ? 'lu-button-circle' : ''))

const hasIcon = computed(() => {
  if (!slot.default) {
    return false
  }
  return !!props.icon || !!slot.icon
})

const cssPlain = computed(() => {
  return props.plain ? 'lu-button-plain' + '-' + _typePrefix : ''
})
</script>

<style lang="scss">
.bailu-ui-ad {
  content: 'bailu-ui';
}
</style>
