import { defineConfig } from 'vitepress'

import generateSidebarConfig from './sidebars'
import generateNavConfig from './nav'

export default defineConfig({
  title: 'Intro 🤣',
  description: 'Introxd 组件库',

  base: '/components/',

  themeConfig: {
    nav: generateNavConfig(),
    sidebar: generateSidebarConfig(),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/introxd/components' }
    ]
  }
})
