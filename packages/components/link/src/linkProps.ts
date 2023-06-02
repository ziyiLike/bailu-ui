import { PropType } from 'vue'

export const linkProps = () => ({
  // @zh 链接的类型, 从 `primary`、`success`、`warning`、`danger`、`info`中选择
  type: String as PropType<'default' | 'primary' | 'success' | 'warning' | 'danger'>,
  // @zh 链接的地址
  href: String as PropType<string>,
  // @zh 链接的打开方式
  target: String as PropType<'_blank' | '_self' | '_parent' | '_top'>,
  // @zh 链接是否禁用
  disabled: Boolean as PropType<boolean>,
  // @zh 链接是否为加载中状态
  loading: Boolean as PropType<boolean>,
  // @zh 链接的Icon, 从 Icon Name 中选择
  icon: String as PropType<string>,
  // @zh 链接Icon的颜色, 传入颜色值, 默认为父级字体颜色
  iconColor: String as PropType<string>,
  //@zh 链接Icon的大小, 传入数字单位为px, 传入字符串时需指定单位。
  iconSize: String as PropType<string | number>
})
