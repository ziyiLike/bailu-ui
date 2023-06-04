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
            disabled: props.disabled || vnode.props?.disabled,
            modelValue: modelValue.value,
            __defaultDisabled: vnode.props?.disabled === '' ? true : !!vnode.props?.disabled,
            __changeBindValue: value => (modelValue.value = value)
          })
        }
      }

      return vnode
    })

    // bind modelValue
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

    // bind disabled
    watch(
      () => props.disabled,
      val => {
        childSlots?.map(vnode => {
          // @ts-ignore
          if (vnode.type.name === 'lu-radio') {
            // 兼容组件和普通节点
            vnode.props && !vnode.props.__defaultDisabled && (vnode.props.disabled = val)
            vnode.component?.props && !vnode.component.props.__defaultDisabled && (vnode.component.props.disabled = val)
          }

          return vnode
        })
      }
    )

    const classList = [props.button ? 'lu-radio-group-button' : 'lu-radio-group']

    return () => {
      return <div class={classList}>{childSlots}</div>
    }
  }
})
</script>
