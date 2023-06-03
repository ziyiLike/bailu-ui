import Link from './src/link.vue'
import useWithInstall from '../../utils/useWithInstall'

Link.name = 'lu-link'

const LuLink = useWithInstall(Link)

export type LuLinkInstance = InstanceType<typeof Link>
export type { LuLinkProps } from './interface'

export default LuLink
