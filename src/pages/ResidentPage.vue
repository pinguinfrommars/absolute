<template>
  <h1>Resident Page</h1>
  <vue-final-modal v-model="isModalVisible">
    <template #default>
      <ResidentForm />
    </template>
  </vue-final-modal>
  <button @click="showModal">Show modal</button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ResidentForm } from '@/widgets/ui'
import { VueFinalModal } from 'vue-final-modal'

const isModalVisible = ref(false)

const showModal = () => {
  isModalVisible.value = true
}
</script>
