import { InjectionKey } from "vue";
import { BaiLuLang } from "../locale/interface";


export interface configProvider {
  slots: Readonly<Record<string, any>>;
  locale: BaiLuLang;
}


export const configProviderInjectKey: InjectionKey<configProvider> = Symbol('BaiLuConfigProvider');