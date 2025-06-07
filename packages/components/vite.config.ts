import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import lodashImports from 'lodash-imports'
import unocss from 'unocss/vite'
import autoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import exclude from 'vite-plugin-optimize-exclude'

const r = (path: string) => fileURLToPath(new URL(path, import.meta.url))

const componentsDir = r('./src/components')
const componentEntries = Object.fromEntries(
  fs.readdirSync(componentsDir)
    .filter(name => fs.existsSync(path.join(componentsDir, name, 'index.ts')))
    .map(name => [
      name,
      path.join(componentsDir, name, 'index.ts')
    ])
)

export default defineConfig({
  plugins: [
    vue(),
    dts({
      tsconfigPath: r('./tsconfig.build.json'),
      insertTypesEntry: true
    }),
    unocss({
      mode: 'vue-scoped'
    }),
    autoImport({
      dts: r('./.auto-import/auto-import.d.ts'),
      imports: [
        'vue',
        lodashImports()
      ],
      vueTemplate: true
    }),
    {
      name: 'inject-var-h-plugin',
      generateBundle(options, bundle) {
        const file = bundle['index.js'] as any

        if (!file) {
          return
        }

        file.code = `var h;\n${file.code}`
      }
    },

    exclude()
  ],
  build: {
    lib: {
      entry: {
        index: r('./src/index.ts'),
        resolver: r('./src/resolver.ts'),
        ...componentEntries
      },
      cssFileName: 'style',
      formats: ['es']
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        entryFileNames: (chunkInfo) => {
          if (chunkInfo.name === 'index' || chunkInfo.name === 'resolver') {
            return '[name].js'
          }
          return 'components/[name].js'
        }
      }
    }
  },

  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler'
      }
    }
  }
})
