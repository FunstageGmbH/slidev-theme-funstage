<script setup lang="ts">
import pattern from '../assets/pattern-m.png'
</script>

<template>
  <FsBase
    name="m-pattern" :bg-image="pattern"
    :title="[34.62, 32.57, 930.71, 87.43]" :subtitle="[34.62, 125.07, 930.71, 32.57]" :body="[34.62, 188.16, 930.71, 489.61]"
  >
    <slot />
  </FsBase>
</template>
