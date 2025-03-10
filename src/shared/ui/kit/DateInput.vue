<template>
  <VueDatePicker
    v-model="selectedDate"
    :enable-time-picker="false"
    :min-date="minDate ? minDate : undefined"
  >
    <template #dp-input="{ value, onInput, onBlur }">
      <base-input-wrapper>
        <span><slot>c</slot></span>
        <input :value="value" @input="onInput" @blur="onBlur" class="app-datepicker__input" />
      </base-input-wrapper>
    </template>
  </VueDatePicker>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import VueDatePicker from '@vuepic/vue-datepicker'
import { BaseInputWrapper } from '.'
import '@vuepic/vue-datepicker/dist/main.css'
import type { IDatepickerProps } from './types'

defineProps<IDatepickerProps>()
const $emits = defineEmits(['update:modelValue'])

const selectedDate = ref<Date | null>(null)

watchEffect(() => $emits('update:modelValue', selectedDate.value))
</script>

<style scoped>
::v-deep(.dp--clear-btn) {
  display: none !important;
}
</style>
