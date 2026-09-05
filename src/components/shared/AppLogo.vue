<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { LeafIcon } from '@lucide/vue'
import LucideIcon from './LucideIcon.vue'
import type { HTMLAttributes } from 'vue'

interface Props {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <div :class="props.class">
    <RouterLink
      :to="{ name: '' }"
      class="inline-flex items-center gap-2.5"
    >
      <span class="grid place-items-center size-8 bg-primary rounded-md text-primary-foreground">
        <LucideIcon
          :icon="LeafIcon"
          :size="20"
        />
      </span>

      <span class="text-xl font-bold"> Nibble </span>
    </RouterLink>
  </div>
</template>
