<script setup lang="ts">
import BrandDecor from "../components/brand-decor.vue";
import PresentationProgress from "../components/presentation-progress.vue";

const props = withDefaults(defineProps<{
  showRibbon?: boolean
  showLogo?: boolean
  ribbonColor?: 'Accent' | 'Primary' | 'Secondary'
}>(), {
  showRibbon: false,
  showLogo: false,
  ribbonColor: 'Accent',
})
</script>

<template>
  <div class="slidev-layout toc">
    <PresentationProgress />
    <BrandDecor :showRibbon="props.showRibbon"
                :showLogo="props.showLogo"
                :ribbonColor="props.ribbonColor"  />
    <slot></slot>
  </div>
</template>

