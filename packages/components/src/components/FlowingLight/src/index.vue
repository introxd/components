<style lang="scss" scoped>
.flowing-light {
  background: linear-gradient(30deg, #ffcc00, deeppink, #9c27b0);
  animation: hueRotate 3s infinite alternate;
}

.mask-bg {
  mask-position: 0 0;
  mask-size: 100% 100%;
}

@keyframes hueRotate {
  100% {
    filter: hue-rotate(360deg);
  }
}
</style>

<template>
  <div pr class="ix-flowing-light">
    <div
      pa top-0 left-0 size-full :style="maskStyle" class="flowing-light" :class="[
        props.bgClass,
        props.mask ? 'mask-bg' : ''
      ]"
    />
    <div pa top-0 left-0 size-full blur-md>
      <div
        size-full :style="maskStyle" class="flowing-light" :class="[
          props.bgClass,
          props.mask ? 'mask-bg' : ''
        ]"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  mask?: string
  bgClass?: string
}>()

const maskStyle = computed(() => props.mask
  ? ({
      maskImage: `url(${props.mask})`
    })
  : ''
)
</script>
