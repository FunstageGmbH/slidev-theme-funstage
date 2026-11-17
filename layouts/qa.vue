<script setup lang="ts">
import logo from '../assets/logo-full.png'
import ribbon from '../assets/ribbon.png'

withDefaults(defineProps<{ company?: string, address?: string[] }>(), {
  company: 'Funstage GMBH',
  address: () => ['Wiedner Hauptstrasse 94', 'A-1050 Vienna', 'business@funstage.com', 'www.funstage.com', '+43 1 90 171'],
})
</script>

<template>
  <FsBase
    name="qa" bg="#0895fe"
    :title="[44.22, 48.18, 908.09, 87.43]" :body="[45.18, 138.16, 909.8, 360]"
    style="--b-weight: 700; --b-color: #ffffff"
  >
    <slot />
    <template #over>
      <div class="fs-qa-address"><div v-for="line in address" :key="line">{{ line }}</div></div>
      <div class="fs-qa-rule" />
      <FsPic :src="logo" :box="[1013.99, 48.44, 235.61, 61.4]" />
      <div class="fs-box fs-qa-company">{{ company }}</div>
      <FsPic :src="ribbon" :box="[590.16, 360, 689.84, 360]" :crop="[21500, 18426, 24607, 26889]" />
    </template>
  </FsBase>
</template>

<style>
.slidev-layout.fs .fs-qa-address { position: absolute; left: 1023.93px; top: 152.14px; width: 238.8px; transform: translateY(var(--fs-shift100)); font-size: 16px; font-weight: 500; line-height: var(--fs-lh); color: #ffffff; white-space: nowrap; }
.slidev-layout.fs .fs-qa-rule { position: absolute; left: 982.48px; top: 55.98px; width: 1px; height: 186.33px; background: #d8d8d8; }
.slidev-layout.fs .fs-qa-company { left: 1013.63px; top: 110px; width: 205.01px; height: 38.77px; font-size: 24px; font-weight: 700; line-height: var(--fs-lh); color: #ffffff; white-space: nowrap; transform: translateY(var(--fs-shift100)); }
</style>
