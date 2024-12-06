import { mergeConfig } from 'vitepress'

import { zh } from './locales/zh'
import shared from './shared'

export default mergeConfig(shared, {
  locales: {
    root: { label: '简体中文', ...zh }
  }
})
