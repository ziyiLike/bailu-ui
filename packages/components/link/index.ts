import Link from './src/link.vue'
import useWidthInstall from '../../../utils/useWidthInstall'

Link.name = 'lu-link'

const LuLink = useWidthInstall(Link)

export type LuLinkInstance = InstanceType<typeof Link>
export type { LuLinkProps } from './interface'

export default LuLink
