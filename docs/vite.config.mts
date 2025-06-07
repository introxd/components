import { fileURLToPath, URL } from 'node:url'
import IntroxdResolver from '@introxd/components/resolver'
import unocss from 'unocss/vite'
import autoImport from 'unplugin-auto-import/vite'
import components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import exclude from 'vite-plugin-optimize-exclude'

const r = (path: string) => fileURLToPath(new URL(path, import.meta.url))

export default defineConfig({
  plugins: [
    unocss(),
    autoImport({
      dts: r('./.auto-import/auto-import.d.ts'),
      imports: [
        'vue'
      ],
      vueTemplate: true
    }),
    components({
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [
        IntroxdResolver()
      ],
      dts: r('./.auto-import/components.d.ts')
    }),

    exclude()
  ]
})
