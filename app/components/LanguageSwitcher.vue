<script setup lang="ts">
const { locale, locales, t } = useI18n()
const switchLocalePath = useSwitchLocalePath()
</script>

<template>
  <nav :aria-label="t('language.navigation')" class="flex gap-4">
    <template v-for="language in locales" :key="language.code">
      <span v-if="language.code === locale" :lang="language.language" aria-current="page">
        {{ language.name }}
      </span>
      <NuxtLink
        v-else
        :to="switchLocalePath(language.code)"
        :lang="language.language"
        :hreflang="language.language"
        class="underline"
      >
        {{ language.name }}
      </NuxtLink>
    </template>
  </nav>
</template>
