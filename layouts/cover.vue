<script setup lang="ts">
type Contact = {
  value: string
  href?: string
}
const props = withDefaults(
    defineProps<{
      header?: string
      contacts?: Contact[]
      hasBg?: boolean
    }>(),
    {
      header: '',
      contacts: () => [],
      hasBg: false,
    },
)

const logo = new URL('../assets/funstage/logo-horizontal.png', import.meta.url).href
const ribbon = new URL('../assets/funstage/ribbon-diagonal.png', import.meta.url).href
</script>

<template>
  <div class="slidev-layout cover" :class="{ 'cover-with-bg': props.hasBg }">
    <PresentationProgress />
    <div class="cover__main">
      <h1 v-if="props.header" class="cover__header !leading-[4rem]">{{ props.header }}</h1>
      <div class="cover__content">
        <slot></slot>
      </div>

    </div>
    <div class="cover__aside">
      <img :src="logo" alt="Funstage" class="cover__logo"/>
      <div class="cover__address">
        <p class="cover__address_title">Funstage GMBH</p>
        <div v-if="props.contacts && props.contacts.length">
          <span v-for="contact in props.contacts" :key="contact.label" class="cover__contact">
            <a v-if="contact.href" :href="contact.href" class="cover__contact-value">{{ contact.value }}</a>
            <span v-else class="cover__contact-value">{{ contact.value }}</span>
            <br/>
          </span>
        </div>
        <!--        <p>Wiedner Hauptstrasse 94</p>
                <p>A-1050 Vienna</p>
                <p>business@funstage.com</p>
                <p>www.funstage.com</p>
                <p>+43 1 90 171</p>-->
      </div>

    </div>
  </div>
  <img :src="ribbon" alt="Funstage ribbon motif" class="cover__ribbon" aria-hidden="true"/>
</template>

<style scoped>
.cover {
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: var(--funstage-gap-md);
  padding: clamp(2rem, 2vw, 3rem);
  background-color: var(--funstage-blue);
  color: var(--funstage-black);
  overflow: hidden;

}
.cover-with-bg{
  background-image: url("assets/IntroBG.png");
  background-repeat: no-repeat;
  background-size: cover;
}

.cover__main {
  width: 75%;
}

.cover__aside {
  width: 25%;
  //border-left: 1px solid var(--slidev-border-color);
  height: fit-content;
  padding-left: 1.5rem;
}

.cover__logo {
  object-fit: contain;
  z-index: 2;
}

.cover__address {
  color: var(--funstage-white);
  font-size: 0.6rem;
  line-height: 0.8rem;
}

.cover__address_title {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
}

.cover__contact-value {
  color: var(--funstage-white);
  font-weight: 300;
  text-decoration: none;
  border: none
}

.cover__header {
  margin: var(--funstage-gap-sm) 0 0;
  font-weight: 600;
  font-size: clamp(3.4rem, 7vw, 5.6rem);
  line-height: 1.05;
}

.cover__content {
  margin: var(--funstage-gap-sm) 0 0;
  color: var(--funstage-white);
}

.cover__ribbon {
  position: absolute;
  right: -12%;
  bottom: -14%;
  width: 70%;
  max-width: 60rem;
  pointer-events: none;
}

.cover::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(140deg, rgba(8, 149, 254, 0.08) 0%, rgba(0, 255, 208, 0.18) 45%, rgba(255, 255, 255, 0) 75%);
  z-index: 1;
}
</style>
