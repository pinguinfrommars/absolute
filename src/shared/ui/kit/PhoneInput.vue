<template>
  <base-input-wrapper>
    <input
      ref="inputRef"
      :id="id"
      type="tel"
      :disabled="disabled"
      required
      v-maska="mask"
      :value="modelValue"
      @input="onInput"
    />
    <span><slot></slot></span>
  </base-input-wrapper>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue'
import type { VNodeRef } from 'vue'
import type { IPhoneInputProps } from './types'
import { vMaska } from 'maska/vue'
import { BaseInputWrapper } from '.'

const $props = defineProps<IPhoneInputProps>()

const $emits = defineEmits(['update:modelValue'])

const inputRef = ref<VNodeRef | undefined>()

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  $emits('update:modelValue', target.value)
}

defineExpose({ inputRef })
</script>
