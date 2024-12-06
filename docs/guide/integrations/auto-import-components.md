# 安装

安装自动引入插件 [unplugin-vue-components](https://www.npmjs.com/package/unplugin-vue-components)

```bash
pnpm add unplugin-vue-components -D
```

# 配置

## Vite

以 Vite 为例

```ts
import IntroxdResolver from '@introxd/components/resolver'

import components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    components({
      resolvers: [
        IntroxdResolver()
      ]
    })
  ]
})
```
