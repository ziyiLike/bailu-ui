import Radio from './src/radio.vue'
import RadioGroup from './src/radioGroup.vue'
import useWidthInstall from '../../utils/useWithInstall'

Radio.name = 'lu-radio'
const LuRadio = useWidthInstall(Radio)

RadioGroup.name = 'lu-radio-group'
const LuRadioGroup = useWidthInstall(RadioGroup)

export type LuRadioInstance = InstanceType<typeof Radio>
export type { LuRadioProps } from './interface'

export type LuRadioGroupInstance = InstanceType<typeof RadioGroup>
export type { LuRadioGroupProps } from './interface'

export { LuRadio, LuRadioGroup }
