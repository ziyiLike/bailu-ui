/**
 * 实现 Vue的双向绑定
 * @param {Object} props
 * @param {String} key
 */

import { computed } from 'vue'
import { getCurrentInstance } from 'vue'

export function useModel<T>(props: T, key: keyof T) {
  const emit = getCurrentInstance()?.emit
  const modelValue = computed<T[keyof T]>({
    get() {
      return props[key]
    },
    set(val) {
      if (props[key] === val) return
      emit?.('update:modelValue', val)
    }
  })
  return modelValue
}
