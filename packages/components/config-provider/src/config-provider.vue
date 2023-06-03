<template>
  <slot />
</template>

<script setup lang="tsx">
import { computed, getCurrentInstance, provide, reactive, toRefs, useSlots } from 'vue'
import { configProviderProps } from './configProviderProps'
import { configProviderInjectKey } from '../context'
import { getLocale } from '../../locale'

const props = defineProps(configProviderProps())
const slots = useSlots()

const { locale } = toRefs(props)

const contextConfig = reactive({
  slots,
  locale: computed(() => {
    return locale?.value || getLocale()
  })
})

const instance = getCurrentInstance()

if (instance) {
  instance.appContext.app.provide(configProviderInjectKey, contextConfig)
} else {
  provide(configProviderInjectKey, contextConfig)
}
</script>
