<script setup lang="ts">
import pattern from '../assets/pattern-l.png'
</script>

<template>
  <FsBase
    name="l-pattern" :bg-image="pattern"
    :title="[34.62, 32.57, 757.92, 87.43]" :subtitle="[34.62, 125.07, 757.92, 32.57]" :body="[34.62, 188.16, 757.92, 489.61]"
  >
    <slot />
  </FsBase>
</template>
