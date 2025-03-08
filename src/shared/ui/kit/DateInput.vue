<template>
  <VueDatePicker v-model="selectedDate" :enable-time-picker="false">
    <template #dp-input="{ value, onInput, onBlur }">
      <base-input-wrapper>
        <input :value="value" @input="onInput" @blur="onBlur" class="app-datepicker" />
      </base-input-wrapper>
    </template>
  </VueDatePicker>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import VueDatePicker from '@vuepic/vue-datepicker'
import { BaseInputWrapper } from '.'
import '@vuepic/vue-datepicker/dist/main.css'

const selectedDate = ref()
</script>
