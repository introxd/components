# IxCyberpunkGlitch

赛博朋克故障效果组件

## 文字

<div p-4 rounded-md bg-slate-950>
  <IxCyberpunkGlitch text-white>Cyberpunk Glitch</IxCyberpunkGlitch>
</div>

```vue
<template>
  <IxCyberpunkGlitch text-white>
    Cyberpunk Glitch
  </IxCyberpunkGlitch>
</template>
```

## 图片

<div>
  <IxCyberpunkGlitch>
    <img src="/images/favicon.png" size-20 rounded-md />
  </IxCyberpunkGlitch>
</div>

```vue
<template>
  <IxCyberpunkGlitch>
    <img src="/images/favicon.png" size-20 rounded-md>
  </IxCyberpunkGlitch>
</template>
```

## 元素

<div>
  <IxCyberpunkGlitch>
    <div size-20 bg-lime-6 rounded-md />
  </IxCyberpunkGlitch>
</div>

```vue
<template>
  <IxCyberpunkGlitch>
    <div size-20 bg-lime-6 rounded-md />
  </IxCyberpunkGlitch>
</template>
```

## 感谢

<div fyc>
  <div>纯 CSS 制作赛博朋克2077“故障风”按钮</div>

  <IxIconText :preset="IconTextPreset.Bilibili" href="BV15A411s7cX">
    教程视频
  </IxIconText>
</div>

<script setup>
import { IconTextPreset } from '@introxd/components'
</script>
