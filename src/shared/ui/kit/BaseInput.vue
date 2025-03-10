<template>
  <base-input-wrapper>
    <input
      ref="inputRef"
      :id="id"
      :type="type"
      :value="modelValue"
      :disabled="disabled"
      @input="onInput"
      required
      tabindex="0"
    />
    <span class="app-input__label"><slot></slot></span>
  </base-input-wrapper>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { VNodeRef } from 'vue'
import type { IBaseInputProps } from './types'
import { BaseInputWrapper } from '.'

withDefaults(defineProps<IBaseInputProps>(), {
  type: 'text',
})

const $emits = defineEmits(['update:modelValue'])

const inputRef = ref<VNodeRef | undefined>()

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  $emits('update:modelValue', target.value)
}

defineExpose({ inputRef })
</script>
