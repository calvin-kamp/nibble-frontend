<script setup lang="ts">
import { computed, useId, useSlots } from 'vue'
import { FieldDescription, FieldLegend, FieldSet } from '../ui/field'

interface Props {
  label: string
  labelVariant?: 'legend' | 'label'
  description?: string
  srOnlyDescription?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  labelVariant: 'legend',
  description: undefined,
  srOnlyDescription: false,
})

const slots = useSlots()

const fieldId: string = useId()
const descriptionId: string = `${fieldId}-description`

const hasDescription = computed<boolean>(() => Boolean(props.description || slots.description))

const describedBy = computed<string | undefined>(() =>
  hasDescription.value ? descriptionId : undefined,
)
</script>

<template>
  <FieldSet :aria-describedby="describedBy">
    <FieldLegend :variant="props.labelVariant">
      {{ props.label }}
    </FieldLegend>

    <FieldDescription
      v-if="hasDescription"
      :id="descriptionId"
      :class="{ 'sr-only': props.srOnlyDescription }"
    >
      <slot name="description">
        {{ props.description }}
      </slot>
    </FieldDescription>

    <slot />
  </FieldSet>
</template>
