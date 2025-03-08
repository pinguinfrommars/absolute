<template>
  <div>
    <base-input-wrapper>
      <div class="app-select" :class="{ 'app-selected': true }">
        <div class="app-select__items">
          <div v-for="item in items" :key="item.value" class="app-select__item">
            {{ item.value }}
          </div>
        </div>
        <ChevronDown class="app-select__icon" />
      </div>
      <span><slot></slot></span>
    </base-input-wrapper>
    <!-- <ul>
      <li v-for="item in items" :key="item.value">{{ item.label }}</li>
    </ul> -->
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue'
import type { VNodeRef } from 'vue'
import { BaseInputWrapper } from '.'
import type { IBaseSelectProps } from './types'
import { ChevronDown } from '../icons'

const $emits = defineEmits(['update:modelValue'])

const $props = withDefaults(defineProps<IBaseSelectProps>(), {
  items: () => [
    {
      label: '',
      value: '',
    },
  ],
})
const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  $emits('update:modelValue', target.value)
}
</script>
