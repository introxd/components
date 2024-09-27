import type { DefaultTheme } from 'vitepress/theme'

function getGuideSidebar(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '指南',
      items: [
        { text: '安装', link: '/guide/installation' }
      ]
    }
  ]
}

function getComponentsSidebar(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '组件',
      items: [
        { text: '图标文字', link: '/components/icon-text' }
      ]
    }
  ]
}

function generateSidebarConfig(): DefaultTheme.Sidebar {
  return {
    '/guide/': getGuideSidebar(),
    '/components/': getComponentsSidebar()
  }
}

export default generateSidebarConfig
