<script setup lang="ts">
const props = withDefaults(defineProps<{
  showRibbon?: boolean
  showLogo?: boolean
  ribbonColor?: 'Accent' | 'Primary' | 'Secondary'
}>(), {
  showRibbon: false,
  showLogo: false,
  ribbonColor: 'Accent',
})
const ribbons = {
  Accent:    new URL('../assets/funstage/StripeAccent.png', import.meta.url).href,
  Primary:   new URL('../assets/funstage/StripePrimary.png', import.meta.url).href,
  Secondary: new URL('../assets/funstage/StripeSecondary.png', import.meta.url).href,
}
const logo = new URL('../assets/funstage/logo-square.png', import.meta.url).href
</script>

<template>
  <div class="brand-decor">
    <img v-if="props.showRibbon" :src="ribbons[props.ribbonColor]" alt="" class="decor__ribbon" aria-hidden="true" />
    <img v-if="props.showLogo" :src="logo" alt="" class="decor__logo" aria-hidden="true" />
  </div>
</template>

<style scoped>
.brand-decor {
  position: fixed; /* overlay every slide */
  inset: 0;
  pointer-events: none;
  z-index: 5;
}

.decor__ribbon {
  position: absolute;
  bottom: -18%;
  right: -2%;
  width: 60%;
  max-width: 48rem;
}

.decor__logo {
  position: absolute;
  top: 0.8rem;
  right: 0.8rem;
  width: clamp(36px, 4vw, 56px);
  height: auto;
}
</style>
