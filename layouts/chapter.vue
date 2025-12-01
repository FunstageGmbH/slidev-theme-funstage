<script setup lang="ts">
const ribbon = new URL('../public/ribbon-diagonal.png', import.meta.url).href

const props = withDefaults(defineProps<{
  chapter?: number
}>(), {
  chapter: 1
})

defineOptions({
  inheritAttrs: false
})
</script>

<template>
  <div class="slidev-layout chapter">
    <PresentationProgress />
    <!-- decorative ribbon -->
    <img :src="ribbon" alt="" class="chapter__ribbon" aria-hidden="true" />

    <!-- content box -->
    <div class="chapter__box">
      <slot></slot>
    </div>

    <!-- giant index number -->
    <div class="chapter__number" :class="{
            teal: props.chapter % 3 === 2 || props.chapter % 3 === 1,
            royal: props.chapter % 3 === 0,
          }">
      {{ String(props.chapter).padStart(2, '0') }}
    </div>
  </div>
</template>

<style scoped>
.chapter {
  @apply relative w-full h-full bg-[var(--funstage-blue)] text-black overflow-hidden box-border;
  padding: clamp(1rem, 2.2vw, 1.6rem);
}

.chapter__ribbon {
  @apply absolute pointer-events-none;
  top: -18%;
  left: -6%;
  width: 60%;
  max-width: 48rem;
}

.chapter__box {
  @apply absolute box-border;
  left: clamp(1.6rem, 3.3vw, 2.2rem);
  top: clamp(9rem, 24vh, 10rem);
  right: clamp(12rem, 22vw, 22rem);
  padding: clamp(0.8rem, 1.6vw, 1.1rem) clamp(1rem, 2vw, 1.4rem);
}

.chapter__box :deep(h1) {
  @apply m-0 p-0 font-bold text-black;
  font-size: clamp(2.2rem, 7vw, 4.6rem);
  line-height: 1.05;
}

.chapter__box :deep(h2),
.chapter__box :deep(p) {
  @apply text-white;
  margin: clamp(0.6rem, 1.2vw, 0.8rem) 0 0;
  font-size: clamp(1rem, 2vw, 1.25rem);
  padding-top: clamp(0.6rem, 1.2vw, 0.8rem);
}

.chapter__number {
  @apply absolute font-bold text-[var(--funstage-teal)];
  right: clamp(1.2rem, 2vw, 1.6rem);
  bottom: clamp(0.6rem, 1.6vw, 1rem);
  font-size: 16rem;
  line-height: 0.9;
}

.chapter__number.teal { @apply text-[var(--funstage-teal)]; }
.chapter__number.royal { @apply text-[var(--funstage-royal)]; }
</style>
