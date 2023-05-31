<template>
  <slot />
</template>

<script setup lang="tsx">
import { Slots, computed, getCurrentInstance, provide, reactive, toRefs } from 'vue';
import { configProviderProps } from './configProviderProps'
import { configProviderInjectKey } from '../context';
import { getLocale } from '../../locale';

defineOptions({
  name: "lu-config-provider"
})

const props = defineProps(configProviderProps())
const slots = defineSlots()

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