import Icon from './src/icon.vue'
import useWithInstall from '../../utils/useWithInstall'

Icon.name = 'lu-icon'
const LuIcon = useWithInstall(Icon)

export type LuIconInstance = InstanceType<typeof Icon>
export type { LuIconProps } from './interface'

export default LuIcon
