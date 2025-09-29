<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    eyebrow?: string
    title?: string
    caption?: string
    metric?: string
    description?: string
    image?: string
  }>(),
  {
    eyebrow: '',
    title: '',
    caption: '',
    metric: '',
    description: '',
    image: '',
  },
)

const fallback = new URL('../assets/funstage/logo-square.png', import.meta.url).href
const pattern = new URL('../assets/funstage/pattern-small.png', import.meta.url).href
</script>

<template>
  <div class="detail">
    <div class="detail__pattern" :style="{ backgroundImage: `url(${pattern})` }" aria-hidden="true" />
    <div class="detail__media">
      <div class="detail__photo-wrap">
        <img :src="props.image || fallback" alt="" class="detail__photo" />
      </div>
      <p v-if="props.caption" class="detail__caption">{{ props.caption }}</p>
      <p v-if="props.metric" class="detail__metric">{{ props.metric }}</p>
    </div>
    <div class="detail__content">
      <span v-if="props.eyebrow" class="funstage-pill">{{ props.eyebrow }}</span>
      <h1 v-if="props.title" class="detail__title">{{ props.title }}</h1>
      <p v-if="props.description" class="detail__description">{{ props.description }}</p>
      <slot />
    </div>
  </div>
</template>

<style scoped>
.detail {
  position: relative;
  height: 100%;
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(0, 2fr);
  align-items: center;
  gap: var(--funstage-gap-lg);
  padding: clamp(3rem, 6vw, 6rem);
  background-color: var(--funstage-white);
  overflow: hidden;
}

.detail__pattern {
  position: absolute;
  inset: 0;
  background-position: right bottom;
  background-repeat: no-repeat;
  background-size: 80%;
  opacity: 0.35;
  pointer-events: none;
}

.detail__media,
.detail__content {
  position: relative;
  z-index: 2;
}

.detail__photo-wrap {
  width: clamp(10rem, 20vw, 16rem);
  aspect-ratio: 1;
  border-radius: 50%;
  border: 8px solid var(--funstage-teal);
  display: grid;
  place-items: center;
  overflow: hidden;
  box-shadow: 0 35px 65px rgba(0, 0, 0, 0.2);
}

.detail__photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.detail__caption {
  margin-top: 1.5rem;
  font-size: 1.05rem;
  font-style: italic;
  color: rgba(0, 0, 0, 0.75);
}

.detail__metric {
  margin-top: 0.5rem;
  font-family: var(--funstage-font-heading);
  font-size: clamp(1.5rem, 3vw, 2.4rem);
  color: var(--funstage-blue);
}

.detail__content {
  display: grid;
  gap: var(--funstage-gap-sm);
  max-width: 65ch;
}

.detail__title {
  font-family: var(--funstage-font-heading);
  font-size: clamp(2.4rem, 5vw, 3.6rem);
  margin: 0;
}

.detail__description {
  font-size: clamp(1.1rem, 2vw, 1.5rem);
}

:slotted(ul) {
  margin: 0;
  padding-left: 1.1em;
  display: grid;
  gap: 0.6em;
}
</style>
