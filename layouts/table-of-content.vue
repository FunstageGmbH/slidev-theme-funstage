<script setup lang="ts">
// v1 name, kept so existing decks keep working. Same as `overview`.
import Layout from './overview.vue'
</script>

<template>
  <Layout v-bind="$attrs"><slot /></Layout>
</template>
