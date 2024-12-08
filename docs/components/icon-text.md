# IxIconText

图标文字组件

## 图标文字

<div my-8>
  <IxIconText icon-class="i-logos-typescript-icon" :font-preset="IconTextFont.None">
    TypeScript
  </IxIconText>

  <IxIconText icon-class="i-logos-vue" :font-preset="IconTextFont.None">
    Vue
  </IxIconText>
</div>

```vue
<template>
  <IxIconText icon-class="i-logos-typescript-icon" :font-preset="IconTextFont.None">
    TypeScript
  </IxIconText>

  <IxIconText icon-class="i-logos-vue" :font-preset="IconTextFont.None">
    Vue
  </IxIconText>
</template>

<script lang="ts" setup>
import { IconTextFont } from '@introxd/components'
</script>
```

## 预设

<div my-8 flex items-center>
  <IxIconText :preset="IconTextPreset.Github" href="introxd/components">
    introxd/components
  </IxIconText>

  <IxIconText :preset="IconTextPreset.Bilibili" href="BV1sm4KeJEkF">
    组件库
  </IxIconText>

  <IxIconText :preset="IconTextPreset.Initx" icon-class="i-mdi-github bg-[#f4cb25] size-6" href="https://github.com/initx-collective/initx">
    Initx
  </IxIconText>
</div>

```vue
<template>
  <IxIconText :preset="IconTextPreset.Github" href="introxd/components">
    introxd/components
  </IxIconText>

  <IxIconText :preset="IconTextPreset.Initx" icon-class="i-mdi-github bg-[#f4cb25] size-6" href="https://github.com/initx-collective/initx">
    Initx
  </IxIconText>

  <IxIconText :preset="IconTextPreset.Bilibili" href="BV15A411s7cX">
    组件库
  </IxIconText>
</template>

<script lang="ts" setup>
import { IconTextPreset } from '@introxd/components'
</script>
```

## 链接

<div my-8>
  <IxIconText src="https://imba97.cn/uploads/2019/08/imba97-1024-300x300.png" icon-class="size-6 rounded-sm" href="https://imba97.cn">
    博客
  </IxIconText>

  <IxIconText src="/images/favicon.png" icon-class="size-6 rounded-sm" href="https://introxd.com">
    Introxd
  </IxIconText>
</div>

```vue
<template>
  <IxIconText src="https://imba97.cn/uploads/2019/08/imba97-1024-300x300.png" icon-class="size-6 rounded-sm" href="https://imba97.cn">
    博客
  </IxIconText>

  <IxIconText src="/images/favicon.png" icon-class="size-6" href="https://introxd.com">
    Introxd
  </IxIconText>
</template>
```

<script setup>
import { IconTextFont, IconTextPreset } from '@introxd/components'
</script>
