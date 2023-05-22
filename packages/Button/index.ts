import Button from "./src/button.vue"
import useWidthInstall from '../../utils/useWidthInstall'

const LuButton = useWidthInstall(Button)

export type ButtonInstance = InstanceType<typeof Button>

export default LuButton

