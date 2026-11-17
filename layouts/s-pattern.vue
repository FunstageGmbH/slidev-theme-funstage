<script setup lang="ts">
import pattern from '../assets/pattern-s.png'
</script>

<template>
  <FsBase
    name="s-pattern" :bg-image="pattern"
    :title="[34.62, 32.57, 1067.4, 87.43]" :subtitle="[34.62, 125.07, 1067.4, 32.57]" :body="[34.62, 188.16, 1067.4, 489.61]"
  >
    <slot />
  </FsBase>
</template>
