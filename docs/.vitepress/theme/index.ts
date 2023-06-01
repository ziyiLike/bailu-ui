import DefaultTheme from 'vitepress/theme'
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'
import '../../../packages/styles/scss/style.scss'
import { useComponents } from './useComponents'
import './custom.scss';
import BaiLuUI from '../../../packages/index'
import { EnhanceAppContext } from 'vitepress/dist/client';

export default {
  ...DefaultTheme,
  enhanceApp(ctx: EnhanceAppContext) {
    DefaultTheme.enhanceApp(ctx)
    ctx.app.use(BaiLuUI)
    useComponents(ctx.app)
  }
}