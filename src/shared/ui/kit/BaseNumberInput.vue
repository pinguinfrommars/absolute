<template>
  <base-input-wrapper>
    <div class="app-number-input">
      <span class="app-number-input__label"><slot></slot></span>
      <input
        ref="inputRef"
        :id="id"
        type="number"
        :value="modelValue"
        :disabled="disabled"
        @input="onInput"
        required
        class="app-number-input__input"
      />
    </div>
  </base-input-wrapper>
</template>

<script setup lang="ts">
import { ref, defineProps, watchEffect } from 'vue'
import { BaseInputWrapper } from '.'
import type { INumberInputProps } from './types'

const $props = defineProps<INumberInputProps>()
const $emits = defineEmits(['update:modelValue'])

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  $emits('update:modelValue', target.value)
}
</script>

<style scoped>
::v-deep .dp--clear-btn {
  display: none !important;
}
</style>
