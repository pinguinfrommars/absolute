<template>
  <div class="app-grid" style="padding: 1rem; width: 600px">
    <div class="app-grid__item">
      <base-input v-model="value">Наименование организации/ИП</base-input>
    </div>
    <div class="app-grid__item">
      <phone-input :mask="'+#(###)-###-##-##'" v-model="phone">Телефон</phone-input>
    </div>
    <div class="app-grid__item">
      <base-select :items="selectItems" v-model="selectValue">Производственная площадь</base-select>
    </div>
    <div class="app-grid__item">
      <base-select :items="selectItems" :mode="'multiselect'" v-model="selectValues"
        >Производственная площадь</base-select
      >
    </div>
    <div class="app-grid__item">
      <base-input v-model="value">Адрес</base-input>
    </div>
    <div class="app-grid__item">
      <date-input v-model="selectedDateFrom">с</date-input>
    </div>
    <div class="app-grid__item">
      <date-input v-model="selectedDateTo" :min-date="selectedDateFrom">по</date-input>
    </div>
    <div class="app-grid__item">
      <base-number-input v-model="numberFrom">от</base-number-input>
    </div>
    <div class="app-grid__item">
      <base-number-input v-model="numberTo">до</base-number-input>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, type VNodeRef, onMounted } from 'vue'
import { BaseInput, PhoneInput, BaseSelect, DateInput, BaseNumberInput } from '@/shared/ui/kit'
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
const selectValue = ref<IBaseSelectItem>()
const selectValues = ref<IBaseSelectItem[]>()
const selectedDateFrom = ref<string>('')
const selectedDateTo = ref<string>('')
const numberFrom = ref<number>(null)
const numberTo = ref<number>(null)

onMounted(() => console.log(phoneRef.value))
</script>

<style lang="css" scoped>
.app-grid {
  display: grid;
  grid-template-columns: 4;
  gap: 1rem;
}
</style>
