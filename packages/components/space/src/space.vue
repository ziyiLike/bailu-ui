<script lang="tsx">
import { VNode, computed, defineComponent } from 'vue'
import { spaceProps } from './spaceProps'
import { useFullVNode } from '../../../utils/useFullVNode'
import { h } from 'vue'

export default defineComponent({
  name: 'LuSpace',
  props: spaceProps,
  setup(props, { slots }) {
    const childSlots = computed(() => {
      const _slotsArray = useFullVNode(slots.default?.())
      if (!props.separator && !slots.separatorSlot) return _slotsArray
      const _slots = [] as VNode[]
      _slotsArray.forEach((vnode, index) => {
        _slots.push(vnode)
        if (index !== _slotsArray.length - 1) {
          if (slots.separatorSlot) {
            _slots.push(...(slots.separatorSlot?.() || []))
            return
          }
          _slots.push(h('div', {}, typeof props.separator === 'function' ? props.separator() : props.separator))
        }
      })
      return _slots
    })

    const size = computed(() => {
      if (!props.size) return '5px'
      return typeof props.size === 'string'
        ? props.size.endsWith('px')
          ? props.size
          : `${props.size}px`
        : `${props.size}px`
    })

    const deraction = computed(() => {
      if (!props.direction) return 'lu-space-horizontal'
      return props.direction === 'vertical' ? 'lu-space-vertical' : 'lu-space-horizontal'
    })
    const align = computed(() => {
      if (!['start', 'end', 'center', 'baseline'].includes(props.align)) return 'center'
      return props.align
    })

    const classList = computed(() => {
      return [
        'lu-space',
        `lu-space-align-${align.value}`,
        deraction.value,
        props.auto ? 'lu-space-auto' : 'lu-space-fixed',
        props.wrap && `lu-space-${props.wrap}`
      ]
    })

    return () => (
      <div class={classList.value} style={{ '--lu-space-item-margin': size.value }}>
        {childSlots.value}
      </div>
    )
  }
})
</script>
