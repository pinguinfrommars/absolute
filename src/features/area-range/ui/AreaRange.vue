<template>
  <div class="app-area-range">
    <span class="app-area-range__title">
      <slot name="title"></slot>
    </span>
    <div class="app-area-range__inputs">
      <area-input v-model="areaFrom">от</area-input>
      <area-input v-model="areaTo">до</area-input>
    </div>
    <slot name="validation"></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { BaseNumberInput as AreaInput } from '@/shared/ui/kit'
import type { IAreaRangeProps } from '../model/types'

defineProps<IAreaRangeProps>()
const $emits = defineEmits(['update:areaFrom', 'update:areaTo'])

const areaFrom = ref<number | null>(null)
const areaTo = ref<number | null>(null)

watch(
  () => areaFrom.value,
  () => {
    $emits('update:areaFrom', areaFrom.value)
  },
)
watch(
  () => areaTo.value,
  () => {
    $emits('update:areaTo', areaTo.value)
  },
)
</script>
