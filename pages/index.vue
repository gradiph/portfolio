<template>
  <div>
    <Header />

    <main class="bg-green-100 min-h-screen">
      <PageIndexMain />
      <PageIndexIntro />
    </main>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

useHead({
  title: t('Gradi\'s Portfolio')
})
</script>
