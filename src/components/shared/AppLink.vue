<script setup lang="ts">
import { computed, type HTMLAttributes } from 'vue'
import { RouterLink } from 'vue-router'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { focusRingOffset, transitionInteractive } from '@/lib/interactive-styles'

interface Props {
  routeName?: string
  href?: string
  tone?: LinkVariants['tone']
  size?: LinkVariants['size']
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  routeName: undefined,
  href: undefined,
  tone: 'primary',
  size: 'default',
  class: undefined,
})

const linkVariants = cva(
  [
    focusRingOffset,
    transitionInteractive,
    'rounded-sm underline decoration-1 underline-offset-4 hover:decoration-2',
    '[&_svg]:shrink-0 [&_svg]:transition-transform [&_svg]:duration-200 [&_svg]:ease-out',
    'hover:[&_svg]:translate-x-0.5',
  ],
  {
    variants: {
      tone: {
        primary: 'text-primary hover:text-primary-subtle-foreground',
        current: 'text-current opacity-90 hover:opacity-100',
      },
      size: {
        default: 'inline-flex min-h-11 items-center gap-1.5',
        inline: 'inline',
      },
    },
    defaultVariants: {
      tone: 'primary',
      size: 'default',
    },
  },
)

type LinkVariants = VariantProps<typeof linkVariants>

const isExternal = computed<boolean>(
  () => props.href !== undefined && props.href.startsWith('http'),
)

const classes = computed<string>(() =>
  cn(linkVariants({ tone: props.tone, size: props.size }), props.class),
)
</script>

<template>
  <RouterLink
    v-if="props.routeName !== undefined"
    :to="{ name: props.routeName }"
    :class="classes"
  >
    <slot />
  </RouterLink>

  <a
    v-else-if="props.href !== undefined"
    :href="props.href"
    :target="isExternal ? '_blank' : undefined"
    :rel="isExternal ? 'noopener noreferrer' : undefined"
    :class="classes"
  >
    <slot />

    <span
      v-if="isExternal"
      class="sr-only"
    >
      (öffnet in neuem Tab)
    </span>
  </a>
</template>
