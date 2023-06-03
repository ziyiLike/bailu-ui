<script lang="tsx">
import { useSlots, defineComponent } from 'vue'
import { useModel } from '../../../utils/useModel'
import { radioGroupProps } from './radioGroupProps'

// 给 slot 中的 radio 组件添加 modelValue

export default defineComponent({
  name: 'lu-radio-group',
  props: radioGroupProps,
  setup(props, cxt) {
    const modelValue = useModel(props, 'modelValue')

    return () => {
      return <div class="lu-radio-group">{cxt.slots.default?.()}</div>
    }
  }
})
</script>
