import Space from './src/space.vue'
import useWidthInstall from '../../../utils/useWidthInstall'

Space.name = 'lu-space'
const LuSpace = useWidthInstall(Space)

export type LuSpaceInstance = InstanceType<typeof Space>
export type { LuSpaceProps } from './interface'

export default LuSpace
