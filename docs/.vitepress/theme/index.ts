// .vitepress/theme/index.ts
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

import 'virtual:uno.css'

import '@introxd/components/style.css'

export default {
  extends: DefaultTheme,
  enhanceApp() {

  }
} satisfies Theme
