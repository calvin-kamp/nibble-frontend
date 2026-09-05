<script setup lang="ts">
import { useForm } from 'vee-validate'
import { registerSchema } from '../auth.schemas'
import type { AuthCredentials } from '../auth.types'
import { FieldGroup } from '@/components/ui/field'
import { FormTextField } from '@/components/form'
import { Button } from '@/components/ui/button'
import { endpoints, postJson } from '../auth.api'
import FormCheckboxField from '@/components/form/FormCheckboxField.vue'
import AppLink from '@/components/shared/AppLink.vue'

const { handleSubmit } = useForm({
  validationSchema: registerSchema,
  initialValues: {
    email: '',
    password: '',
    passwordConfirm: '',
    tosAccepted: false,
  },
})

const onSubmit = handleSubmit((data: AuthCredentials) => {
  const payload = {
    email: data.email,
    password: data.password,
    password_confirm: data.passwordConfirm,
    tos_accepted: data.tosAccepted,
  }

  postJson(endpoints.register, payload)
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

      <FormTextField
        field-name="passwordConfirm"
        label="Passwort wiederholen"
        description="Bestätige deine Passwort ein."
        sr-only-description
        placeholder="Password bestätigen"
      />

      <FormCheckboxField
        field-name="tosAccepted"
        label="AGB"
      >
        <template #description>
          Ich akzeptiere die <AppLink route-name="calorie-calculator">AGB</AppLink>.
        </template>
      </FormCheckboxField>

      <Button type="submit"> Anmelden </Button>
    </FieldGroup>
  </form>
</template>
