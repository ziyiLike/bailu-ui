import { PropType } from 'vue'
import { BaiLuLang } from '../../locale/interface';


export const configProviderProps = () => ({
  /**
  * @zh 配置语言包
  * @en Configure language pack
  */
  locale: {
    type: Object as PropType<BaiLuLang>
  },
});
