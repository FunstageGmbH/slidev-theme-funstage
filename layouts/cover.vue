<script setup lang="ts">
import logo from '../assets/logo-full.png'
import ribbon from '../assets/ribbon.png'
</script>

<template>
  <FsBase name="cover" bg="#ffffff" :title="[44.22, 164.77, 742.99, 447.81]" style="--t-size: 96px">
    <slot />
    <template #over>
      <FsPic :src="logo" :box="[44.22, 33.66, 293.8, 76.57]" />
      <FsPic :src="ribbon" :box="[590.16, 360, 689.84, 360]" :crop="[21498, 18423, 24608, 26893]" />
    </template>
  </FsBase>
</template>
