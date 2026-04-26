<template>
  <header class="hstack justify-between pl-4 pr-4">
    <nuxt-link class="hstack gap-x-2" :to="$nuxt.$localePath('/dashboard')">
    </nuxt-link>

    <div class="hstack">
      <UiButton
        :as="NuxtLink"
        :to="$nuxt.$localePath('/dashboard')"
        variant="ghost-secondary"
        size="xs"
        class="h-8 gap-x-1"
        :aria-label="$t('dashboard.my_resumes')"
      >
        <span class="i-ep:menu text-lg" />
        <span class="hide-on-mobile text-base">
          {{ $t("dashboard.my_resumes") }}
        </span>
      </UiButton>

      <slot name="tail" />

      <SharedToggleDark />

      <UiButton
        as="a"
        variant="ghost-secondary"
        size="round"
        href="https://github.com/PCarroll9500"
        target="_blank"
        rel="nofollow noopener"
      >
        <span i-tabler:brand-github text-lg />
      </UiButton>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { NuxtLink } from "#components";
</script>
