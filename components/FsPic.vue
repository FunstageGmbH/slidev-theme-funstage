<script setup lang="ts">
import { computed } from 'vue'

// box: x, y, w, h in px. crop: left, top, right, bottom in 1/100000 of the source image (pptx srcRect).
const props = defineProps<{
  src: string
  box: [number, number, number, number]
  crop?: [number, number, number, number]
}>()

const s = computed(() => {
  const [x, y, w, h] = props.box
  const [l, t, r, b] = (props.crop ?? [0, 0, 0, 0]).map(v => v / 100000)
  const iw = w / (1 - l - r)
  const ih = h / (1 - t - b)
  return {
    wrap: { left: '0', top: '0', transform: `translate(${x}px, ${y}px)`, width: `${w}px`, height: `${h}px` },
    img: { width: `${iw}px`, height: `${ih}px`, left: '0', top: '0', transform: `translate(${-l * iw}px, ${-t * ih}px)` },
  }
})
</script>

<template>
  <div class="fs-pic" :style="s.wrap"><img :src="src" :style="s.img" alt=""></div>
</template>
