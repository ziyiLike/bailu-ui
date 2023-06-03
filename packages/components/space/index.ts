import Space from './src/space.vue'
import useWithInstall from '../../utils/useWithInstall'

Space.name = 'lu-space'
const LuSpace = useWithInstall(Space)

export type LuSpaceInstance = InstanceType<typeof Space>
export type { LuSpaceProps } from './interface'

export default LuSpace
