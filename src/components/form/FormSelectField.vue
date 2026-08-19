<script setup lang="ts">
import { useId } from 'vue'

import { Field as VeeField } from 'vee-validate'
import { Field, FieldDescription, FieldError, FieldLabel } from '../ui/field'
import {
  Select as SelectRoot,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '../ui/select'
import type { Option, OptionGroup } from '@/types/form.types'

interface Props {
  fieldName: string
  label: string
  options: Option[] | OptionGroup[]
  placeholder: string
  required?: boolean
  disabled?: boolean
  description?: string
  srOnlyDescription?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  required: false,
  disabled: false,
  description: undefined,
  srOnlyDescription: false,
})

const fieldId: string = useId()
const descriptionId: string = `${fieldId}-description`
const errorId: string = `${fieldId}-error`

function describedBy(invalid: boolean) {
  const ids: string[] = []

  if (props.description) ids.push(descriptionId)
  if (invalid) ids.push(errorId)

  return ids.join(' ') || undefined
}

function isOptionGroup(option: Option | OptionGroup): option is OptionGroup {
  return 'options' in option
}
</script>

<template>
  <VeeField
    v-slot="{ componentField, errors }"
    :name="props.fieldName"
  >
    <Field :data-invalid="!!errors.length">
      <FieldLabel
        :for="fieldId"
        :required-mark="props.required"
      >
        {{ props.label }}
      </FieldLabel>

      <SelectRoot v-bind="componentField">
        <div class="flex items-center gap-2">
          <SelectTrigger
            :id="fieldId"
            :disabled="props.disabled"
            :aria-invalid="!!errors.length"
            :aria-required="props.required"
            :aria-describedby="describedBy(errors.length > 0)"
          >
            <SelectValue :placeholder="props.placeholder" />
          </SelectTrigger>

          <slot name="action" />
        </div>

        <SelectContent>
          <template
            v-for="(option, index) in props.options"
            :key="index"
          >
            <SelectGroup v-if="isOptionGroup(option)">
              <SelectLabel>
                {{ option.label }}
              </SelectLabel>

              <SelectItem
                v-for="opt in option.options"
                :key="opt.value"
                :value="opt.value"
              >
                {{ opt.label }}
              </SelectItem>
            </SelectGroup>

            <SelectItem
              v-else
              :value="option.value"
            >
              {{ option.label }}
            </SelectItem>
          </template>
        </SelectContent>
      </SelectRoot>

      <FieldDescription
        v-if="props.description"
        :id="descriptionId"
        :class="{ 'sr-only': props.srOnlyDescription }"
      >
        {{ props.description }}
      </FieldDescription>

      <FieldError
        v-if="errors.length"
        :id="errorId"
        :errors="errors"
      />
    </Field>
  </VeeField>
</template>
