import { PropType } from 'vue'

export const radioProps = {
  // zh : 单选框的尺寸
  // en : The size of radio
  size: String as PropType<'mini' | 'small' | 'default' | 'large'>,
  // zh : 是否禁用
  // en : Whether radio is disabled
  disabled: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  // zh : 是否选中
  // en : Whether radio is selected
  modelValue: [Boolean, String, Number, Object],
  // zh : 选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用
  // en : The value of radio when checked
  value: {
    type: [String, Number, Boolean] as PropType<string | number | boolean>,
    default: undefined
  },
  // zh : 父级Group传值事件
  // en : Parent Group value
  __changeBindValue: Function as PropType<(value: string | number | boolean) => void>
}
