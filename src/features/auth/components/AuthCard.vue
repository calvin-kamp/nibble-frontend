<script setup lang="ts">
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import AppLink from '@/components/shared/AppLink.vue'

interface Props {
  title: string
  description: string
  footerText: string
  footerRouteName: string
  footerRouteLabel: string
}

const props = defineProps<Props>()
</script>

<template>
  <Card class="w-full rounded-none py-8 ring-0 md:rounded-lg md:px-6 md:ring-1">
    <CardHeader class="px-0">
      <h1>
        {{ props.title }}
      </h1>

      <CardDescription> {{ props.description }} </CardDescription>
    </CardHeader>

    <CardContent class="px-0">
      <slot name="content" />
    </CardContent>

    <Separator />

    <CardFooter class="flex flex-wrap items-center justify-center gap-x-2 px-0">
      {{ props.footerText }}

      <AppLink :to="{ name: props.footerRouteName }">
        {{ props.footerRouteLabel }}
      </AppLink>
    </CardFooter>
  </Card>
</template>
