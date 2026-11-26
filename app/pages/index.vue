<script setup lang="ts">
const { t } = useI18n()
const showDetails = ref(false)

useSeoMeta({
  title: () => t('verification.title'),
  robots: 'noindex, nofollow',
})
</script>

<template>
  <section class="space-y-3">
    <h1 class="text-2xl font-semibold">{{ t('verification.title') }}</h1>
    <p>{{ t('verification.summary') }}</p>
    <button
      type="button"
      aria-controls="verification-details"
      :aria-expanded="showDetails"
      class="rounded border px-3 py-1"
      @click="showDetails = !showDetails"
    >
      {{ t('verification.toggle') }}
    </button>
    <p id="verification-details" v-show="showDetails">{{ t('verification.details') }}</p>
  </section>
</template>
