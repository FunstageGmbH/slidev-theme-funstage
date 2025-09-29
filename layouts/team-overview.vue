<script setup lang="ts">
import { computed } from 'vue'

type Member = {
  name: string
  role?: string
  focus?: string
  photo?: string
}

const props = withDefaults(
  defineProps<{
    title?: string
    subtitle?: string
    intro?: string
    members?: Member[]
  }>(),
  {
    title: '',
    subtitle: '',
    intro: '',
    members: () => [],
  },
)

const fallback = new URL('../assets/funstage/logo-square.png', import.meta.url).href

const memberList = computed(() => props.members ?? [])
</script>

<template>
  <div class="team">
    <header class="team__header">
      <div>
        <p v-if="props.subtitle" class="team__subtitle">{{ props.subtitle }}</p>
        <h1 v-if="props.title" class="team__title">{{ props.title }}</h1>
        <p v-if="props.intro" class="team__intro">{{ props.intro }}</p>
      </div>
      <div class="team__slot">
        <slot />
      </div>
    </header>
    <div class="team__grid">
      <article v-for="member in memberList" :key="member.name" class="team__member funstage-card">
        <img :src="member.photo || fallback" class="team__photo" :alt="member.name" />
        <h2 class="team__name">{{ member.name }}</h2>
        <p v-if="member.role" class="team__role">{{ member.role }}</p>
        <p v-if="member.focus" class="team__focus">{{ member.focus }}</p>
      </article>
    </div>
  </div>
</template>

<style scoped>
.team {
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--funstage-gap-md);
  padding: clamp(3rem, 6vw, 6rem);
  background: var(--funstage-white);
  color: var(--funstage-black);
}

.team__header {
  display: flex;
  flex-wrap: wrap;
  gap: var(--funstage-gap-md);
  justify-content: space-between;
  align-items: flex-end;
}

.team__subtitle {
  font-family: var(--funstage-font-heading);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.95rem;
  margin: 0 0 0.4rem;
  color: var(--funstage-royal);
}

.team__title {
  font-family: var(--funstage-font-heading);
  font-size: clamp(2.4rem, 4.5vw, 3.6rem);
  margin: 0;
}

.team__intro {
  max-width: 60ch;
  font-size: clamp(1.05rem, 2vw, 1.4rem);
  margin-top: 0.75rem;
}

.team__slot {
  flex: 1 1 15rem;
  text-align: right;
  font-size: 1.05rem;
}

.team__grid {
  display: grid;
  gap: var(--funstage-gap-md);
  grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
}

.team__member {
  text-align: center;
  background: rgba(255, 255, 255, 0.95);
  border: 1px solid rgba(0, 0, 0, 0.08);
}

.team__photo {
  width: 7.5rem;
  aspect-ratio: 1;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 auto 1.2rem;
  border: 4px solid var(--funstage-blue);
  box-shadow: 0 20px 45px rgba(8, 149, 254, 0.2);
}

.team__name {
  font-family: var(--funstage-font-heading);
  font-size: 1.3rem;
  margin: 0;
}

.team__role {
  font-family: var(--funstage-font-body);
  font-style: italic;
  margin: 0.35rem 0 0;
}

.team__focus {
  margin: 0.75rem 0 0;
  font-size: 0.95rem;
  color: rgba(0, 0, 0, 0.75);
}
</style>
