<script lang="tsx">
import { computed, defineComponent, h, VNode, watch } from 'vue'
import { radioProps } from './radioProps'
import { useModel } from '../../../utils/useModel'
import u from '../../../utils/useTheme'

export default defineComponent({
  name: 'lu-radio',
  props: radioProps,
  setup(props, { slots }) {
    const modelValue = useModel(props, 'modelValue')

    const classList = computed(() => {
      return ['lu-radio', u(props, 'theme', 'lu-radio'), u(props, 'size', 'lu-radio-size')]
    })

    const radioValue = computed(() => {
      return props.value === undefined ? true : props.value
    })

    const radioClick = () => {
      if (props.disabled) return
      if (props.__changeBindValue) {
        props.__changeBindValue(radioValue.value)
      } else {
        modelValue.value = radioValue.value
      }
    }

    const labelContent = slots.default ? slots.default() : h('span', {}, props.value)

    return () => (
      <div class={classList.value} onClick={radioClick}>
        <input type="radio" />
        <span
          class={[
            'lu-radio__mark',
            modelValue.value === radioValue.value && 'lu-radio__mark-checked',
            props.disabled && 'lu-radio__mark-disabled',
            u(props, 'theme', 'lu-radio__mark'),
            u(props, 'size', 'lu-radio__mark-size')
          ]}
        />
        <span
          class={[
            'lu-radio__label',
            props.disabled && 'lu-radio__label-disabled',
            modelValue.value === radioValue.value && 'lu-radio__label-checked'
          ]}
        >
          {labelContent}
        </span>
      </div>
    )
  }
})
</script>
