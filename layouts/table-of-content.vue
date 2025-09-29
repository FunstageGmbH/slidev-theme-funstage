<script setup lang="ts">
type Item = {
  title?: string
  number: number
}
const props = withDefaults(defineProps<{
  header?: string
  items?: Item[]
}>(), {
  header: 'Content',
  items: () => ([
    { number: 1 }, { number: 2 }, { number: 3 }, { number: 4 }, { number: 5 },
    { number: 6 }, { number: 7 }, { number: 8 }, { number: 9 }, { number: 10 },
  ]),
})
</script>

<template>
  <div class="toc">
    <header class="toc__header">{{ props.header }}</header>

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

    <img src="/assets/funstage/logo-full.png" alt="" class="toc__logo" aria-hidden="true" />
  </div>
</template>

<style scoped>
.toc {
  position: relative;
  width: 100%;
  height: 100%;
  padding: var(--funstage-gap-md);
  background: var(--funstage-white);
  color: var(--funstage-black);
  box-sizing: border-box;
}

/* Header */
.toc__header {
  font-family: var(--funstage-font-heading);
  font-size: clamp(1.2rem, 2vw, 1.6rem);
  font-weight: 700;
  margin: 0 0 var(--funstage-gap-md);
}

/* Grid: two rows × five columns */
.toc__grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: 1fr;
  gap: clamp(1.2rem, 2.4vw, 2rem);
  align-items: start;
  justify-items: center;
}

/* One “slot” (number + card) */
.toc__cell {
  display: grid;
  grid-template-rows: auto auto;
  align-items: start;
  justify-items: center;
}

/* Giant numbers */
.toc__num {
  font-family: var(--funstage-font-heading);
  font-weight: 700;
  line-height: 1;
  font-size: clamp(3.2rem, 10vw, 6.5rem);
  color: var(--funstage-royal);
}

.toc__num.teal { color: var(--funstage-teal); }
.toc__num.royal { color: var(--funstage-royal); }
.toc__num.blue { color: var(--funstage-blue); }

/* Cards under numbers */
.toc__card {
  width: clamp(9rem, 10vw, 10rem);
  border: 1px solid var(--funstage-gray);
  border-radius: 0.5rem;
  background: #fff;
  box-shadow: none; /* keep it flat like screenshot; remove to reuse funstage-card shadow */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: clamp(0.6rem, 1.2vw, 1rem);
}

.toc__card-text {
  text-align: center;
  font-size: clamp(0.9rem, 1.3vw, 1.05rem);
}

/* Small logo at top-right */
.toc__logo {
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;
  width: clamp(36px, 4vw, 54px);
  height: auto;
  pointer-events: none;
}
</style>