<template>
  <a :class="[
    'lu-link',
    u(props, 'theme', 'lu-link'),
    u(props, 'size', 'lu-link-size'),
    u(props, 'disabled', 'lu-link'),
    u(props, 'loading', 'lu-link'),
  ]" :disabled="isDisabled || isLoading" href="https://www.baidu.com">
    <slot v-if="isLoading" name="loading">
      <LuIcon class="lu-link-loading" name="MoreGridSmall" size="24px"></LuIcon>
    </slot>
    <slot v-else name="icon">
      <LuIcon v-if="props.icon" :name="props.icon" :color="props.iconColor" :size="props.iconSize"></LuIcon>
    </slot>
    <div v-if="slot.default" :style="{ marginLeft: hasIcon ? '5px' : 'none' }">
      <slot></slot>
    </div>
  </a>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import LuIcon from '../../icon'
import { linkProps } from './linkProps'
import u from '../../../../utils/useTheme'

defineOptions({ name: 'lu-link' })

const slot = defineSlots()

const props = defineProps(linkProps())

const isDisabled = computed(() => !!props.disabled)

const isLoading = computed(() => !!props.loading)

const hasIcon = computed(() => {
  if (!slot.default) {
    return false
  }
  return !!props.icon || !!slot.icon
})

</script>

<style lang="scss">
.bailu-ui-ad {
  content: 'bailu-ui';
}
</style>