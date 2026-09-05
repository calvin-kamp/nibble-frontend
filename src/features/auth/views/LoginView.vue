<script setup lang="ts">
import AuthCard from '../components/AuthCard.vue'
import LoginForm from '../components/LoginForm.vue'
</script>

<template>
  <AuthCard
    title="Willkommen zurück"
    description="Melde dich an, um weiter zu tracken."
    footer-text="Noch kein Konto?"
    footer-route-name="auth-register"
    footer-route-label="Konto erstellen"
  >
    <template #content>
      <LoginForm />
    </template>
  </AuthCard>
</template>
