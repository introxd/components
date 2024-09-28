import { mergeConfig } from 'vitepress'

import shared from './shared'
import { zh } from './locales/zh'

export default mergeConfig(shared, {
  locales: {
    root: { label: '简体中文', ...zh }
  }
})
