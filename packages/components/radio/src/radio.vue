<template>
  <div :class="classList">
    <input type="radio" />
    <span
      :class="[
        'lu-radio__mark',
        modelValue && 'lu-radio__mark-checked',
        props.disabled && 'lu-radio__mark-disabled',
        u(props, 'theme', 'lu-radio__mark'),
        u(props, 'size', 'lu-radio__mark-size')
      ]"
      @click="radioClick"
    />
    <span :class="['lu-radio__label', props.disabled && 'lu-radio__label-disabled']">
      <slot v-if="slot.default"></slot>
      <span v-else>{{ props.value }}</span>
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed, useSlots } from 'vue'
import { radioProps } from './radioProps'
import u from '../../../utils/useTheme'
import { useModel } from '../../../utils/useModel'

const props = defineProps(radioProps)

const slot = useSlots()

const modelValue = useModel(props, 'modelValue')

const classList = computed(() => {
  return ['lu-radio', u(props, 'theme', 'lu-radio'), u(props, 'size', 'lu-radio-size')]
})

const radioClick = () => {
  // 判断其是否被 radioGroup 包裹
}
</script>
