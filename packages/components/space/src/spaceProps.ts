import { PropType } from 'vue'

export const spaceProps = {
  // @zh 间距大小
  // @en Spacing size
  size: [String, Number] as PropType<string | number>,
  // @zh 间距方向
  // @en Spacing direction
  direction: String as PropType<'horizontal' | 'vertical'>,
  // @zh 是否自动填充间距
  // @en Whether to automatically fill in the spacing
  auto: Boolean as PropType<boolean>,
  // @zh 间距对齐方式
  // @en Spacing alignment
  align: {
    type: String as PropType<'start' | 'end' | 'center' | 'baseline'>,
    default: 'center'
  },
  // @zh 间距包裹方式
  // @en Spacing wrap
  wrap: String as PropType<'wrap' | 'nowrap' | 'wrap-reverse'>,
  // @zh 间隔符
  // @en Spacing separator
  separator: [String, Object, Function] as PropType<string | JSX.Element | (() => JSX.Element)>,
  // @zh 间隔符插槽
  // @en Spacing separator slot
  separatorSlot: Function as PropType<() => JSX.Element>
}
