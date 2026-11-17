<script setup lang="ts">
import { computed } from 'vue'

type Box = [number, number, number, number] // x, y, w, h in px on the 1280x720 canvas
const props = defineProps<{
  name: string
  bg?: string
  bgImage?: string
  title?: Box
  subtitle?: Box
  body?: Box
}>()

const style = computed(() => {
  const s: Record<string, string> = {}
  if (props.bg) s.backgroundColor = props.bg
  if (props.bgImage) s.backgroundImage = `url(${props.bgImage})`
  const set = (k: string, b?: Box) => {
    if (!b) return
    ;['x', 'y', 'w', 'h'].forEach((d, i) => (s[`--${k}-${d}`] = `${b[i]}px`))
  }
  set('t', props.title)
  set('s', props.subtitle)
  set('b', props.body)
  return s
})
</script>

<template>
  <div class="slidev-layout fs" :class="[`fs-${name}`, { 'fs-no-body': !body }]" :style="style">
    <slot name="under" />
    <div class="fs-content"><slot /></div>
    <slot name="over" />
    <FsPageNumber />
  </div>
</template>
