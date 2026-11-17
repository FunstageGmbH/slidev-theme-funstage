<script setup lang="ts">
withDefaults(defineProps<{ heading?: string, items?: string[] }>(), { heading: 'Content', items: () => [] })

const nx = [83.33, 317.17, 551.0, 784.84, 1018.67]
const tx = [74.88, 300.27, 538.75, 771.17, 1008.65]
const colors = ['blue', 'mint', 'royal', 'blue', 'mint', 'royal', 'blue', 'mint', 'royal', 'blue']
const cells = Array.from({ length: 10 }, (_, i) => ({
  label: String(i + 1).padStart(2, '0'),
  color: `var(--fs-${colors[i]})`,
  nx: nx[i % 5],
  ny: i < 5 ? 202.07 : 443.03,
  tx: tx[i % 5],
  ty: i < 5 ? 328.83 : 571.36,
}))
</script>

<template>
  <FsBase name="overview" bg="#ffffff">
    <slot />
    <template #over>
      <div class="fs-box fs-overview-heading" style="left: 71.02px; top: 71.91px; width: 158.68px; height: 46.43px">{{ heading }}</div>
      <template v-for="(c, i) in cells" :key="i">
        <div class="fs-box fs-overview-number" :style="{ left: `${c.nx}px`, top: `${c.ny}px`, color: c.color }">{{ c.label }}</div>
        <div class="fs-box fs-overview-item" :style="{ left: `${c.tx}px`, top: `${c.ty}px` }">{{ items[i] }}</div>
      </template>
      <FsLogoMark />
    </template>
  </FsBase>
</template>

<style>
.slidev-layout.fs .fs-overview-heading { font-size: 24px; font-weight: 700; white-space: nowrap; }
.slidev-layout.fs .fs-overview-number { width: 158.68px; height: 46.43px; font-size: 114.667px; font-weight: 700; text-align: center; white-space: nowrap; }
.slidev-layout.fs .fs-overview-item { width: 175.56px; height: 114.2px; font-size: 24px; font-weight: 500; text-align: center; }
</style>
