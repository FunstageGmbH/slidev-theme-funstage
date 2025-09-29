<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    chapter?: string
    title?: string
    strapline?: string
    summary?: string
  }>(),
  {
    chapter: '',
    title: '',
    strapline: '',
    summary: '',
  },
)

const ribbon = new URL('../assets/funstage/ribbon-diagonal.png', import.meta.url).href
</script>

<template>
  <div class="chapter">
    <div class="chapter__pattern" :style="{ backgroundImage: `url(${ribbon})` }" aria-hidden="true" />
    <div class="chapter__main">
      <div v-if="props.chapter" class="chapter__index">{{ props.chapter }}</div>
      <div class="chapter__headline">
        <p v-if="props.strapline" class="chapter__strapline funstage-pill">{{ props.strapline }}</p>
        <h1 v-if="props.title" class="chapter__title">{{ props.title }}</h1>
        <p v-if="props.summary" class="chapter__summary">{{ props.summary }}</p>
      </div>
    </div>
    <div class="chapter__aside">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.chapter {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 3fr) minmax(0, 2fr);
  gap: var(--funstage-gap-lg);
  height: 100%;
  padding: clamp(3rem, 6vw, 6rem);
  background-color: var(--funstage-blue);
  color: var(--funstage-white);
  overflow: hidden;
}

.chapter__pattern {
  position: absolute;
  inset: 0;
  background-position: -10% 120%;
  background-size: 120%;
  background-repeat: no-repeat;
  opacity: 0.2;
  mix-blend-mode: screen;
}

.chapter__main,
.chapter__aside {
  position: relative;
  z-index: 2;
}

.chapter__index {
  font-family: var(--funstage-font-heading);
  font-size: clamp(5rem, 12vw, 12rem);
  font-weight: 700;
  line-height: 0.8;
  color: var(--funstage-teal);
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.35);
}

.chapter__headline {
  margin-top: var(--funstage-gap-sm);
  display: flex;
  flex-direction: column;
  gap: var(--funstage-gap-sm);
}

.chapter__strapline {
  align-self: flex-start;
  background-color: var(--funstage-teal);
  color: var(--funstage-black);
}

.chapter__title {
  font-family: var(--funstage-font-heading);
  font-size: clamp(3.2rem, 6vw, 4.8rem);
  line-height: 1.05;
  margin: 0;
}

.chapter__summary {
  font-size: clamp(1.1rem, 2.2vw, 1.6rem);
  max-width: 60ch;
}

.chapter__aside {
  align-self: center;
  padding: clamp(1.5rem, 3vw, 2.5rem);
  border-left: 2px solid rgba(255, 255, 255, 0.4);
  font-size: clamp(1.1rem, 2vw, 1.5rem);
}

:slotted(ul) {
  margin: 0;
  padding-left: 1.2em;
  display: grid;
  gap: 0.75em;
}

:slotted(li) {
  font-family: var(--funstage-font-body);
}
</style>
