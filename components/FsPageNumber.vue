<script setup lang="ts">
import { useSlideContext } from '@slidev/client'

const { $page } = useSlideContext()
</script>

<template>
  <div class="fs-page-number">{{ $page }}</div>
</template>
