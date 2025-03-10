<template>
  <div class="app-page">
    <h1>Страница для резидентов</h1>
    <SubmitButton :size="'large'" @click="open">Показать форму</SubmitButton>
    <modals-container />
  </div>
</template>

<script setup lang="ts">
import { ResidentForm } from '@/widgets/ui'
import { ModalsContainer, useModal } from 'vue-final-modal'
import SubmitButton from '@/features/submit-action/ui/SubmitButton.vue'

const { open } = useModal({
  component: ResidentForm,
})
</script>
