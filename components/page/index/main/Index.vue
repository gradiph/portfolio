<template>
  <section class="mb-6">
    <Hero class="pt-32 pb-12">
      Gradiyanto Putera Husein

      <template #subtitle>
        {{ t('Fullstack Developer') }}
      </template>
    </Hero>
    <div class="rounded">
      <img src="/photo.jpg" alt="photo" class="h-64 mx-auto rounded-full">
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>
