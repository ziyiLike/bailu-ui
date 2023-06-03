import configProvider from './src/config-provider.vue'
import useWithInstall from '../../utils/useWithInstall'

configProvider.name = 'lu-config-provider'
const LuConfigProvider = useWithInstall(configProvider)

export type LuConfigProviderInstance = InstanceType<typeof configProvider>

export default LuConfigProvider
