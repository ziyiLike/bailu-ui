import { PropType } from 'vue'


export const buttonProps = () => ({
  /**
 * @zh 按钮的类型, 从 `primary`、`success`、`warning`、`danger`、`info` 中选择
 * @en Type of button from `primary`, `success`, `warning`, `danger`, `info`
 */
  type: String as PropType<'primary' | 'success' | 'warning' | 'danger' | 'info'>,
});
