import { PropType } from 'vue'


export const buttonProps = () => ({
  type: String as PropType<'primary' | 'success' | 'warning' | 'danger' | 'info'>,
});
