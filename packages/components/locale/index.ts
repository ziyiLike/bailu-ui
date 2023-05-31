import { inject, ref } from "vue";
import { configProviderInjectKey } from "../config-provider/context";
import zhCn from './lang/zh-cn';
import { BaiLuLang } from "./interface";

const Locale = ref(zhCn)

export const useLocale = (locale: BaiLuLang) => {
  Locale.value = locale;
}

export const getLocale = () => {
  return Locale.value || zhCn;
}

export const useI18n = () => {
  const configProvider = inject(configProviderInjectKey, null);

  const transform = (key: string) => {
    const keyArr = key.split('.');
    let _locale = configProvider?.locale;
    if (_locale) {
      useLocale(_locale);
    } else {
      _locale = getLocale();
    }
    return keyArr.reduce((pre: any, cur) => {
      if (pre) {
        return pre?.[cur]
      }
      return '';
    }, _locale);
  }

  return {
    t: transform,
  }

}