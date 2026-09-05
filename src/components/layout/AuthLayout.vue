<script setup lang="ts">
import { RouterView } from 'vue-router'
import { ArrowRightIcon } from '@lucide/vue'
import AppLogo from '@/components/shared/AppLogo.vue'
import AppLink from '@/components/shared/AppLink.vue'
import LucideIcon from '@/components/shared/LucideIcon.vue'
import { Separator } from '@/components/ui/separator'
import AuthBenefitPanel from '@/features/auth/components/AuthBenefitPanel.vue'
import AppFooter from './AppFooter.vue'
</script>

<template>
  <div class="grid min-h-svh xl:grid-cols-2">
    <div class="bg-muted hidden border-r xl:flex xl:justify-end">
      <div class="flex w-full max-w-160 flex-col justify-between gap-12 p-12">
        <AppLogo />

        <AuthBenefitPanel />

        <div class="flex flex-col gap-4">
          <Separator />

          <AppLink
            :to="{ name: 'calorie-calculator' }"
            tone="current"
            class="self-start"
          >
            Kalorienbedarf ohne Konto berechnen

            <LucideIcon :icon="ArrowRightIcon" />
          </AppLink>
        </div>
      </div>
    </div>

    <div class="flex flex-col items-center xl:items-start">
      <div class="flex w-full max-w-160 flex-1 flex-col items-center">
        <div class="flex w-full max-w-100 flex-1 flex-col px-4 md:px-0">
          <header class="py-6 xl:hidden">
            <AppLogo />
          </header>

          <main class="flex flex-1 flex-col justify-start py-2 md:justify-center">
            <RouterView />
          </main>

          <AppFooter class="py-6" />
        </div>
      </div>
    </div>
  </div>
</template>
