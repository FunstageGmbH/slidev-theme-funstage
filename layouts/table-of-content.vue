<script setup lang="ts">
import BrandDecor from "../components/brand-decor.vue";

type Item = {
  title?: string
  number: number
}
const props = withDefaults(defineProps<{
  items?: Item[]
}>(), {
  items: () => ([
    { number: 1 }, { number: 2 }, { number: 3 }, { number: 4 }, { number: 5 },
    { number: 6 }, { number: 7 }, { number: 8 }, { number: 9 }, { number: 10 },
  ]),
})

defineOptions({
  inheritAttrs: false
})
</script>

<template>
  <div class="slidev-layout toc">
    <PresentationProgress />
    <BrandDecor :showRibbon="false" :showLogo="true" :ribbonColor="'Secondary'" />
    <header class="toc__header">
      <slot />
    </header>

    <div class="toc__grid">
      <div v-for="it in props.items" :key="it.number" class="toc__cell">
        <div
            class="toc__num"
            :class="{
            teal: it.number % 3 === 2 ,
            royal: it.number % 3 === 0,
            blue: it.number % 3 === 1,
          }"
        >
          {{ String(it.number).padStart(2, '0') }}
        </div>

        <div class="toc__card funstage-card">
          <div class="toc__card-text">
            {{ it.title || 'Click to add text' }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.toc {
  @apply relative w-full h-full p-[var(--funstage-gap-md)] bg-white text-black box-border;
}

.toc__header {
  @apply font-bold m-0 mb-[var(--funstage-gap-md)];
  font-size: clamp(1.2rem, 2vw, 1.6rem);
}

.toc__grid {
  @apply grid grid-cols-5 items-start justify-items-center;
  grid-auto-rows: 1fr;
  gap: clamp(1.2rem, 2.4vw, 2rem);
}

.toc__cell {
  @apply grid items-start justify-items-center;
  grid-template-rows: auto auto;
}

.toc__num {
  @apply font-bold leading-none text-[var(--funstage-royal)];
  font-size: clamp(3.2rem, 10vw, 6.5rem);
}

.toc__num.teal { @apply text-[var(--funstage-teal)]; }
.toc__num.royal { @apply text-[var(--funstage-royal)]; }
.toc__num.blue { @apply text-[var(--funstage-blue)]; }

.toc__card {
  @apply border border-[var(--funstage-gray)] rounded-lg bg-white shadow-none flex items-center justify-center;
  width: clamp(9rem, 10vw, 10rem);
  margin-top: clamp(0.6rem, 1.2vw, 1rem);
}

.toc__card-text {
  @apply text-center;
  font-size: clamp(0.9rem, 1.3vw, 1.05rem);
}

.toc__logo {
  @apply absolute top-3 right-3 pointer-events-none;
  width: clamp(36px, 4vw, 54px);
}
</style>
