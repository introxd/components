import type { ComponentResolver } from 'unplugin-vue-components/types'

export default function IntroxdResolver(): ComponentResolver {
  return (name: string) => {
    if (name.startsWith('Ix')) {
      return {
        name,
        from: '@introxd/components'
      }
    }
  }
}
