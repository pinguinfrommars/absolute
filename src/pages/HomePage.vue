<template>
  <div class="app-page">
    <h1>Главная страница</h1>
    <SubmitButton :size="'large'" @click="$router.push('/resident')">К резидентам</SubmitButton>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { SubmitButton } from '@/features/submit-action/ui'
const $router = useRouter()
</script>
