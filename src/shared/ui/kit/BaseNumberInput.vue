<template>
  <base-input-wrapper>
    <span><slot>от</slot></span>
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
  </base-input-wrapper>
</template>

<script setup lang="ts">
import { BaseInputWrapper } from '.'
import type { INumberInputProps } from './types'

defineProps<INumberInputProps>()
const $emits = defineEmits(['update:modelValue'])

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  $emits('update:modelValue', target.value)
}
</script>
