<template>
  <div class="text-hero">
    <slot></slot>
    <div class="subtitle">
      <slot name="subtitle"></slot>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.text-hero {
  @apply text-center text-6xl font-bold tracking-tight text-gray-600;
}
.subtitle {
  @apply text-4xl text-gray-400 mt-3 italic;
}
</style>