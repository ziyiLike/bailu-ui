import { PropType } from 'vue'


export const buttonProps = () => ({
  /**
 * @zh 按钮的类型, 从 `primary`、`success`、`warning`、`danger`、`info` , `text` 中选择
 * @en Type of button from `primary`, `success`, `warning`, `danger`, `info` , `text`
 */
  type: String as PropType<'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text'>,
  /**
   * @zh 按钮的Icon, 从 Icon Name 中选择
   * @en Icon of button from Icon Name
   */
  icon: String as PropType<string>,
  /**
   * @zh 按钮Icon的颜色, 传入颜色值, 默认为父级字体颜色
   * @en Color of button icon, pass in color value, default is parent font color
   */
  iconColor: String as PropType<string>,
  /**
   * @zh 按钮Icon的大小, 传入数字单位为px, 传入字符串时需指定单位。
   * @en Size of button icon, pass in number unit px, when pass in string, you need to specify the unit.
   */
  iconSize: String as PropType<string | number>,
});
