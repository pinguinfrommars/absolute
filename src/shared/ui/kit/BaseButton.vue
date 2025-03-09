<template>
  <button
    class="app-btn"
    :class="[buttonVarianClass, buttonSizeClass, buttonShapeClass]"
    v-bind="$attrs"
  >
    <template v-if="!$props.loading">
      <slot>нажми меня</slot>
    </template>
    <template v-else>
      <slot name="loading">загрузка...</slot>
    </template>
  </button>
</template>

<script setup lang="ts">
import { useAttrs, defineProps, computed } from 'vue'
import type { IBaseButtonProps } from './types'
const $attrs = useAttrs()

const $props = defineProps<IBaseButtonProps>()

const buttonVarianClass = computed<string>(() => {
  return `app-btn--${$props.variant}`
})
const buttonSizeClass = computed<string>(() => {
  return `app-btn--${$props.size}`
})
const buttonShapeClass = computed<string>(() => {
  return `app-btn--${$props.shape}`
})
</script>
