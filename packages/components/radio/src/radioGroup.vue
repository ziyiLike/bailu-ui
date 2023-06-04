<script lang="tsx">
import { defineComponent, reactive, watch } from 'vue'
import { useModel } from '../../../utils/useModel'
import { radioGroupProps } from './radioGroupProps'

export default defineComponent({
  name: 'lu-radio-group',
  props: radioGroupProps,
  setup(props, cxt) {
    const modelValue = useModel(props, 'modelValue')

    const childSlots = cxt.slots.default?.().map(vnode => {
      // @ts-ignore
      if (vnode.type.name === 'lu-radio') {
        return {
          ...vnode,
          props: reactive({
            ...vnode.props,
            modelValue: modelValue.value,
            __changeBindValue: value => (modelValue.value = value)
          })
        }
      }

      return vnode
    })

    watch(
      () => modelValue.value,
      val => {
        childSlots?.map(vnode => {
          // @ts-ignore
          if (vnode.type.name === 'lu-radio') {
            // 兼容组件和普通节点
            vnode.props && (vnode.props.modelValue = val)
            vnode.component?.props && (vnode.component.props.modelValue = val)
          }
        })
      }
    )

    return () => {
      return <div class="lu-radio-group">{childSlots}</div>
    }
  }
})
</script>
