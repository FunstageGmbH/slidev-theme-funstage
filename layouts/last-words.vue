<script setup lang="ts">
const props = withDefaults(
    defineProps<{
      header?: string
      subtitle?: string
    }>(),
    {
      header: '',
      subtitle: '',
    },
)

console.log(props)

</script>

<template>
  <div class="last-words">
    <div class="content-wrapper">
      <h1 class="title">{{ props.header }}</h1>
      <p class="subtitle">{{ props.subtitle }}</p>
    </div>
  </div>
</template>

<style scoped>
  .last-words {
    height: 100%;
    width: 100%;
    background-size: 75%;
    background-position: 138% -402%;
    background-repeat: no-repeat;
    background-image: url("assets/funstage/logo-full.png");
    background-color: white;
    padding: 20px;
  }
  
  .content-wrapper {
    width: 45%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  .title {
    font-size: 4rem;
    font-weight: bold;
  }
  
  .subtitle {
    font-size: 1.5rem;
  }
</style>
