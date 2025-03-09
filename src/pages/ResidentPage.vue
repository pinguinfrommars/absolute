<template>
  <h1>Resident Page</h1>
  <modals-container />
  <button @click="open">Show modal</button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ResidentForm } from '@/widgets/ui'
import { ModalsContainer, useModal } from 'vue-final-modal'

const { open, close } = useModal({
  component: ResidentForm,
})
</script>
