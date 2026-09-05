<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import AppLink from '@/components/shared/AppLink.vue'

interface LegalLink {
  label: string
  href: string
}

interface Props {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()

const currentYear: number = new Date().getFullYear()

const legalLinks: LegalLink[] = [
  { label: 'Impressum', href: '/impressum' },
  { label: 'Datenschutz', href: '/datenschutz' },
  { label: 'AGB', href: '/agb' },
]
</script>

<template>
  <footer :class="cn('flex flex-col items-start', props.class)">
    <nav aria-label="Rechtliches">
      <ul class="flex flex-wrap items-center gap-x-5 text-sm">
        <li
          v-for="link in legalLinks"
          :key="link.href"
        >
          <AppLink :href="link.href">
            {{ link.label }}
          </AppLink>
        </li>
      </ul>
    </nav>

    <p class="text-muted-foreground text-xs">&copy; {{ currentYear }} Nibble</p>
  </footer>
</template>
