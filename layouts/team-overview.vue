<script setup lang="ts">
// v1 name, kept so existing decks keep working. Same as `team`.
import Layout from './team.vue'
</script>

<template>
  <Layout v-bind="$attrs"><slot /></Layout>
</template>
