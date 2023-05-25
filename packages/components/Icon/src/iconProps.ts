import { PropType } from 'vue'


export const iconProps = () => ({
  /**
 * @zh Icon 的名称
 * @en Name of icon 
 */
  name: String as PropType<string>,
  /**
   * @zh Icon 的颜色
   * @en Color of icon
   */
  color: String as PropType<string>,
  /**
   * @zh Icon 的大小
   * @en Size of icon
   */
  size: String as PropType<string | number>,
});
