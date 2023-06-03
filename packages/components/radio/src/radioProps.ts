import { PropType } from 'vue'

export const radioProps = {
  // zh : 单选框的尺寸
  // en : The size of radio
  size: String as PropType<'mini' | 'small' | 'default' | 'large'>,
  // zh : 是否禁用
  // en : Whether radio is disabled
  disabled: Boolean,
  // zh : 是否选中
  // en : Whether radio is selected
  modelValue: Boolean,
  // zh : 选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用
  // en : The value of radio when checked
  value: [String, Number, Boolean] as PropType<string | number | boolean>
}
