<script setup>
const logo = new URL('../public/logo-horizontal.png', import.meta.url).href
const ribbon = new URL('../public/ribbon-diagonal.png', import.meta.url).href

defineOptions({
  inheritAttrs: false
})
</script>

<template>
  <div class="slidev-layout cover relative h-full w-full flex flex-row justify-center gap-[var(--funstage-gap-md)] p-[clamp(2rem,2vw,3rem)] bg-[var(--funstage-blue)] text-black overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-br before:from-[rgba(8,149,254,0.08)] before:via-[rgba(0,255,208,0.18)] before:to-transparent before:z-1">
<!--    <PresentationProgress />-->

    <!-- Main content area -->
    <div class="w-3/4">
      <div class="mt-[var(--funstage-gap-sm)] text-white [&>h1]:text-[40pt] [&>h1]:leading-[40pt] [&>h1]:font-bold [&>h1]:text-black [&>h2]:text-[26pt] [&>h2]:leading-[26pt] [&>h2]:mt-6 [&>h2]:text-white [&>h2]:font-bold">
        <slot></slot>
      </div>
    </div>

    <!-- Aside with logo and address -->
    <div class="w-1/4 border-l border-[var(--slidev-border-color)] h-fit pl-6">
      <img :src="logo" alt="Funstage" class="object-contain z-2"/>
      <div class="ml-2 text-white text-[0.6rem] leading-[0.8rem]">
        <p class="text-base font-semibold mb-2 mt-2">Funstage GMBH</p>
        <div class="text-white text-xs">
          <p>Wiedner Hauptstrasse 94</p>
          <p>A-1050 Vienna</p>
          <p>business@funstage.com</p>
          <p>www.funstage.com</p>
          <p>+43 1 90 171</p>
        </div>
      </div>
    </div>

    <!-- Ribbon inside main container -->
    <img :src="ribbon" alt="Funstage ribbon motif" class="absolute right-[-12%] bottom-[-14%] w-[70%] max-w-[60rem] pointer-events-none" aria-hidden="true"/>
  </div>
</template>
