import type { App } from 'vue'

import * as components from './components'

const componentList = Object.values(components)

function install(app: App): void {
  componentList.forEach((comp) => {
    if (comp.name) {
      app.component(comp.name as string, comp)
    }
  })
}

export default { install }

export * from './components'
export * from './components/types'
