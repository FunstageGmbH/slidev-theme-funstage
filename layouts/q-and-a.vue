<script setup lang="ts">
type Contact = {
  label: string
  value: string
  href?: string
}

const props = withDefaults(
  defineProps<{
    title?: string
    subtitle?: string
    contacts?: Contact[]
    footerNote?: string
  }>(),
  {
    title: 'Questions? Let’s talk.',
    subtitle: '',
    contacts: () => [],
    footerNote: '',
  },
)

const logo = new URL('../assets/funstage/logo-horizontal.png', import.meta.url).href
const ribbon = new URL('../assets/funstage/ribbon-diagonal.png', import.meta.url).href
</script>

<template>
  <div class="qa">
    <div class="qa__pattern" :style="{ backgroundImage: `url(${ribbon})` }" aria-hidden="true" />
    <header class="qa__header">
      <h1 class="qa__title">{{ props.title }}</h1>
      <p v-if="props.subtitle" class="qa__subtitle">{{ props.subtitle }}</p>
    </header>
    <div class="qa__content">
      <div class="qa__slot">
        <slot />
      </div>
      <div class="qa__contacts">
        <img :src="logo" alt="Funstage" class="qa__logo" />
        <ul v-if="props.contacts && props.contacts.length" class="qa__list">
          <li v-for="contact in props.contacts" :key="contact.label" class="qa__contact">
            <span class="qa__contact-label">{{ contact.label }}</span>
            <a v-if="contact.href" :href="contact.href" class="qa__contact-value">{{ contact.value }}</a>
            <span v-else class="qa__contact-value">{{ contact.value }}</span>
          </li>
        </ul>
      </div>
    </div>
    <footer v-if="props.footerNote" class="qa__footer">{{ props.footerNote }}</footer>
  </div>
</template>

<style scoped>
.qa {
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--funstage-gap-md);
  padding: clamp(3rem, 6vw, 6rem);
  background: radial-gradient(circle at top left, rgba(0, 255, 208, 0.35), transparent 55%), var(--funstage-blue);
  color: var(--funstage-white);
  overflow: hidden;
}

.qa__pattern {
  position: absolute;
  inset: 0;
  background-position: 120% 120%;
  background-repeat: no-repeat;
  background-size: 110%;
  opacity: 0.25;
  mix-blend-mode: screen;
  pointer-events: none;
}

.qa__header {
  position: relative;
  z-index: 2;
  max-width: 50ch;
}

.qa__title {
  font-family: var(--funstage-font-heading);
  font-size: clamp(3rem, 6vw, 4.6rem);
  margin: 0;
}

.qa__subtitle {
  font-size: clamp(1.2rem, 2.2vw, 1.6rem);
  margin-top: 1rem;
}

.qa__content {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(18rem, 24rem);
  gap: var(--funstage-gap-lg);
  align-items: flex-start;
}

.qa__slot {
  font-size: clamp(1.1rem, 2.1vw, 1.5rem);
}

.qa__contacts {
  display: grid;
  gap: 1.5rem;
  justify-items: end;
  text-align: right;
}

.qa__logo {
  width: clamp(10rem, 18vw, 16rem);
  object-fit: contain;
}

.qa__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 0.75rem;
}

.qa__contact {
  display: grid;
  gap: 0.1rem;
}

.qa__contact-label {
  font-family: var(--funstage-font-heading);
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.75);
}

.qa__contact-value {
  font-size: 1.05rem;
  color: var(--funstage-white);
  text-decoration: none;
}

.qa__contact-value:hover {
  text-decoration: underline;
}

.qa__footer {
  position: relative;
  z-index: 2;
  margin-top: auto;
  font-family: var(--funstage-font-heading);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.95rem;
}
</style>
