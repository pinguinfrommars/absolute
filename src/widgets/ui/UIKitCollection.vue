<template>
  <div class="app-grid" style="padding: 1rem">
    <div class="app-grid__item">
      <base-input v-model="value">Наименование организации/ИП</base-input>
    </div>
    <div class="app-grid__item">
      <phone-input :mask="'+#(###)-###-##-##'" v-model="phone">Телефон</phone-input>
    </div>
    <div class="app-grid__item" style="width: 300px">
      <base-select :items="selectItems">Производственная площадь</base-select>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, type VNodeRef, onMounted } from 'vue'
import { BaseInput, PhoneInput, BaseSelect } from '@/shared/ui/kit'
import type { IBaseSelectItem } from '@/shared/ui/kit/types'

const value = ref('')
const phone = ref<string>('')
const phoneRef = ref<VNodeRef | undefined>()
const selectItems = ref<IBaseSelectItem[]>([
  {
    label: 'Россия',
    value: 'russia',
  },
  {
    label: 'США',
    value: 'usa',
  },
  {
    label: 'Германия',
    value: 'germany',
  },
  {
    label: 'Япония',
    value: 'japan',
  },
  {
    label: 'Китай',
    value: 'china',
  },
])
const selectValue = ref<IBaseSelectItem[]>(selectItems.value)

onMounted(() => console.log(phoneRef.value))
</script>

<style lang="css" scoped>
.app-grid {
  display: grid;
  grid-template-columns: 4;
  gap: 1rem;
}
</style>
