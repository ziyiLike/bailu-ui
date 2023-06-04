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
  align: String as PropType<'start' | 'end' | 'center' | 'baseline'>,
  // @zh 间距包裹方式
  // @en Spacing wrap
  wrap: String as PropType<'wrap' | 'nowrap' | 'wrap-reverse'>,
  // @zh 间距缩进
  // @en Spacing indent
  indent: String as PropType<string | number>,
  // @zh 间距缩进方向
  // @en Spacing indent direction
  indentDirection: String as PropType<'left' | 'right'>
}
