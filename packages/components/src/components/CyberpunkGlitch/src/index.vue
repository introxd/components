<style lang="scss" scoped>
.text-container {
  --slice-0: inset(50% 50% 50% 50%);

  --slice-shadow-1: -1px -1px 0 #F8F005, 1px 1px 0 #00E6F6;
  --slice-shadow-2: -2px -2px 0 #F8F005, 2px 2px 0 #00E6F6;

  .text {

    &>.text-glitch,
    &>.text-glitch-blur {
      --uno: pa top-0 right-0 bottom-0 left-0;
      text-shadow: var(--slice-shadow-1);
      clip-path: var(--slice-0);
    }

    &>.text-glitch-blur {
      --uno: blur-2;
    }

    &.animate-glitch {

      &>.text-glitch,
      &>.text-glitch-blur {
        animation: glitch .3s infinite steps(1, end);
      }
    }
  }
}

@keyframes glitch {
  0% {
    clip-path: var(--slice-1);
    transform: var(--translate-1);
  }

  20% {
    clip-path: var(--slice-5);
    transform: var(--translate-5);
  }

  40% {
    clip-path: var(--slice-2);
    transform: var(--translate-2);
  }

  60% {
    clip-path: var(--slice-5);
    transform: var(--translate-5);
    text-shadow: var(--slice-shadow-2);
  }

  80% {
    clip-path: var(--slice-3);
    transform: var(--translate-3);
  }

  100% {
    clip-path: var(--slice-4);
    transform: var(--translate-4);
    text-shadow: var(--slice-shadow-2);
  }
}
</style>

<template>
  <div ref="textContainer" class="text-container" pr>
    <div
      pr class="text"
      :class="isPlaying ? 'animate-glitch animate-flash animate-duration-300 animate-count-infinite' : ''"
    >
      <div :class="props.contentClass">
        <slot :is-playing />
      </div>
      <div class="text-glitch" :class="props.contentClass">
        <slot :is-playing />
      </div>
      <div class="text-glitch-blur" :class="props.contentClass">
        <slot :is-playing />
      </div>
    </div>
    <slot name="background" :is-playing />
  </div>
</template>

<script lang="ts" setup>
defineOptions({ name: 'IxCyberpunkGlitch' })

const props = withDefaults(defineProps<{
  contentClass?: string
  translateX?: number[]
  translateY?: number[]
  duration?: number[]
  interval?: number[]
}>(), {
  translateX: () => [-15, 15],
  translateY: () => [-5, 5],
  duration: () => [200, 1200],
  interval: () => [2000, 5000]
})

const container = useTemplateRef<HTMLDivElement>('textContainer')

const isPlaying = ref(false)

onMounted(() => {
  playAnimate()
})

async function playAnimate() {
  if (container.value) {
    for (let i = 1; i <= 5; i++) {
      const left = _random(10, 80)
      const right = 100 - left - _random(5, 20)
      container.value.style.setProperty(
        `--slice-${i}`,
        `inset(${left}% 0 ${right}% 0)`
      )

      const [minX, maxX] = props.translateX
      const [minY, maxY] = props.translateY
      container.value.style.setProperty(
        `--translate-${i}`,
        `translate(${_random(minX, maxX)}px, ${_random(minY, maxY)}px)`
      )
    }
  }

  isPlaying.value = true

  const [minDuration, maxDuration] = props.duration
  const playTime = _random(minDuration, maxDuration)

  await new Promise((resolve) => {
    setTimeout(() => {
      isPlaying.value = false
      resolve(null)
    }, playTime)
  })

  const [minInterval, maxInterval] = props.interval
  setTimeout(() => {
    playAnimate()
  }, _random(minInterval, maxInterval))
}
</script>
