<script setup lang="ts">
interface Member { name?: string, role?: string, image?: string }
withDefaults(defineProps<{ members?: Member[] }>(), { members: () => [] })

const px = [45.39, 291.31, 527.47, 763.63, 999.79]
const rx = [45.39, 289.87, 526.67, 761.87, 1001.23]
</script>

<template>
  <FsBase name="team" bg="#ffffff" :title="[34.62, 118.01, 718.99, 87.43]">
    <slot />
    <template #over>
      <template v-for="(x, i) in px" :key="i">
        <div class="fs-media fs-round" :style="{ left: `${x}px`, top: '279.64px', width: '175.56px', height: '175.56px', backgroundImage: members[i]?.image ? `url(${members[i].image})` : undefined, visibility: members[i]?.image ? 'visible' : 'hidden' }" />
        <div class="fs-box fs-team-name" :style="{ left: `${x}px` }">{{ members[i]?.name }}</div>
        <div class="fs-box fs-team-role" :style="{ left: `${rx[i]}px` }">{{ members[i]?.role }}</div>
      </template>
      <FsLogoMark />
    </template>
  </FsBase>
</template>

<style>
.slidev-layout.fs .fs-team-name { top: 481.38px; width: 175.56px; height: 59.81px; font-size: 24px; font-weight: 400; text-align: center; }
.slidev-layout.fs .fs-team-role { top: 547.94px; width: 175.56px; height: 59.81px; font-size: 18.667px; font-weight: 700; text-align: center; }
</style>
