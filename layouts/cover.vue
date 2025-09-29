<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title?: string
    subtitle?: string
    eyebrow?: string
    presenter?: string
    footerNote?: string
  }>(),
  {
    title: '',
    subtitle: '',
    eyebrow: '',
    presenter: '',
    footerNote: '',
  },
)

const logo = new URL('../assets/funstage/logo-horizontal.png', import.meta.url).href
const ribbon = new URL('../assets/funstage/ribbon-diagonal.png', import.meta.url).href
</script>

<template>
  <div class="cover">
    <img :src="logo" alt="Funstage" class="cover__logo" />
    <div class="cover__body">
      <span v-if="props.eyebrow" class="cover__eyebrow funstage-pill">{{ props.eyebrow }}</span>
      <h1 v-if="props.title" class="cover__title">{{ props.title }}</h1>
      <p v-if="props.subtitle" class="cover__subtitle">{{ props.subtitle }}</p>
      <p v-if="props.presenter" class="cover__presenter">{{ props.presenter }}</p>
      <slot />
    </div>
    <p v-if="props.footerNote" class="cover__footer">{{ props.footerNote }}</p>
    <img :src="ribbon" alt="Funstage ribbon motif" class="cover__ribbon" aria-hidden="true" />
  </div>
</template>

<style scoped>
.cover {
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--funstage-gap-md);
  padding: clamp(3rem, 6vw, 6rem);
  background-color: var(--funstage-white);
  color: var(--funstage-black);
  overflow: hidden;
}

.cover__logo {
  width: clamp(12rem, 20vw, 22rem);
  max-width: 45%;
  object-fit: contain;
  z-index: 2;
}

.cover__body {
  max-width: 60ch;
  z-index: 2;
}

.cover__eyebrow {
  margin-bottom: 1.5rem;
}

.cover__title {
  margin: var(--funstage-gap-sm) 0 0;
  font-family: var(--funstage-font-heading);
  font-weight: 600;
  font-size: clamp(3.4rem, 7vw, 5.6rem);
  line-height: 1.05;
}

.cover__subtitle {
  margin: var(--funstage-gap-sm) 0 0;
  font-size: clamp(1.3rem, 2.8vw, 2rem);
  font-family: var(--funstage-font-body);
}

.cover__presenter {
  margin-top: 1.5rem;
  font-size: clamp(1.1rem, 2vw, 1.5rem);
  font-family: var(--funstage-font-heading);
  font-weight: 600;
}

.cover__footer {
  margin-top: auto;
  font-size: 0.95rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-family: var(--funstage-font-heading);
  z-index: 2;
}

.cover__ribbon {
  position: absolute;
  right: -12%;
  bottom: -14%;
  width: 90%;
  max-width: 60rem;
  opacity: 0.9;
  pointer-events: none;
}

.cover::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(140deg, rgba(8, 149, 254, 0.08) 0%, rgba(0, 255, 208, 0.18) 45%, rgba(255, 255, 255, 0) 75%);
  z-index: 1;
}
</style>
