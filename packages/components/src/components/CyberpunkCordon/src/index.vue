<style lang="scss" scoped>
.marquee {
  white-space: nowrap;
  overflow: hidden;
  position: relative;
  display: inline-block;
  padding-left: 100%;
  animation: marquee 10s linear infinite;
}

.cyberpunk-cordon {
  .mask {
    mask: radial-gradient(#000, transparent) repeat 0 0 / 4px 4px;
  }
}

@keyframes marquee {
  0% {
    transform: translate(0, 0);
  }

  100% {
    transform: translate(-100%, 0);
  }
}
</style>

<template>
  <div pr class="cyberpunk-cordon">
    <div class="mask" :class="props.bgClass">
      <div :class="props.marquee ? 'marquee' : ''" pt="1.5" leading-none blur-1>
        <slot />
      </div>
    </div>
    <div pa top-0 right-0 bottom-0 left-0 op-50 blur-md :class="props.bgClass" />
  </div>
</template>

<script lang="ts" setup>
defineOptions({ name: 'IxCyberpunkCordon' })

const props = withDefaults(defineProps<{
  bgClass?: string
  marquee?: boolean
}>(), {
  bgClass: 'bg-amber',
  marquee: true
})
</script>
