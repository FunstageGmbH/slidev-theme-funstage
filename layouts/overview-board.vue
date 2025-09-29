<script setup lang="ts">
import { computed } from 'vue'

type OverviewItem = {
  index?: string | number
  label: string
  description?: string
}

const props = withDefaults(
  defineProps<{
    title?: string
    eyebrow?: string
    items?: OverviewItem[]
  }>(),
  {
    title: 'Content',
    eyebrow: '',
    items: () => [],
  },
)

const logo = new URL('../assets/funstage/logo-square.png', import.meta.url).href

const displayItems = computed(() => {
  return (props.items ?? []).map((item, idx) => ({
    index: item.index ?? String(idx + 1).padStart(2, '0'),
    label: item.label,
    description: item.description ?? '',
  }))
})
</script>

<template>
  <div class="overview">
    <header class="overview__header">
      <img :src="logo" alt="Funstage" class="overview__logo" />
      <div>
        <p v-if="props.eyebrow" class="overview__eyebrow">{{ props.eyebrow }}</p>
        <h1 class="overview__title">{{ props.title }}</h1>
        <div class="overview__lead">
          <slot />
        </div>
      </div>
    </header>
    <div class="overview__grid">
      <article v-for="item in displayItems" :key="item.index" class="overview__item funstage-card">
        <span class="overview__index">{{ item.index }}</span>
        <h2 class="overview__label">{{ item.label }}</h2>
        <p v-if="item.description" class="overview__description">{{ item.description }}</p>
      </article>
    </div>
  </div>
</template>

<style scoped>
.overview {
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--funstage-gap-lg);
  padding: clamp(3rem, 6vw, 6rem);
  background-color: var(--funstage-white);
  color: var(--funstage-black);
}

.overview__header {
  display: flex;
  gap: var(--funstage-gap-md);
  align-items: flex-start;
}

.overview__logo {
  width: clamp(4rem, 8vw, 6rem);
  object-fit: contain;
}

.overview__eyebrow {
  font-family: var(--funstage-font-heading);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.95rem;
  margin: 0 0 0.4rem;
  color: var(--funstage-royal);
}

.overview__title {
  font-family: var(--funstage-font-heading);
  font-size: clamp(2.6rem, 5vw, 3.8rem);
  margin: 0;
}

.overview__lead {
  margin-top: 1.1rem;
  font-size: clamp(1.05rem, 2vw, 1.4rem);
  max-width: 65ch;
}

.overview__grid {
  display: grid;
  gap: var(--funstage-gap-md);
  grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
}

.overview__item {
  position: relative;
  padding-top: 2.25rem;
  min-height: 13rem;
  background: rgba(255, 255, 255, 0.92);
  border: 1px solid rgba(0, 0, 0, 0.08);
}

.overview__index {
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  font-family: var(--funstage-font-heading);
  font-size: 2.3rem;
  font-weight: 700;
  color: var(--funstage-blue);
}

.overview__label {
  font-family: var(--funstage-font-heading);
  font-size: 1.4rem;
  margin: 0 0 0.8rem;
}

.overview__description {
  margin: 0;
  font-size: 1.05rem;
  color: rgba(0, 0, 0, 0.7);
}
</style>
