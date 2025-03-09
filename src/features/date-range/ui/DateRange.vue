<template>
  <div class="app-date-range">
    <span class="app-date-range__title">
      <slot name="title"></slot>
    </span>
    <div class="app-date-range__inputs">
      <date-input v-model="dateFrom">с</date-input>
      <date-input v-model="dateTo" :min-date="dateFrom">по</date-input>
    </div>
    <slot name="validation"></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, watchEffect } from 'vue'
import { DateInput } from '@/shared/ui/kit'
import type { IDateRangeProps } from '../model/types'

const $props = defineProps<IDateRangeProps>()
const $emits = defineEmits(['update:dateFrom', 'update:dateTo'])

const dateFrom = ref<string>('')
const dateTo = ref<string>('')

watchEffect(() => {
  $emits('update:dateFrom', dateFrom.value)
  $emits('update:dateTo', dateTo.value)
})
</script>
