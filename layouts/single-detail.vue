<script setup lang="ts">
defineProps<{ image?: string }>()
</script>

<template>
  <FsBase name="single-detail" bg="#ffffff" :title="[302.36, 118.01, 718.99, 87.43]" :body="[304.4, 257.75, 716.94, 406.08]">
    <slot />
    <template #over>
      <div v-if="image" class="fs-media fs-round" :style="{ left: '84.57px', top: '73.94px', width: '175.56px', height: '175.56px', backgroundImage: `url(${image})` }" />
      <FsLogoMark />
    </template>
  </FsBase>
</template>
