<script setup lang="ts">
import { computed } from 'vue'

const logoSquare = new URL('../public/logo-square.png', import.meta.url).href

type Member = {
  name: string
  role?: string
  focus?: string
  photo?: string
}

const props = withDefaults(
  defineProps<{
    members?: Member[]
  }>(),
  {
    members: () => [],
  },
)

defineOptions({
  inheritAttrs: false
})

const memberList = computed(() => props.members ?? [])
</script>

<template>
  <div class="team">
    <PresentationProgress />
    <header class="team__header">
      <slot />
    </header>
    <div class="team__grid">
      <article v-for="member in memberList" :key="member.name" class="team__member funstage-card">
        <img :src="member.photo || logoSquare" class="team__photo" :alt="member.name" />
        <h2 class="team__name">{{ member.name }}</h2>
        <p v-if="member.role" class="team__role">{{ member.role }}</p>
        <p v-if="member.focus" class="team__focus">{{ member.focus }}</p>
      </article>
    </div>
  </div>
</template>

<style scoped>
.team {
  @apply h-full flex flex-col gap-[var(--funstage-gap-md)] bg-white text-black;
  padding: clamp(3rem, 6vw, 6rem);
}

.team__header {
  @apply flex flex-wrap gap-[var(--funstage-gap-md)] justify-between items-end;
}

.team__subtitle {
  @apply uppercase tracking-wide text-[0.95rem] m-0 mb-1 text-[var(--funstage-royal)];
}

.team__title {
  @apply m-0;
  font-size: clamp(2.4rem, 4.5vw, 3.6rem);
}

.team__intro {
  @apply max-w-[60ch] mt-3;
  font-size: clamp(1.05rem, 2vw, 1.4rem);
}

.team__slot {
  @apply flex-1 text-right text-[1.05rem];
  flex-basis: 15rem;
}

.team__grid {
  @apply grid gap-[var(--funstage-gap-md)];
  grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
}

.team__member {
  @apply text-center bg-white/95 border border-black/8;
}

.team__photo {
  @apply w-30 aspect-square rounded-full object-cover mx-auto mb-5 border-4 border-[var(--funstage-blue)];
  box-shadow: 0 20px 45px rgba(8, 149, 254, 0.2);
}

.team__name {
  @apply text-[1.3rem] m-0;
}

.team__role {
  @apply italic mt-1;
}

.team__focus {
  @apply mt-3 text-[0.95rem] text-black/75;
}
</style>
