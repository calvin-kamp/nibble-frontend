<script setup lang="ts">
import LucideIcon from '@/components/shared/LucideIcon.vue'
import { CheckIcon } from '@lucide/vue'
import { benefitList } from '../auth.data'
</script>

<template>
  <div class="flex flex-col gap-7">
    <h2 class="max-w-[16ch] text-balance font-bold">Iss bewusst, ohne ständig zu rechnen.</h2>

    <ul
      aria-label="Nibble Vorteile"
      class="flex flex-col gap-3"
    >
      <li
        v-for="(benefit, index) in benefitList"
        :key="index"
        class="flex gap-2.5"
      >
        <LucideIcon
          :icon="CheckIcon"
          class="text-primary dark:text-primary-subtle-foreground mt-1 shrink-0"
        />

        <span class="max-w-[30ch] leading-snug">
          {{ benefit }}
        </span>
      </li>
    </ul>
  </div>
</template>
