<script setup lang="ts">
const { locale } = useI18n()

useHead(() => ({ htmlAttrs: { lang: locale.value } }))
</script>

<template>
  <main class="mx-auto max-w-2xl space-y-6 p-6">
    <LanguageSwitcher />
    <slot />
  </main>
</template>
