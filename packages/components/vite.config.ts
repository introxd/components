import { URL, fileURLToPath } from 'node:url'

import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import unocss from 'unocss/vite'

const r = (path: string) => fileURLToPath(new URL(path, import.meta.url))

export default defineConfig({
  plugins: [
    vue(),
    dts({
      tsconfigPath: r('./tsconfig.build.json'),
      insertTypesEntry: true
    }),
    unocss()
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
  }
})
