<template>
  <BaseButton
    variant="primary"
    shape="rounded"
    :size="size"
    :loading="loading"
    :disabled="disabled"
    v-bind="$attrs"
  >
    <slot>Отправить</slot>
    <template #loading>Отправка...</template>
  </BaseButton>
</template>

<script setup lang="ts">
import { BaseButton } from '@/shared/ui/kit'
import type { ISubmitButtonProps } from '../model/types'

defineProps<ISubmitButtonProps>()
</script>
