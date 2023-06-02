import Icon from './src/icon.vue'
import useWidthInstall from '../../../utils/useWidthInstall'

Icon.name = 'lu-icon'
const LuIcon = useWidthInstall(Icon)

export type LuIconInstance = InstanceType<typeof Icon>
export type { LuIconProps } from './interface'

export default LuIcon
