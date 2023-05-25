<template>
  <div :class="['lu-button', 'lu-btn-' + props.type]">
    <LuIcon :name="props.icon" :color="props.iconColor" :size="props.iconSize"></LuIcon>
    {{ t('empty.description') }}
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import LuIcon from '../../icon'
import { buttonProps } from './buttonProps'
import { useI18n } from '../../locale'

defineOptions({
  name: 'lu-button'
})

const props = defineProps(buttonProps())

const { t } = useI18n()
</script>
