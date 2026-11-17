<script setup lang="ts">
import { computed } from 'vue'
import patternL from '../assets/pattern-l.png'
import patternM from '../assets/pattern-m.png'
import patternS from '../assets/pattern-s.png'

// A blank slide for embeds, diagrams or anything free-form. Props are the v1 ones.
const props = withDefaults(defineProps<{
  showRibbon?: boolean
  showLogo?: boolean
  showProgress?: boolean // accepted for v1 decks; the progress bar no longer exists
  ribbonColor?: 'Accent' | 'Primary' | 'Secondary'
}>(), { showRibbon: false, showLogo: false, showProgress: false, ribbonColor: 'Accent' })

const pattern = computed(() => props.showRibbon ? { Accent: patternS, Primary: patternM, Secondary: patternL }[props.ribbonColor] : undefined)
</script>

<template>
  <FsBase name="empty" bg="#ffffff" :bg-image="pattern" :body="[34.62, 32.57, 1210.76, 654.86]">
    <slot />
    <template v-if="showLogo" #over><FsLogoMark /></template>
  </FsBase>
</template>

<style>
/* no title placeholder here: headings simply flow with the content */
.slidev-layout.fs.fs-empty h1,
.slidev-layout.fs.fs-empty h2 { display: block; position: static; width: auto; height: auto; padding: 0; transform: none; }
.slidev-layout.fs.fs-empty .fs-content > * + * { margin-top: 13.333px; }
</style>
