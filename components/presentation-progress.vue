<script setup lang="ts">
import { computed } from 'vue'
import { useNav } from '@slidev/client'

// Slidev navigation state
const nav = useNav()

// Current is 1-based index the audience sees
const current = computed(() => nav.currentPage.value)
const total = computed(() => nav.total.value)

// Percent for the bar
const percent = computed(() => {
  const t = total.value || 1
  return Math.min(100, Math.max(0, (current.value / t) * 100))
})

const props = withDefaults(defineProps<{
  show?: boolean
}>(), {
  show: true,
})
</script>

<template>
  <div v-show="show" class="progress-box" role="status" aria-live="polite">
    <div class="row">
      <span class="label">Progress</span>
      <span class="count">
        {{ String(current).padStart(2, '0') }}/{{ String(total).padStart(2, '0') }}
      </span>
    </div>
    <div class="bar">
      <div class="fill" :style="{ width: percent + '%' }" />
    </div>
  </div>
</template>

<style scoped>
.progress-box {
  --box-bg: #fff;
  --box-border: var(--funstage-gray);
  --bar-bg: rgba(9, 102, 241, 0.15);      /* royal, low alpha */
  --bar-fill: var(--funstage-teal);       /* fill color */
  --text: var(--funstage-black);

  position: absolute;
  left: 1rem;
  bottom: 1rem;
  min-width: 200px;
  max-width: 320px;
  background: var(--box-bg);
  border: 1px solid var(--box-border);
  border-radius: 12px;
  color: var(--text);
  padding: 10px 12px;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);
  font-family: var(--funstage-font-family);
}

.row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 8px;
}

.label {
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--funstage-royal);
  font-weight: 700;
}

.count {
  font-weight: 700;
  font-size: 14px;
}

.bar {
  position: relative;
  width: 100%;
  height: 8px;
  background: var(--bar-bg);
  border-radius: 999px;
  overflow: hidden;
  border: 1px solid var(--funstage-gray);
}

.fill {
  height: 100%;
  background: linear-gradient(90deg, var(--funstage-blue), var(--funstage-teal));
  width: 0%;
  border-radius: 999px;
  transition: width 220ms ease-in-out;
}
</style>
