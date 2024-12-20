# IxCyberpunkCordon

赛博朋克警戒线组件

## 基本

<div py-4 rounded-md bg-slate-950>
  <IxCyberpunkCordon>
    <div text-8 font-bold>POLICE</div>
  </IxCyberpunkCordon>
</div>

```vue
<template>
  <IxCyberpunkCordon>
    <div text-8 font-bold>
      POLICE
    </div>
  </IxCyberpunkCordon>
</template>
```

## 图片

<div py-4 rounded-md bg-slate-950>
  <IxCyberpunkCordon bg-class="bg-black bg-opacity-50">
    <div w-48>
      <img src="/images/jinx.png" w-48 rounded-md>
    </div>
  </IxCyberpunkCordon>
</div>

```vue
<template>
  <IxCyberpunkCordon bg-class="bg-transparent">
    <div w-48>
      <img src="/images/jinx.png" w-48 rounded-md>
    </div>
  </IxCyberpunkCordon>
</template>
```

## 停止滚动

<div p-4 inline-block rounded-md bg-slate-950>
  <IxCyberpunkCordon bg-class="bg-black bg-opacity-50" :marquee="false">
    <div w-64>
      <img src="/images/jinx.png" w-64 rounded-md>
    </div>
  </IxCyberpunkCordon>
</div>

```vue
<template>
  <IxCyberpunkCordon bg-class="bg-transparent" :marquee="false">
    <div w-64>
      <img src="/images/jinx.png" w-64 rounded-md>
    </div>
  </IxCyberpunkCordon>
</template>
```
