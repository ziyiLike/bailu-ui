import { PropType } from 'vue'

export const radioGroupProps = {
  modelValue: [String, Number, Boolean] as PropType<string | number | boolean>
}
