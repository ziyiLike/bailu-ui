import DefaultTheme from 'vitepress/theme'
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'
import './custom.scss';
import '../../../packages/styles/scss/style.scss'
import { useComponents } from './useComponents'
import BaiLuUI from '../../../packages/index'

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    ctx.app.use(BaiLuUI)
    useComponents(ctx.app)
  }
}