<script setup lang="ts">
defineProps<{ image?: string, video?: string }>()
</script>

<template>
  <FsBase name="full-media" bg="#f5f5f5">
    <template #under>
      <div class="fs-media" style="inset: 0" :style="image ? { backgroundImage: `url(${image})` } : undefined">
        <video v-if="video" :src="video" autoplay loop muted playsinline />
        <slot />
      </div>
    </template>
  </FsBase>
</template>
