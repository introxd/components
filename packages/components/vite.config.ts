import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'

import lodashImports from 'lodash-imports'
import unocss from 'unocss/vite'
import autoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

const r = (path: string) => fileURLToPath(new URL(path, import.meta.url))

export default defineConfig({
  plugins: [
    vue(),
    dts({
      tsconfigPath: r('./tsconfig.build.json'),
      insertTypesEntry: true
    }),
    unocss(),
    autoImport({
      dts: r('./.auto-import/auto-import.d.ts'),
      imports: [
        'vue',
        lodashImports()
      ],
      vueTemplate: true
    })
  ],
  build: {
    lib: {
      entry: {
        index: r('./src/index.ts'),
        resolver: r('./src/resolver.ts')
      }
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
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
