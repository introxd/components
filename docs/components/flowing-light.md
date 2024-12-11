# IxFlowingLight

流光灯效果组件

## 基础

<div py-4>
  <IxFlowingLight h-2 w-full bg-class="rounded-full" />
</div>

```vue
<template>
  <IxFlowingLight h-2 w-full bg-class="rounded-full" />
</template>
```

## 遮罩

<div>
  <IxFlowingLight mask="/masks/cross.png" size-50 />
</div>

```vue
<template>
  <IxFlowingLight mask="/masks/cross.png" size-50 />
</template>
```

## 感谢

<div>
  <div fyc flex-wrap>
    <div flex-inline>使用 hue-rotate 实现渐变背景动画</div>
    <IxIconText href="https://chokcoco.github.io/CSS-Inspiration/#/./filter/filter-hue-rotate-color">
      CSS Inspiration
    </IxIconText>
  </div>
</div>
