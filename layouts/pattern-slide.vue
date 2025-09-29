<script setup lang="ts">
import { computed } from 'vue'

const patterns = {
  large: new URL('../assets/funstage/pattern-large.png', import.meta.url).href,
  medium: new URL('../assets/funstage/pattern-medium.png', import.meta.url).href,
  small: new URL('../assets/funstage/pattern-small.png', import.meta.url).href,
}

const props = withDefaults(
  defineProps<{
    variant?: 'large' | 'medium' | 'small' | 'none'
    eyebrow?: string
    title?: string
    subtitle?: string
  }>(),
  {
    variant: 'large',
    eyebrow: '',
    title: '',
    subtitle: '',
  },
)

const patternStyle = computed(() => {
  if (props.variant === 'none')
    return {}

  const asset = patterns[props.variant] ?? patterns.large
  return {
    backgroundImage: `url(${asset})`,
  }
})
</script>

<template>
  <div class="pattern">
    <div v-if="props.variant !== 'none'" class="pattern__bg" :style="patternStyle" aria-hidden="true" />
    <div class="pattern__content">
      <div class="pattern__header">
        <span v-if="props.eyebrow" class="funstage-pill">{{ props.eyebrow }}</span>
        <h1 v-if="props.title" class="pattern__title">{{ props.title }}</h1>
        <p v-if="props.subtitle" class="pattern__subtitle">{{ props.subtitle }}</p>
      </div>
      <div class="pattern__slot">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.pattern {
  position: relative;
  height: 100%;
  width: 100%;
  background-color: var(--funstage-white);
  color: var(--funstage-black);
  overflow: hidden;
}

.pattern__bg {
  position: absolute;
  bottom: -12%;
  right: -6%;
  width: clamp(50%, 75vw, 80%);
  aspect-ratio: 16 / 9;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right bottom;
  pointer-events: none;
  opacity: 0.9;
}

.pattern__content {
  position: relative;
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr;
  gap: var(--funstage-gap-md);
  padding: clamp(3rem, 6vw, 6rem);
}

.pattern__header {
  max-width: 60ch;
  display: grid;
  gap: 1.2rem;
}

.pattern__title {
  font-family: var(--funstage-font-heading);
  font-size: clamp(2.6rem, 5vw, 4rem);
  margin: 0;
}

.pattern__subtitle {
  font-size: clamp(1.1rem, 2.2vw, 1.6rem);
  color: #1f1f1f;
  margin: 0;
}

.pattern__slot {
  font-size: clamp(1.05rem, 2vw, 1.45rem);
  max-width: 70ch;
}

:slotted(ul) {
  margin: 0;
  padding-left: 1.1em;
  display: grid;
  gap: 0.7em;
}

:slotted(li) {
  line-height: 1.35;
}
</style>
