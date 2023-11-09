<template>
  <div class="background">
    <Header />
    <Hero class="main-hero">
      Gradiyanto Putera Husein

      <template #subtitle>
        {{ t('Fullstack Developer') }}
      </template>
    </Hero>
    <div class="main-photo">
      <img src="/photo.jpg" alt="photo" class="photo">
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

useHead({
  title: t('Gradi\'s Portfolio')
})
</script>

<style scoped lang="postcss">
.background {
  @apply bg-green-100 min-h-screen;
}
.main-hero {
  @apply pt-32 pb-12;
}
.main-photo {
  @apply rounded;
}
.photo {
  @apply h-64 mx-auto rounded-full;
}
</style>
