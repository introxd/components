import { type DefaultTheme, defineConfig } from 'vitepress'

export const zh = defineConfig({
  lang: 'zh',

  title: 'Introxd 组件库',
  description: 'Introxd 组件库, Introxd Components',

  themeConfig: {
    nav: nav(),
    sidebar: {
      '/guide/': sidebarGuide(),
      '/components/': sidebarComponents()
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/introxd/components' }
    ],

    editLink: {
      pattern: 'https://github.com/introxd/components/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    { text: '指南', link: '/guide/installation' },
    { text: '组件', link: '/components/icon-text' }
  ]
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '指南',
      items: [
        { text: '安装', link: '/guide/installation' },
        {
          text: '集成',
          items: [
            {
              text: '自动引入组件',
              link: '/guide/integrations/auto-import-components'
            }
          ]
        }
      ]
    }
  ]
}

function sidebarComponents(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '组件',
      items: [
        { text: '图标文字', link: '/components/icon-text' },
        {
          text: '赛博朋克故障效果',
          link: '/components/cyberpunk-glitch'
        },
        {
          text: '流光灯效果',
          link: '/components/flowing-light'
        }
      ]
    }
  ]
}
