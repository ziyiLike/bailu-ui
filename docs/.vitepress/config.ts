import { defineConfig } from 'vitepress'
import { demoBlockPlugin } from 'vitepress-theme-demoblock'
import NavList from './route/navList'
import SidebarComponent from './route/sidebarComponent'

export default defineConfig({
  lang: 'en-US',
  title: 'Bailu UI',
  description: 'A Vue.js 3.0 UI Toolkit for Web.',
  lastUpdated: true,
  head: [
    // 添加图标
    ['link', { rel: 'icon', href: 'http://81.68.222.165:9000/ziyi-like/BaiLuLogoWithoutText.png?Content-Type=image/png' }],
  ],
  themeConfig: {
    // @ts-ignore
    demoblock: {
      '/': {
        'hide-text': 'Hide',
        'show-text': 'Expand',
        'copy-button-text': 'Copy',
        'copy-success-text': 'Copy success'
      },
      '/zh': {
        'hide-text': '隐藏代码',
        'show-text': '显示代码',
        'copy-button-text': '复制代码片段',
        'copy-success-text': '复制成功'
      }
    },
    logo: 'http://81.68.222.165:9000/ziyi-like/BaiLuLogoWithoutText.png?Content-Type=image/png',
    siteTitle: 'Bailu UI',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ziyiLike/bailu-ui' }
    ],
    nav: NavList,
    sidebar: {
      '/component/': SidebarComponent,
    },
    footer: {
      message: '© 2023 ziyiLike',
      copyright: ''
    }
  },
  markdown: {
    config: (md) => {
      md.use(demoBlockPlugin, {
        cssPreprocessor: 'scss'
      });
    }
  }
})