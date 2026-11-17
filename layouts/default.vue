<template>
  <FsBase
    name="no-pattern" bg="#ffffff"
    :title="[34.62, 32.57, 1132.72, 87.43]" :subtitle="[34.62, 125.07, 1132.72, 32.57]" :body="[34.62, 188.16, 1132.72, 489.61]"
  >
    <slot />
    <template #over><FsLogoMark /></template>
  </FsBase>
</template>
