<style lang="scss" scoped>
.text-container {
  --slice-0: inset(50% 50% 50% 50%);
  --slice-1: inset(15% 0 65% 0);
  --slice-2: inset(30% 0 50% 0);
  --slice-3: inset(50% 0 35% 0);
  --slice-4: inset(60% 0 20% 0);
  --slice-5: inset(80% 0 10% 0);

  --slice-shadow-1: -1px -1px 0 #F8F005, 1px 1px 0 #00E6F6;
  --slice-shadow-2: -2px -2px 0 #F8F005, 2px 2px 0 #00E6F6;

  .text {

    &>.text-before,
    &>.text-after {
      --uno: pa top-0 right-0 bottom-0 left-0;
      text-shadow: var(--slice-shadow-1);
      clip-path: var(--slice-0);
    }

    &>.text-after {
      --uno: blur-2;
    }

    &.animate-glitch {

      &>.text-before,
      &>.text-after {
        animation: glitch .3s infinite steps(1, end);
      }
    }
  }
}

@keyframes glitch {
  0% {
    clip-path: var(--slice-1);
    transform: translate(0, -5px);
  }

  20% {
    clip-path: var(--slice-5);
    transform: translate(10px, -5px);
  }

  40% {
    clip-path: var(--slice-2);
    transform: translate(0, 0);
  }

  60% {
    clip-path: var(--slice-5);
    transform: translate(-10px, 5px);
    text-shadow: var(--slice-shadow-2);
  }

  80% {
    clip-path: var(--slice-3);
    transform: translate(3px, 0);
  }

  100% {
    clip-path: var(--slice-4);
    transform: translate(10px, 0);
    text-shadow: var(--slice-shadow-2);
  }
}
</style>

<template>
  <div class="text-container" pr text-8>
    <div
      pr class="text"
      :class="isPlaying ? 'animate-glitch animate-flash animate-duration-300 animate-count-infinite' : ''"
    >
      <slot :class="props.contentClass" />
      <div class="text-before" :class="props.contentClass">
        <slot />
      </div>
      <div class="text-after" :class="props.contentClass">
        <slot />
      </div>
    </div>
    <slot name="background" :is-playing />
  </div>
</template>

<script lang="ts" setup>
const props = withDefaults(defineProps<{
  contentClass?: string
}>(), {

})

const isPlaying = ref(false)

onMounted(() => {
  playAnimate()
})

async function playAnimate() {
  isPlaying.value = true

  const playTime = _random(200, 1200)

  await new Promise((resolve) => {
    setTimeout(() => {
      isPlaying.value = false
      resolve(null)
    }, playTime)
  })

  const interval = _random(2000, 5000)
  setTimeout(() => {
    playAnimate()
  }, interval)
}
</script>
