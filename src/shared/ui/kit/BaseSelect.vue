<template>
  <base-input-wrapper>
    <div></div>
  </base-input-wrapper>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue'
import type { VNodeRef } from 'vue'
import { BaseInputWrapper } from '.'
import type { IBaseSelectProps } from './types'

const $props = withDefaults(defineProps<IBaseSelectProps>(), {
  items: () => [
    {
      label: '',
      value: '',
    },
  ],
})

// const inputRef = ref<VNodeRef | undefined>()
</script>
