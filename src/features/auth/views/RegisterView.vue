<script setup lang="ts">
import AuthCard from '../components/AuthCard.vue'
import RegisterForm from '../components/RegisterForm.vue'
</script>

<template>
  <AuthCard
    title="Konto erstellen"
    description="Kostenlos. Du brauchst nur eine E-Mail-Adresse."
    footer-text="Schon ein Konto?"
    footer-route-name="auth-login"
    footer-route-label="Anmelden"
  >
    <template #content>
      <RegisterForm />
    </template>
  </AuthCard>
</template>
