<template>
  <div class="app-resident-form">
    <div class="app-resident-form__title">
      <slot name="title"></slot>
    </div>
    <div class="app-resident-form__item">
      <base-input v-model="value">Наименование организации/ИП</base-input>
    </div>
    <div class="app-resident-form__item">
      <phone-input :mask="'+#(###)-###-##-##'" v-model="phone">Телефон</phone-input>
    </div>
    <div class="app-resident-form__item">
      <base-select :items="selectItems" v-model="selectValue">Производственная площадь</base-select>
    </div>
    <div class="app-resident-form__item">
      <base-input v-model="value">Адрес</base-input>
    </div>
    <div class="app-resident-form__item">
      <date-range v-model:dateFrom="selectedDateFrom" v-model:dateTo="selectedDateTo">
        <template #title>Дата начала аренды</template>
      </date-range>
    </div>
    <div class="app-resident-form__item">
      <area-range v-model:areaFrom="numberFrom" v-model:areaTo="numberTo">
        <template #title>Площадь помещения (м<sup>2</sup>)</template>
      </area-range>
    </div>
    <div class="app-resident-form__actions">
      <submit-button :size="'medium'">Отправить</submit-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, type VNodeRef, onMounted } from 'vue'
import { DateRange } from '@/features/date-range/ui'
import { AreaRange } from '@/features/area-range/ui'
import { BaseInput, PhoneInput, BaseSelect, DateInput, BaseNumberInput } from '@/shared/ui/kit'
import { SubmitButton } from '@/features/submit-action/ui'
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
const selectedDateFrom = ref<Date | string>('')
const selectedDateTo = ref<Date | string>('')
const numberFrom = ref<number | null>(null)
const numberTo = ref<number | null>(null)

onMounted(() => console.log(phoneRef.value))
</script>

<style lang="css" scoped>
.app-grid {
  display: grid;
  grid-template-columns: 4;
  gap: 1rem;
}
</style>
