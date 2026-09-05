<script setup lang="ts">
import { useForm } from 'vee-validate'
import { loginSchema } from '../auth.schemas'
import type { AuthCredentials } from '../auth.types'
import { FieldGroup } from '@/components/ui/field'
import { FormTextField } from '@/components/form'
import { Button } from '@/components/ui/button'

const { handleSubmit } = useForm({
  validationSchema: loginSchema,
  initialValues: {
    email: '',
    password: '',
  },
})

const onSubmit = handleSubmit((data: AuthCredentials) => {
  console.log(data)
})
</script>

<template>
  <form
    novalidate
    @submit="onSubmit"
  >
    <FieldGroup>
      <FormTextField
        field-name="email"
        label="E-Mail-Adresse"
        description="Gib deine E-Mail-Adresse ein."
        sr-only-description
        placeholder="max.mustermann@mustermail.de"
      />

      <FormTextField
        field-name="password"
        label="Passwort"
        description="Gib deine Passwort ein."
        sr-only-description
        placeholder="Passwort"
      />

      <Button type="submit"> Anmelden </Button>
    </FieldGroup>
  </form>
</template>
