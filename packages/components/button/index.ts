import Button from './src/button.vue'
import useWidthInstall from '../../../utils/useWidthInstall'

Button.name = 'lu-button'
const LuButton = useWidthInstall(Button)

export type LuButtonInstance = InstanceType<typeof Button>
export type { LuButtonProps } from './interface'

export default LuButton
