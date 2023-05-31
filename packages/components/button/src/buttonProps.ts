import { PropType } from 'vue'


export const buttonProps = () => ({
  // @zh 按钮的类型, 从 `primary`、`success`、`warning`、`danger`、`info`中选择
  type: String as PropType<'default' | 'primary' | 'success' | 'warning' | 'danger'>,
  // @zh 按钮的大小, 从 `mini`、`small`、`default`、`large` 中选择
  size: String as PropType<'mini' | 'small' | 'default' | 'large'>,
  // @zh 按钮的形状, 从 `default`、`plain`、`circle`、`round` 中选择
  shape: String as PropType<'default' | 'circle' | 'round'>,
  // @zh 按钮是否为朴素按钮
  plain: Boolean as PropType<boolean>,
  // @zh 按钮是否禁用
  disabled: Boolean as PropType<boolean>,
  // @zh 按钮是否为加载中状态
  loading: Boolean as PropType<boolean>,
  // @zh 按钮的Icon, 从 Icon Name 中选择
  icon: String as PropType<string>,
  // @zh 按钮Icon的颜色, 传入颜色值, 默认为父级字体颜色
  iconColor: String as PropType<string>,
  //@zh 按钮Icon的大小, 传入数字单位为px, 传入字符串时需指定单位。
  iconSize: String as PropType<string | number>,
});
