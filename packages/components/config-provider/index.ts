import configProvider from './src/config-provider.vue'
import useWidthInstall from '../../../utils/useWidthInstall'

configProvider.name = 'lu-config-provider'
const LuConfigProvider = useWidthInstall(configProvider)

export type LuConfigProviderInstance = InstanceType<typeof configProvider>

export default LuConfigProvider
