<script setup lang="ts">
import art from '../assets/art-last-words.png'
</script>

<template>
  <!-- Departs from the Google template on purpose: there the artwork is 815x650 and the body sits directly
       under the title, which reads as crowded. Here the artwork is 70% of that size, anchored bottom right,
       and the text column is wider with a gap under the title. -->
  <FsBase name="last-words" bg="#ffffff" :title="[34.62, 118.01, 640, 87.43]" :body="[34.62, 250, 640, 380]">
    <template #under>
      <FsPic :src="art" :box="[709.41, 264.98, 570.59, 455.02]" :crop="[-56, 1, 13625, 10243]" />
    </template>
    <slot />
  </FsBase>
</template>
