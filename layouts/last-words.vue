<script setup lang="ts">
const logoFull = new URL('../public/logo-full.png', import.meta.url).href

defineOptions({
  inheritAttrs: false
})
</script>

<template>
  <div class="slidev-layout last-words" :style="{ backgroundImage: `url(${logoFull})` }">
    <PresentationProgress />
    <div class="content-wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.last-words {
  @apply h-full w-full bg-white bg-no-repeat p-5;
  background-size: 75%;
  background-position: 138% -402%;
}

.content-wrapper {
  @apply w-[45%] h-full flex flex-col justify-center;
}

.content-wrapper :deep(h1) {
  @apply text-[4rem] font-bold mb-[var(--funstage-gap-sm)];
}

.content-wrapper :deep(h2) {
  @apply text-[1.5rem];
}
</style>
