<script setup lang="ts">
import pattern from '../assets/pattern-m.png'

withDefaults(defineProps<{ headers?: string[] }>(), { headers: () => [] })

const xs = [40.2, 215.31, 390.28, 565.38, 740.49, 915.46]
</script>

<template>
  <FsBase
    name="table" :bg-image="pattern"
    :title="[34.62, 32.57, 1062.65, 87.43]" :subtitle="[34.62, 122.28, 1062.65, 39.02]" :body="[34.62, 188.16, 1062.65, 113.54]"
  >
    <slot />
    <template #over>
      <template v-for="(x, i) in xs" :key="i">
        <div class="fs-box fs-table-head" :style="{ left: `${x}px` }">{{ headers[i] }}</div>
        <div class="fs-box fs-table-cell" :style="{ left: `${x}px` }"><slot :name="`col${i + 1}`" /></div>
      </template>
    </template>
  </FsBase>
</template>

<style>
.slidev-layout.fs .fs-table-head { top: 334.29px; width: 175.12px; height: 24.85px; font-size: 16px; font-weight: 700; text-align: center; }
.slidev-layout.fs .fs-table-cell { top: 382.67px; width: 175.12px; height: 223.65px; font-size: 16px; font-weight: 500; }
.slidev-layout.fs .fs-table-cell > * + * { margin-top: 13.333px; }
</style>
