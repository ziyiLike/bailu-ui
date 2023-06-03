import Button from './src/button.vue'
import useWithInstall from '../../utils/useWithInstall'

Button.name = 'lu-button'
const LuButton = useWithInstall(Button)

export type LuButtonInstance = InstanceType<typeof Button>
export type { LuButtonProps } from './interface'

export default LuButton
