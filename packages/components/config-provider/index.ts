import configProvider from './src/config-provider.vue';
import useWidthInstall from '../../../utils/useWidthInstall';

const LuConfigProvider = useWidthInstall(configProvider);

export type LuConfigProviderInstance = InstanceType<typeof configProvider>;

export default LuConfigProvider;