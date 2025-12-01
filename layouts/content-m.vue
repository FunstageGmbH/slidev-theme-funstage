<script setup>
const bgM = new URL('../public/bg-content-m.png', import.meta.url).href

defineOptions({
  inheritAttrs: false
})
</script>

<template>
  <div class="slidev-layout content-m h-full w-full flex">
    <!-- Main content area -->
    <div class="flex-1 bg-white p-8 flex flex-col">
      <div class="content-wrapper">
        <slot></slot>
      </div>
    </div>
    
    <!-- Right sidebar with pattern - show right edge of full background -->
    <div class="w-[240px] h-full" :style="{ backgroundImage: `url(${bgM})`, backgroundSize: 'auto 100%', backgroundPosition: 'right center' }"></div>
  </div>
</template>

<style scoped>
.content-wrapper :deep(h1) {
  @apply text-[48pt] leading-[52pt] font-bold text-black mb-2;
}

.content-wrapper :deep(h2) {
  @apply text-[18pt] leading-[22pt] font-bold text-black mb-4;
}

.content-wrapper :deep(p) {
  @apply text-[14pt] leading-[20pt] text-black;
}
</style>
