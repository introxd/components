<template>
  <div
    class="icon-text" :class="[
      props.href
        ? 'cursor-pointer hover:bg-[rgba(0,0,0,0.1)] dark:bg-[rgba(255,255,255,0.1)] dark:hover:bg-[rgba(255,255,255,0.2)] active:scale-95'
        : '',
    ]" mx-1 px-2 py-1 rounded-2 flex items-center justify-center gap-1 flex-inline transition="all duration-300"
    box-border @click="onClick"
  >
    <div v-if="isIcon" :class="presetClass.icon" />
    <img v-else :src="props.src" :class="presetClass.icon">

    <div :class="presetClass.font" select-none>
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { IconTextFont, IconTextPreset } from '../types'

const props = defineProps<{
  preset?: IconTextPreset
  fontPreset?: IconTextFont
  iconClass?: string
  src?: string
  fontClass?: string
  href?: string
}>()

const isIcon = !props.src

const presetClass = computed(() => {
  let defaultFont = props.fontClass || 'font-bold b-b-1 b-b-dashed'
  let defaultIcon = props.iconClass || ''

  switch (props.fontPreset) {
    case IconTextFont.None: {
      defaultFont = ''
      break
    }
  }

  switch (props.preset) {
    case IconTextPreset.Github: {
      defaultIcon = 'i-logos-github-icon translate-y-0.2'
      break
    }
  }

  return {
    icon: defaultIcon,
    font: defaultFont
  }
})

function getHref() {
  if (!props.href) {
    return
  }

  if (/^(?:https?|\/)/.test(props.href)) {
    return props.href
  }

  switch (props.preset) {
    case IconTextPreset.Github:
      return `https://github.com/${props.href}`
  }
}

function onClick() {
  const presetHref = getHref()

  if (!presetHref) {
    return
  }

  window.open(presetHref, '_blank')
}
</script>
