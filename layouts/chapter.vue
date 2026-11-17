<script setup lang="ts">
import ribbon from '../assets/ribbon.png'

import { computed } from 'vue'

// `number` is shown as given; a numeric value is padded to two digits.
const props = defineProps<{ number?: string | number }>()
const label = computed(() => typeof props.number === 'number' ? String(props.number).padStart(2, '0') : props.number)
</script>

<template>
  <FsBase
    name="chapter" bg="#0895fe"
    :title="[44.22, 316.29, 850.02, 87.43]" :body="[45.18, 403.71, 849.07, 170.96]"
    style="--b-weight: 700; --b-color: #ffffff"
  >
    <slot />
    <template #over>
      <div class="fs-box fs-chapter-number" style="left: 894.25px; top: 426.94px; width: 385.76px; height: 293.07px">{{ label }}</div>
      <FsPic :src="ribbon" :box="[0, 0, 1140.5, 339.49]" :crop="[10990, 44221, -91, 4209]" />
    </template>
  </FsBase>
</template>

<style>
.slidev-layout.fs .fs-chapter-number {
  font-size: 293.333px;
  font-weight: 700;
  color: var(--fs-mint);
  text-align: center;
  white-space: nowrap;
}
</style>
