import { PropType } from 'vue'

export const radioGroupProps = {
  modelValue: [String, Number, Boolean] as PropType<string | number | boolean>,
  // @zh: 是否为按钮样式
  // @en: Whether it is a button style
  button: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  // @zh: 是否禁用
  // @en: Whether to disable
  disabled: {
    type: Boolean as PropType<boolean>,
    default: false
  }
}
