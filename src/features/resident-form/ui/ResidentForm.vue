<template>
  <div class="app-resident-form">
    <div class="app-resident-form__title">
      <slot name="title"></slot>
    </div>
    <form @submit.prevent="submitForm" novalidate>
      <div class="app-resident-form__item">
        <base-input v-model="name">Наименование организации/ИП</base-input>
        <span class="app-error-message app-validation-message" v-if="errors.name">{{
          errors.name
        }}</span>
      </div>
      <div class="app-resident-form__item">
        <phone-input :mask="'+#(###)-###-##-##'" v-model="phone">Телефон</phone-input>
        <span class="app-error-message app-validation-message" v-if="errors.phone">{{
          errors.phone
        }}</span>
      </div>
      <div class="app-resident-form__item">
        <base-select :items="selectItems" v-model="roomType" :mode="'multiselect'"
          >Производственная площадь</base-select
        >
        <span class="app-error-message app-validation-message" v-if="errors.roomType">{{
          errors.roomType
        }}</span>
      </div>
      <div class="app-resident-form__item">
        <base-input v-model="address">Адрес</base-input>
        <span class="app-error-message app-validation-message" v-if="errors.address">{{
          errors.address
        }}</span>
      </div>
      <div class="app-resident-form__item">
        <date-range v-model:dateFrom="dateFrom" v-model:dateTo="dateTo">
          <template #title>Дата начала аренды</template>
        </date-range>
        <span class="app-error-message app-validation-message" v-if="errors.dateFrom">{{
          errors.dateFrom
        }}</span>
        <span
          class="app-error-message app-validation-message"
          v-if="!errors.dateFrom && errors.dateTo"
          >{{ errors.dateTo }}</span
        >
      </div>
      <div class="app-resident-form__item">
        <area-range v-model:areaFrom="areaFrom" v-model:areaTo="areaTo">
          <template #title>Площадь помещения (м<sup>2</sup>)</template>
        </area-range>
        <span class="app-error-message app-validation-message" v-if="errors.areaFrom">{{
          errors.areaFrom
        }}</span>
        <span
          class="app-error-message app-validation-message"
          v-if="!errors.areaFrom && errors.areaTo"
          >{{ errors.areaTo }}</span
        >
      </div>
      <!--TODO вынести ошибки в отдельный компонент-->
      <div v-if="$residentStore.errors['addResident']" class="app-resident-form__item">
        <span class="app-error-message app-server-message">{{
          $residentStore.errors['addResident']
        }}</span>
      </div>
      <div class="app-resident-form__actions">
        <submit-button
          :size="'medium'"
          type="submit"
          :loading="$residentStore.loading['addResident']"
          >Отправить</submit-button
        >
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { DateRange } from '@/features/date-range/ui'
import { AreaRange } from '@/features/area-range/ui'
import { BaseInput, PhoneInput, BaseSelect, DateInput, BaseNumberInput } from '@/shared/ui/kit'
import { SubmitButton } from '@/features/submit-action/ui'
import type { IBaseSelectItem } from '@/shared/ui/kit/types'
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
import type { IAddResidentDto } from '@/shared/api/api.types'
import { useResidentStore } from '@/shared/store/resident.store'

const $residentStore = useResidentStore()

const selectItems = ref<IBaseSelectItem[]>([
  {
    label: 'Рабочая',
    value: '1',
  },
  {
    label: 'Подсобная',
    value: '2',
  },
  {
    label: 'Вспомогательная',
    value: '3',
  },
  {
    label: 'Объект полного цикла',
    value: '4',
  },
  {
    label: 'Склад',
    value: '5',
  },
])

const validationSchema: yup.ObjectSchema<IAddResidentDto> = yup.object({
  name: yup.string().required('Наименование организации обязательно'),
  phone: yup.string().required('Телефон обязателен'),
  roomType: yup
    .array()
    .of(
      yup.object({
        label: yup.string().required(),
        value: yup.string().required(),
      }),
    )
    .min(1, 'Производственная площадь обязательна')
    .required('Производственная площадь обязательна'),
  address: yup.string().required('Адрес обязателен'),
  areaFrom: yup
    .number()
    .transform((value) => (Number.isNaN(value) ? null : value))
    .required('Площадь помещения обязательна'),

  areaTo: yup
    .number()
    .transform((value) => (Number.isNaN(value) ? null : value))
    .required('Площадь помещения обязательна'),

  dateFrom: yup.date().nullable().required('Дата начала аренды обязательна'),

  dateTo: yup
    .date()
    .required('Дата окончания аренды обязательна')
    .test({
      name: 'dateTo',
      message: 'Дата окончания аренды должна быть больше даты начала аренды',
      test(value) {
        if (value && this.parent.dateFrom) {
          return new Date(value) > new Date(this.parent.dateFrom)
        }
        return true
      },
    }),
})

const { handleSubmit, errors } = useForm({
  validationSchema,
  initialValues: {
    name: '',
    phone: '',
    roomType: [],
    address: '',
    areaFrom: null,
    areaTo: null,
    dateFrom: null,
    dateTo: null,
  },
})

const { value: name, errorMessage: nameError } = useField<string>('name')
const { value: phone, errorMessage: phoneError } = useField<string>('phone')
const { value: roomType, errorMessage: roomTypeError } = useField<string>('roomType')
const { value: address, errorMessage: addressError } = useField<string>('address')
const { value: areaFrom, errorMessage: areaFromError } = useField<number | null>('areaFrom')
const { value: areaTo, errorMessage: areaToError } = useField<number | null>('areaTo')
const { value: dateFrom, errorMessage: dateFromError } = useField<Date | null>('dateFrom')
const { value: dateTo, errorMessage: dateToError } = useField<Date | null>('dateTo')

const submitForm = handleSubmit(async (values) => {
  await $residentStore.addResident(values)
})
</script>
