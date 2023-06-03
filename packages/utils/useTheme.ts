/** 
 * 主题参数解析
 * 用于解析主题参数，返回对应的css类名
 */

const themeTypeList = ['default', 'primary', 'success', 'warning', 'danger']
const sizeTypeList = ['mini', 'small', 'default', 'large']
const shapeTypeList = ['default', 'plain', 'round', 'circle']

export default (bindProps: any, type: 'theme' | 'size' | 'shape' | 'disabled' | 'loading', cssKey: string, propsKey?: string) => {
  switch (type) {
    case 'theme':
      return themeTypeFn(bindProps, cssKey, propsKey);

    case 'size':
      return sizeTypeFn(bindProps, cssKey, propsKey);

    case 'shape':
      return shapeTypeFn(bindProps, cssKey, propsKey);

    case 'disabled':
      return disableTypeFn(bindProps, cssKey, propsKey);

    case 'loading':
      return bindProps.loading ? cssKey + '-loading' : '';
  }
}

const themeTypeFn = (bindProps: any, cssKey: string, propsKey: string = 'type') => {
  const _propsKey = propsKey || 'type'
  return themeTypeList.includes(bindProps[_propsKey] || 'default') ? cssKey + '-' + (bindProps[_propsKey] || 'default') : cssKey + '-default'
}

const sizeTypeFn = (bindProps: any, cssKey: string, propsKey: string = 'size') => {
  const _propsKey = propsKey ? propsKey : 'size'
  return sizeTypeList.includes(bindProps[_propsKey] || 'default') ? cssKey + '-' + (bindProps[_propsKey] || 'default') : cssKey + '-default'
}

const shapeTypeFn = (bindProps: any, cssKey: string, propsKey: string = 'shape') => {
  const _propsKey = propsKey ? propsKey : 'shape'
  return shapeTypeList.includes(bindProps[_propsKey] || 'default') ? cssKey + '-' + (bindProps[_propsKey] || 'default') : cssKey + '-default'
}

const disableTypeFn = (bindProps: any, cssKey: string, propsKey: string = 'disabled') => {
  const _propsKey = propsKey ? propsKey : 'disabled'
  return bindProps[_propsKey] ? cssKey + '-disabled' : ''
}

const loadingTypeFn = (bindProps: any, cssKey: string, propsKey: string = 'loading') => {
  const _propsKey = propsKey ? propsKey : 'loading'
  return bindProps[_propsKey] ? cssKey + '-loading' : ''
}




