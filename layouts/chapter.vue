<script setup lang="ts">
const props = withDefaults(defineProps<{
  heading?: string
  chapter?: number
}>(), {
  heading: 'Click to add title',
  chapter: 1
})

const ribbon = new URL('../assets/funstage/ribbon-diagonal.png', import.meta.url).href
</script>

<template>
  <div class="slidev-layout chapter">
    <!-- decorative ribbon -->
    <img :src="ribbon" alt="" class="chapter__ribbon" aria-hidden="true" />

    <!-- content box -->
    <div class="chapter__box">
      <h1 class="chapter__title">{{ props.heading }}</h1>
      <div class="chapter__subtitle">
        <slot></slot>
      </div>
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
  position: relative;
  width: 100%;
  height: 100%;
  background: var(--funstage-blue);
  color: var(--funstage-black);
  padding: clamp(1rem, 2.2vw, 1.6rem);
  overflow: hidden;
  box-sizing: border-box;
}

/* Ribbon on top-left, rotated diagonally out of the frame */
.chapter__ribbon {
  position: absolute;
  top: -18%;
  left: -6%;
  width: 60%;
  max-width: 48rem;
  opacity: 1;
  pointer-events: none;
}

/* Title + subtitle framed box */
.chapter__box {
  position: absolute;
  left: clamp(1.6rem, 3.3vw, 2.2rem);
  top: clamp(9rem, 24vh, 10rem);
  right: clamp(12rem, 22vw, 22rem);
  padding: clamp(0.8rem, 1.6vw, 1.1rem) clamp(1rem, 2vw, 1.4rem);
  box-sizing: border-box;
}

.chapter__title {
  margin: 0;
  padding: 0;
  font-weight: 700;
  font-size: clamp(2.2rem, 7vw, 4.6rem);
  line-height: 1.05;
  color: var(--funstage-black);
}

.chapter__subtitle {
  margin: clamp(0.6rem, 1.2vw, 0.8rem) 0 0;
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: var(--funstage-white);
  padding-top: clamp(0.6rem, 1.2vw, 0.8rem);
}

/* Big corner number */
.chapter__number {
  position: absolute;
  right: clamp(1.2rem, 2vw, 1.6rem);
  bottom: clamp(0.6rem, 1.6vw, 1rem);
  font-weight: 700;
  line-height: 0.9;
  font-size: 16rem;
  color: var(--funstage-teal);
  opacity: 1;
}
.chapter__number.teal { color: var(--funstage-teal); }
.chapter__number.royal { color: var(--funstage-royal); }
</style>
